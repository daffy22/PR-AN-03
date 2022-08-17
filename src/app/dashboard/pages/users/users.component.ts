import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../interfaces/user';

const ELEMENT_DATA: User[] = [
  { user: 'migges', firstName: 'Luis', lastName: 'Estrada', gender: 'Male' },
  { user: 'jpez', firstName: 'Juan', lastName: 'Castillo', gender: 'Male' },
  { user: 'laFee', firstName: 'Cuto', lastName: 'Guadalupe', gender: 'Male' },
  { user: 'casoCerrado', firstName: 'Dra.', lastName: 'Polo', gender: 'Female' },
  { user: 'Yolanda', firstName: 'Donde', lastName: 'Estas', gender: 'Female' },
  { user: 'frnaCDVT', firstName: 'Franco', lastName: 'Devita', gender: 'Male' },
  { user: 'jroge46', firstName: 'Jorge', lastName: 'Lozano', gender: 'Male' },
  { user: 'mrdb', firstName: 'Maria', lastName: 'Deniz', gender: 'Female' },
  { user: 'kennyS', firstName: 'Kenny', lastName: 'Schrub', gender: 'Male' },
  { user: 'fallen', firstName: 'Niid', lastName: 'ea', gender: 'Male' },
];

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

  displayedColumns: string[] = ['user', 'firstName', 'lastName', 'gender'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
