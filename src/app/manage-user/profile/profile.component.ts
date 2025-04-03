import { ChangeDetectorRef, Component, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'app/pages/authentication/auth.service';
import { environment } from 'app/environment/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush  // Ajoutez cette ligne
})
export class ProfileComponent implements OnInit {
  userProfile: User;
  frombuil: FormGroup;
  formSubmitted = false;
  imageUrl: string | null;
  @Inject(MAT_DIALOG_DATA) public data: any

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private serviceUser: UserService,
    private authService: AuthService,
    public updateDialogRef: MatDialogRef<ProfileComponent>,
  ) {
    const storedUserProfile = localStorage.getItem('userProfile');
    this.userProfile = storedUserProfile ? JSON.parse(storedUserProfile) : null;

    // Créer le formulaire réactif avec les champs nécessaires
    this.frombuil = this.fb.group({
      firstName: [this.userProfile ? this.userProfile.firstName : ''],
      lastName: [this.userProfile ? this.userProfile.lastName : ''],
      email: [{ value: this.userProfile ? this.userProfile.email : '', disabled: true }],
      cin: [{ value: this.userProfile ? this.userProfile.cin : '', disabled: true }],
      phone: [this.userProfile ? this.userProfile.phone : ''],
    });
    
  }
  ngOnInit() {
    this.getUserImage();
  }

  getUserImage(): void {
    if (this.userProfile && this.userProfile.idUser) {
     this.imageUrl = `${environment.url}/upload-directory/${this.userProfile.imageUrl}`;
      console.log(this.imageUrl); // Affichez l'URL dans la console
    } else {
      this.imageUrl = './assets/images/profile/user-1.jpg';
    }
    
  }

  closeDialog(): void {
    this.updateDialogRef.close();
  }

  submitForm(formData: any): void {
    this.updateDialogRef.close(formData);
  }
}
