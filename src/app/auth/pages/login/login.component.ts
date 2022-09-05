import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    .flex-one-column {
      display: flex;
      justify-content: center;
    }
    `
  ]
})
export class LoginComponent {

  constructor( private router: Router,
               private authService: AuthService ) { }

  login( ) {
    this.authService.login()
      .subscribe( resp => {
        if ( resp.id ) {
          this.router.navigate(['./dashboard']);
        }
      });
  }

}
