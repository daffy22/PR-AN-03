import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: [
    `
    .example-card {
      max-width: 400px;
    }

    .example-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
    `
  ]
})
export class UserCardComponent {

  @Input() user!: User;

  constructor(private router: Router) { }

  backTo() {
    this.router.navigate(['/users']);
  }

}
