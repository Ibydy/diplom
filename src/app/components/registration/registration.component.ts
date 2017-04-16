import { Component, OnInit } from '@angular/core';
import {Person} from "./Person";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  person = new Person();
  errorMessage :string;
  constructor() { }

  ngOnInit() {
  }

  registry = () => {
    if (!this.person.isAllfieldsFulfilled()) {
      this.errorMessage = 'Заполните все поля!';
      return;
    }
  }

}
