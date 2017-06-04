import {Component, OnInit} from '@angular/core';
import {Person} from './Person';
import {Http} from '@angular/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  person = new Person();
  errorMessage: string;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  registry = () => {
    if (!this.person.isAllfieldsFulfilled()) {
      this.errorMessage = 'Заполните все поля!';
      return;
    }
    this.http.post('http://localhost:3001/registration', this.person)
      .forEach((response) => {
        const body = response.json();
        if (body.error) {
          this.errorMessage = body.error;
          return;
        }
      })
      .catch(() => console.log('server registration error'));
  }

}
