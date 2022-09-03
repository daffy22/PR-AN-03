import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AddUserComponent } from '../../components/dialogs/add-user/add-user.component';
import { DeleteUserComponent } from '../../components/dialogs/delete-user/delete-user.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
    `
    .header {
      min-width: 95%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    /* Structure */
    table {
      width: 100%;
    }

    .mat-form-field {
      font-size: 1.4rem;
      width: 100%;
    }
    `
  ]
})
export class UsersComponent implements AfterViewInit {

  displayedColumns: string[] = ['user', 'firstName', 'lastName', 'gender', 'action'];

  get users() {
    return this.userService.getUsers;
  }

  dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private userService: UserService,
               private router: Router,
               public dialog: MatDialog ) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editUser( user: any ) {
  const id: string = user.id;
    this.router.navigate([`users/edit/${ id }`]);
  }

  openDeleteDialog( user: any ) {
    this.dialog.open(DeleteUserComponent, {
      width: '25rem',
      data: {
        user
      }
    });
  }

  openNewUserDialog() {
    this.dialog.open(AddUserComponent, {
      width: '85rem'
    });
  }
}
