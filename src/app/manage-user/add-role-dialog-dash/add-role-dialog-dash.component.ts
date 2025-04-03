// add-role-dialog-dash.component.ts
import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RoleService } from '../service/role.service';
import { Role } from '../model/role';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-role-dialog-dash',
  templateUrl: './add-role-dialog-dash.component.html',
  styleUrls: ['./add-role-dialog-dash.component.scss']
})
export class AddRoleDialogDashComponent {

  role: Role = new Role();
  imageUrl: string | ArrayBuffer | null = './assets/images/profile/user-1.jpg';
  formSubmitted = false;

  @ViewChild('fileInput') fileInput: any;

  constructor(public addDialogRef: MatDialogRef<AddRoleDialogDashComponent>, private roleService: RoleService) {}


  resetAvatarImage(): void {
    this.imageUrl = './assets/images/profile/user-1.jpg';
  }

  closeDialog(): void {
    this.addDialogRef.close();
  }

  submitForm(role: any): void {
    this.formSubmitted = true;

    if (!this.validateForm(role)) {
      return;
    }

    this.roleService.addRole(role).subscribe(
      (response) => {
        this.addDialogRef.close();
        Swal.fire({
          title: 'Ajout réussi!',
          text: 'Votre rôle est ajouté avec succès !',
          icon: 'success',
        });
      },
      (error) => {
        console.error('Error adding role:', error);
        // Handle errors here, for example, display a message to the user
      }
    );
    window.location.reload();

  }

  private validateForm(role: any): boolean {
    
    if (!role.name) {
      console.log('All fields are required');
      return false;
    }

    // Add more validation rules if needed...

    return true;
  }
}
