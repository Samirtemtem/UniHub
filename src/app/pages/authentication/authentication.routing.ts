import { Routes } from '@angular/router';
import { AppSideLoginComponent } from './login/login.component';
import { AppSideRegisterComponent } from './register/register.component';
import { ChangePasswordDialogComponent } from './change-password-dialog/change-password-dialog.component';
import { ProfileComponent } from 'app/manage-user/profile/profile.component';

export const AuthenticationRoutes: Routes = [
  {
    // une route qui n'utilise pas de paramètres dynamiques et dont l'URL ne change pas en fonction des données spécifiques de la requête    path: 'login',
    path: 'login',
    component: AppSideLoginComponent,
  },
  {
    path: 'signup',
    component: AppSideRegisterComponent,
  },
  { path: 'register/reset-password', component: ChangePasswordDialogComponent },
  { path: 'profile', component:ProfileComponent },


];
