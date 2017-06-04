import {Component, HostListener, OnInit} from '@angular/core';
import {KeyCodes} from './KeyCodes';
import {SessionStorageService} from 'ngx-webstorage';
import {Http} from '@angular/http';

enum Stage {
  start,
  prepare,
  test,
  postTest
}


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  /**
   * Test in progress
   */
  Stages = Stage;
  testStage = this.Stages.prepare;
  private readonly CIRCLE_UP_CLASS = 'circle_up';
  private readonly CIRCLE_DOWN_CLASS = 'circle_down';
  private readonly CIRCLE_LEFT_CLASS = 'circle_left';
  private readonly CIRCLE_RIGHT_CLASS = 'circle_right';
  private startTestDate;
  private testTimeMilliSeconds;
  private circleClasses = [this.CIRCLE_LEFT_CLASS, this.CIRCLE_RIGHT_CLASS, this.CIRCLE_DOWN_CLASS, this.CIRCLE_UP_CLASS];
  direction = '';
  positionStyle = {};

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.code === KeyCodes.SPACE) {
      this.startEndTest();
      return;
    }
    if (this.testStage === this.Stages.postTest) {
      switch (event.code) {
        case KeyCodes.ARROW_LEFT:
          this.choiseDirrection(this.CIRCLE_LEFT_CLASS);
          break;
        case KeyCodes.ARROW_RIGHT:
          this.choiseDirrection(this.CIRCLE_RIGHT_CLASS);
          break;
        case KeyCodes.ARROW_DOWN:
          this.choiseDirrection(this.CIRCLE_DOWN_CLASS);
          break;
        case KeyCodes.ARROW_UP:
          this.choiseDirrection(this.CIRCLE_UP_CLASS);
          break;
      }
    }
  }

  constructor(private storageService: SessionStorageService, private http: Http) {
  }

  ngOnInit() {
  }

  startEndTest = () => {
    if (this.testStage === this.Stages.prepare) {
      this.testStage = this.Stages.start;
      this.direction = this.circleClasses[this.getRandomInt(0, 4)];
      this.positionStyle = {'top': `${this.getRandomInt(0, 65)}%`, 'left': `${this.getRandomInt(0, 65)}%`};
      setTimeout(() => {
        this.testStage = this.Stages.test;
        this.startTestDate = new Date();
      }, this.getRandomInt(1000, 5000));
      return;
    }
    if (this.testStage === this.Stages.test) {
      this.testTimeMilliSeconds = Number(new Date()) - this.startTestDate;
      this.testStage = this.Stages.postTest;
    }
  };

  choiseDirrection = (direction: string) => {
    this.testStage = this.Stages.prepare;
    if (this.direction === direction) {
      const user = this.storageService.retrieve('user');
      if (user) {
        user.testTime = this.testTimeMilliSeconds;
        this.http.post('http://localhost:3001/addResult', user)
          .forEach((response) => {
            const body = response.json();
            alert(`Ваше время: ${this.testTimeMilliSeconds} .Результат был записан`);
          });
      } else {
        alert(`Ваше время: ${this.testTimeMilliSeconds} .Результат не будет записан если вы не войдёте под своим аккаунтом`);
      }
      return;
    }
    alert('неверное направление.Эта попытка не будет засчитана');
  };

  private getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

}
