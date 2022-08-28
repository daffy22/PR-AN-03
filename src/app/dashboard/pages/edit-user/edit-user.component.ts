import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: [
  ]
})
export class EditUserComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute,
               private userService: UserService ) { }

  user: User = {
    id: '',
    user: '',
    firstName: '',
    lastName: '',
    gender: ''
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) =>  this.userService.getUser(id) )
      )
      .subscribe( user => {
        this.user = user;
        console.log(this.user);
      } );
  }

}
