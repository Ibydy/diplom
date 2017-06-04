import {Component, OnInit} from '@angular/core';
import {User} from './User';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  user = new User();

  constructor(private http: Http, private Router: Router, private storageService:SessionStorageService) {
  }

  ngOnInit() {
  }

  login = (): void => {
    if (!this.user.isAllFieldFullfield()) {
      this.showError(); // TODO create normal error messages
      return;
    }
    this.http.post('http://localhost:3001/login', this.user)
      .forEach((response) => {
        const body = response.json();
        this.storageService.store('user', this.user);
        this.Router.navigateByUrl('/test');
      })
      .catch(this.showError);
  };

  private showError = () => {
    alert('ошибка при логине');
  };

}
