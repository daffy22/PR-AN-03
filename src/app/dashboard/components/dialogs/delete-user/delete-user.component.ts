import { Component, Inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styles: [
  ]
})
export class DeleteUserComponent {

  constructor( public dialogRef: MatDialogRef<DeleteUserComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               private userService: UserService,
               private snackBar: MatSnackBar ) {}

  deleteUser() {
    const { id, user } = this.data.user;
    this.userService.deleteUser(id)
      .subscribe();
    this.snackBar.open(`User -${ user }- deleted`, 'Close');
  }
}
