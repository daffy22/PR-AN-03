import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/dashboard/interfaces/user';
import { UserService } from '../../../services/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
    `
    .grid-two-columns {
      margin-right: 2.4rem;
      display: grid;
      grid-template-columns: 50% 50%;
      column-gap: 2rem;
    }
    `
  ]
})
export class AddUserComponent {

  user: User = {
    id: '',
    backgroundImg: '',
    user: '',
    firstName: '',
    lastName: '',
    gender: ''
  }

  myForm: FormGroup = this.fb.group({
    user: [ , Validators.required ],
    firstName: [ , Validators.required ],
    lastName: [ , Validators.required ],
    gender: [ , Validators.required ],
    backgroundImg: [ 'https://ocpcyprus.com/wp-content/uploads/2017/05/no-profile-210x210.jpg' ],
  });

  constructor( public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder ) {}

  addUser() {
    this.user.user = this.myForm.value['user'];
    this.user.firstName = this.myForm.value['firstName'];
    this.user.lastName = this.myForm.value['lastName'];
    this.user.gender = this.myForm.value['gender'];
    this.user.backgroundImg = this.myForm.value['backgroundImg'];

    this.userService.postUser(this.user)
      .subscribe( (_) => {
        this.snackBar.open(`User created`, 'Close');
      });
  }

  fieldNotValid( field: string ) {
    return this.myForm.controls[field].errors
        && this.myForm.controls[field].touched;
  }
}
