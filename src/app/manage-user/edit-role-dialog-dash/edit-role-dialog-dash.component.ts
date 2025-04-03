import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoleService } from '../service/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-role-dialog-dash',
  templateUrl: './edit-role-dialog-dash.component.html',
  styleUrls: ['./edit-role-dialog-dash.component.scss']
})
export class EditRoleDialogDashComponent {
  idRole: number;
  imageUrl: string | ArrayBuffer | null = './assets/images/profile/user-1.jpg';
  formSubmitted = false;

  constructor(
    public updateDialogRef: MatDialogRef<EditRoleDialogDashComponent>,
    private serviceRole: RoleService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.frombuil.patchValue({
      ...(data || {}),
    });
  }

  frombuil = this.fb.group({
    idRole : [''],
    name: [''],
  });

  get form() {
    return this.frombuil.controls;
  }

  updateRole(form: FormGroup) {
    this.formSubmitted = true;
  
    if (form.valid) {
      const formData = {
        ...form.value,
      };
  
      console.log('Updating role with data:', formData); // Ajoutez cette ligne pour vérifier les données
  
      this.serviceRole.updateRole(formData).subscribe(
        () => {
          form.reset();
          this.updateDialogRef.close();
          
          Swal.fire({
            title: 'Mise à jour réussie!',
            text: 'Votre rôle est mis à jour !',
            icon: 'success',
          });
        },
        (error) => {
          console.error('Erreur lors de la mise à jour :', error);
        }
      );
    }
    window.location.reload();

  }

  closeDialog(): void {
    this.updateDialogRef.close();
  }

  submitForm(formData: any): void {
    this.updateDialogRef.close(formData);
  }
}