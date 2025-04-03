import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: [
    '../../../../assets/css/default.css',
    '../../../../assets/css/bootstrap.min.css',
    '../../../../assets/front/css/fontAwesome5Pro.css',
    '../../../../assets/css/style.css',
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ChangePasswordDialogComponent {
  newPassword: string = '';
  resetForm: FormGroup;
  formSubmitted = false;
  //@Output est utilisé pour déclarer un événement émis par le composant.

  @Output() formSubmittedEvent = new EventEmitter();
  @Input() token: string;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,private route: ActivatedRoute,private router: Router, ) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      newPassword: ['']
    });
     this.route.queryParams.subscribe(params => {
      console.log(params)
      this.token = params['token']; 
      console.log(this.token)

    });
  }

  get form() {
    return this.resetForm.controls;
  }

  onSubmit() {
    const newPasswordValue = this.resetForm.value.newPassword;

    this.authService.changePassword(newPasswordValue, this.token).subscribe(
      (response) => {
        console.log('Password reset successful', response);
        this.formSubmitted = true;
        this.formSubmittedEvent.emit();
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Password reset failed', error);
      }
    );
  }
}

