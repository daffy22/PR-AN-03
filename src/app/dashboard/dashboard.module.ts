import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { ReportsComponent } from './pages/reports/reports.component';

// Components
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { BackgroundImagePipe } from './pipes/background-image.pipe';
import { DeleteUserComponent } from './components/dialogs/delete-user/delete-user.component';

@NgModule({
  declarations: [
    // Pages
    DashboardComponent,
    EditUserComponent,
    HomeComponent,
    UsersComponent,
    ReportsComponent,
    // Components
    ToolbarComponent,
    UserCardComponent,
    //Pipes
    BackgroundImagePipe,
    DeleteUserComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
