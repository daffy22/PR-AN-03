import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material/material.module';

// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { ReportsComponent } from './pages/reports/reports.component';

// Components
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './pages/home/home.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';

@NgModule({
  declarations: [
    // Pages
    DashboardComponent,
    EditUserComponent,
    UsersComponent,
    ReportsComponent,
    // Components
    ToolbarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
