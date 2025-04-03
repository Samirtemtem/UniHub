import { ChangeDetectorRef, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import Swal from 'sweetalert2';
import { environment } from 'app/environment/environment';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Role } from '../model/role';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-edit-user-dialog-dash',
  templateUrl: './edit-user-dialog-dash.component.html',
  styleUrls: ['./edit-user-dialog-dash.component.scss']
})
export class EditUserDialogDashComponent {
  imageUrl: string | ArrayBuffer | null = './assets/images/profile/user-1.jpg';
  formSubmitted = false; // Ajout d'une variable pour suivre l'état de soumission du formulaire
  imageFile: File;
  
  @ViewChild('fileInput') fileInput: ElementRef;
  allRoles: Role[] = [];
  constructor(
    public updateDialogRef: MatDialogRef<EditUserDialogDashComponent>,
    private serviceUser: UserService, private roleService :RoleService ,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef ,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.frombuil.patchValue({
      ...(data || {}),
      roles: this.data && this.data.roles ? this.data.roles.idRole : null

    });
  
    // Mettez à jour l'URL de l'image si l'utilisateur a une image, sinon utilisez l'image par défaut
    if (data && data.imageUrl) {
      this.imageUrl = `${environment.url}/upload-directory/${data.imageUrl}`;
    } 
  }
  
  frombuil = this.fb.group({
    idUser: [''],
    firstName: [''],
    email: [''],
    lastName: [''],
    cin: [''],
    phone: [''],
    password: [''],
    enabled: [''],
    roles: [''],
    imageUrl: [''],
  });
  ngOnInit(): void {
    this.roleService.getAllRoles().subscribe(
      (roles) => {
        this.allRoles = roles;
      },
      (error) => {
        console.error('Error retrieving roles:', error);
      }
    );
  }

  get form() {
    return this.frombuil.controls;
  }

  updateUser(form: FormGroup) {
    this.formSubmitted = true;

    if (form.valid) {
      const formData = {
        ...this.frombuil.value, // Utilisez this.frombuil.value
      };

      this.serviceUser.updateUser(formData, this.imageFile).subscribe(
        () => {
          form.reset();
        },
        (error) => {
          console.error('Erreur lors de la mise à jour :', error);
        }
      );

      this.updateDialogRef.close();
    

      Swal.fire({
        title: 'Update',
        text: 'Votre utilisateur est mis à jour !',
        icon: 'success',
      });
    }
    window.location.reload();
  }

  closeDialog(): void {
    this.updateDialogRef.close();
  }

  submitForm(formData: any): void {
    this.updateDialogRef.close(formData);
  }

  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(this.imageFile);
  }

  selectImage(): void {
    this.fileInput.nativeElement.click();
  }

  resetImage(): void {
    this.setDefaultImageUrl();

    if (this.fileInput) {
      this.fileInput.nativeElement.value = null;
    }

    this.imageFile ;
  }
  
  private setDefaultImageUrl() {
    this.imageUrl = this.data && this.data.imageUrl
      ? `${environment.url}/upload-directory/${this.data.imageUrl}`
      : './assets/images/profile/user-1.jpg';
  }

  dataSource: any;


}