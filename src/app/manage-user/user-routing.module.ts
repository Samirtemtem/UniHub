import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListDashComponent } from './user-list-dash/user-list-dash.component';
import { EditRoleDialogDashComponent } from './edit-role-dialog-dash/edit-role-dialog-dash.component';
import { EditUserDialogDashComponent } from './edit-user-dialog-dash/edit-user-dialog-dash.component';
import { ProfileComponent } from './profile/profile.component';
import { AppSideRegisterComponent } from 'app/pages/authentication/register/register.component';
import { AppSideLoginComponent } from 'app/pages/authentication/login/login.component';

const routes: Routes = [
  {
    //child route 
    path: '',
    children: [
      {
        path: '',
        component: UserListDashComponent,
      },
      {
        path: 'dashboard/roles/:id',
        component: EditRoleDialogDashComponent,
      },
      {
        path: 'edit-user/:id', component: EditUserDialogDashComponent 
      },
      {
        path: 'profile', component: ProfileComponent
      },
  
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
