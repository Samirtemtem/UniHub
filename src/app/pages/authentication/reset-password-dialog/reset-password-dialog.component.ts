import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: [
    '../../../../assets/css/default.css',
    '../../../../assets/css/bootstrap.min.css',
    '../../../../assets/front/css/fontAwesome5Pro.css',
    '../../../../assets/css/style.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ResetPasswordDialogComponent {
  email: string = '';
  resetForm: FormGroup;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,private authService: AuthService, public dialogRef: MatDialogRef<ResetPasswordDialogComponent>
  ) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get form() {
    return this.resetForm.controls;
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.resetForm.invalid) {
      return;
    }

    const email = this.resetForm.value.email;

    this.authService.resetPasswordRequest(email).subscribe(
      (response) => {
        console.log('Password reset request successful:', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Password reset request failed:', error);
      }
    );
    this.dialogRef.close();
    Swal.fire({
      title: " YOOO!",
      text: "Merci de vérifier votre e-mail et de cliquer sur le lien pour réinitialiser votre mot de passe.",
      icon: "info"
    })
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
}
