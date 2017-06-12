import {Component, OnInit} from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';
import {User} from '../login/User';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.less']
})
export class ResultListComponent implements OnInit {
  user: User;
  average;

  constructor(private storageService: SessionStorageService) {
  }

  ngOnInit() {
    this.user = this.storageService.retrieve('user');
    this.average = this.user.testTime.reduce((prev, curr) => prev + curr) / this.user.testTime.length;
  }

}
