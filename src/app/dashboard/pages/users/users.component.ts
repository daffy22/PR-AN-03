import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

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
export class UsersComponent implements OnInit,AfterViewInit {

  displayedColumns: string[] = ['user', 'firstName', 'lastName', 'gender', 'action'];

  get users() {
    return this.userService.getUsers;
  }

  dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
