import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: [
    `
    .container {
      display: flex;
      justify-content: space-between;
      min-width: 100%;
    }
    .container div {
      flex: 0 0 calc(33.3% - 1rem);
    }

    .container div:nth-child(2) {
      text-align: center;
      font-size: 15px;
    }

    .container span {
      padding: 0 10px;
      cursor: pointer;
    }

    .container div:nth-child(3) {
      text-align: right;
    }

    `
  ]
})
export class ToolbarComponent {

  get auth() {
    return this.authService.auth;
  }

  constructor( private router: Router,
               private authService: AuthService ) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['./auth']);
  }

}
