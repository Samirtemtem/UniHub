import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { MatDialogModule } from '@angular/material/dialog'; // Importez le module MatDialogModule
import { MatButtonModule } from '@angular/material/button'; // Importez le module MatButtonModule
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UserRoutingModule } from './user-routing.module';
import { UserListDashComponent } from './user-list-dash/user-list-dash.component';
import { AddUserDialogDashComponent } from './add-user-dialog-dash/add-user-dialog-dash.component';
import { AddRoleDialogDashComponent } from './add-role-dialog-dash/add-role-dialog-dash.component';
import { RoleListDashComponent } from './role-list-dash/role-list-dash.component';
import { EditRoleDialogDashComponent } from './edit-role-dialog-dash/edit-role-dialog-dash.component';
import { EditUserDialogDashComponent } from './edit-user-dialog-dash/edit-user-dialog-dash.component';
import {  AppErrorModule } from 'app/app-error.module';
import { AuthenticationModule } from 'app/pages/authentication/authentication.module';
import { ProfileComponent } from './profile/profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'app/pages/authentication/auth.interceptor';
import { ChangeColorDirective } from './change-color.directive';

@NgModule({
  declarations: [
    UserListDashComponent,
    AddUserDialogDashComponent,
    AddRoleDialogDashComponent,
    RoleListDashComponent,
    EditRoleDialogDashComponent,
    EditUserDialogDashComponent,
    ProfileComponent,
    ChangeColorDirective,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule, // Ajoutez le module MatDialogModule ici
    MatButtonModule ,// Ajoutez le module MatButtonModule ic
    AppErrorModule,


  ],
  
  exports: [TablerIconsModule]
})
export class UserModule {}