import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styles: [
    `
    .grid-two-columns {
      display: grid;
      grid-template-columns: 50% 50%;
      column-gap: 2rem;
    }
    `
  ]
})
export class ReportsComponent implements OnInit {

  length!: number;

  constructor( private userService: UserService ) { }

  ngOnInit(): void {
    this.length = this.userService.getUsersLength();
  }

}
