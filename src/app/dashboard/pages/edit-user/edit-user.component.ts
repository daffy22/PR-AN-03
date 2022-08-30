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
    backgroundImg: '',
    user: '',
    firstName: '',
    lastName: '',
    gender: ''
  }

  myForm: FormGroup = this.fb.group({
    firstName: [ , [ Validators.required ] ],
    lastName: [ , [ Validators.required ] ],
    gender: [ , [ Validators.required ] ],
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
        this.myForm.reset({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          gender: this.user.gender,
          backgroundImg: this.user.backgroundImg
        });
      });
  }

  backTo() {
    this.router.navigate(['/users']);
  }

  editUser() {

    this.user.firstName = this.myForm.value['firstName'];
    this.user.lastName = this.myForm.value['lastName'];
    this.user.gender = this.myForm.value['gender'];
    this.user.backgroundImg = this.myForm.value['backgroundImg'];

    this.myForm.reset({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      gender: this.user.gender,
      backgroundImg: this.user.backgroundImg
    });

    this.userService.patchUser(this.user)
      .subscribe();
  }

  fieldNotValid( field: string ) {
    return this.myForm.controls[field].errors
        && this.myForm.controls[field].touched;
  }

}
