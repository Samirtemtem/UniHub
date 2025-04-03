import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ResetPasswordDialogComponent } from '../reset-password-dialog/reset-password-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../../../../assets/css/default.css',
    '../../../../assets/css/bootstrap.min.css',
    '../../../../assets/front/css/fontAwesome5Pro.css',
    '../../../../assets/css/style.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppSideLoginComponent {
  formSubmitted = false; // Initialisez la variable formSubmitted
  loginForm: FormGroup;
  formError = false;
 
  constructor(
    private formBuilder: FormBuilder,private authService: AuthService,private router: Router,private dialog: MatDialog) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });

  }

  get form() {
    return this.loginForm.controls;
  }
  
  onSubmit() {
    this.formSubmitted = true;
  
    if (this.loginForm.invalid) {
      this.formError = true;
      return;
    }
    if (this.loginForm.valid) {
      const email = this.form['email'].value;
      const password = this.form['password'].value;
        this.authService.login(email, password).subscribe(
        (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/home']); 
        },
        (error) => {
          console.error('Login failed', error);
          Swal.fire({
            title: " failed!",
            text: "Merci de verifier votre email et mot de passe!",
            icon: "error"
          })
        }
       
      );
    }
  }

  showResetPasswordDialog() {
  
    const dialogRef = this.dialog.open(ResetPasswordDialogComponent, {
      width: '500px',
    });

 
  }

}
