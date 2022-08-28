import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
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
export class EditUserComponent implements OnInit {

  user: User = {
    id: '',
    profileImg: '',
    backgroundImg: '',
    user: '',
    firstName: '',
    lastName: '',
    gender: ''
  }

  myForm: FormGroup = this.fb.group({
    user: [ , [ Validators.required, Validators.minLength(5) ] ],
    firstName: [ , [ Validators.required ] ],
    lastName: [ , [ Validators.required ] ],
    gender: [ , [ Validators.required ] ],
    profileImg: [ 'https://ocpcyprus.com/wp-content/uploads/2017/05/no-profile-210x210.jpg' ],
    backgroundImg: [ 'https://ocpcyprus.com/wp-content/uploads/2017/05/no-profile-210x210.jpg' ],
  });

  constructor( private activatedRoute: ActivatedRoute,
               private userService: UserService,
               private router: Router,
               private fb: FormBuilder ) { }


  ngOnInit(): void {
    this.myForm.reset();
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) =>  this.userService.getUser(id) )
      )
      .subscribe( user => {
        this.user = user;
        console.log(this.user);
      } );
  }

  backTo() {
    this.router.navigate(['/users']);
  }

}
