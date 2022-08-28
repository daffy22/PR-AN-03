import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'users/edit/:id',
        component: EditUserComponent,
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
