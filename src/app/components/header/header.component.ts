import {Component, OnInit} from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';
import {User} from '../login/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private storageService: SessionStorageService) {
  }

  ngOnInit() {
    setInterval(() => {
      this.user = this.storageService.retrieve('user'); // Fixme Don't do this on real application ever!!
    }, 100);
  }

  logout = () => {
    this.storageService.clear('user');
  }
}
