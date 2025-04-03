import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../../../manage-user/model/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    '../../../../assets/css/default.css',
    '../../../../assets/css/bootstrap.min.css',
    '../../../../assets/front/css/fontAwesome5Pro.css',
    '../../../../assets/css/style.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppSideRegisterComponent {

  registerForm: FormGroup;
  user: User = new User();
  formcaptcha: FormGroup;
  formSubmitted = false;
  formError = false;
  protected aFormGroup: FormGroup;
  protected siteKey: string = '6LeGchYpAAAAAK7W0Ed0vSwUH8C2QFr3otG_a4-7';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {

      this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      cin: [''],
      phone: [''],
      password: [''],
      agreeTerms: [false, Validators.requiredTrue],
      recaptcha: [''],

    });
  }

  get form() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.formSubmitted = true;
  
    if (this.registerForm.invalid) {
      this.formError = true;
      return;
    }
  
    const { firstName, lastName, email, cin, phone, password } = this.registerForm.value;
    const role = 'ETUDIANT';
  
    this.authService.register(firstName, lastName, cin, phone, email, password, role ).subscribe(
      () => {
        console.log('Registration successful!');
        this.registerForm.reset();
      },
      (error) => {
        console.error('Registration failed:', error);
  
        // Check if the error is a 200 status (OK)
        if (error.status === 200) {
          console.log('Redirecting to login page...');
          this.router.navigate(['/login']);
        } else {
          Swal.fire({
            title: 'OOPS!',
            text: 'CHECK YOUR MAIL AND CIN ,THEY SHOULD BE UNIQUE.',
            icon: 'error',
          });
        }
      }
    );
  }
  

}
