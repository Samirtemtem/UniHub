import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../service/user.service';
import { RoleService } from '../service/role.service';
import { User } from '../model/user';
import { Role } from '../model/role';
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user-dialog-dash',
  templateUrl: './add-user-dialog-dash.component.html',
  styleUrls: ['./add-user-dialog-dash.component.scss'],
})
export class AddUserDialogDashComponent {
 
  allRoles: Role[] = [];
  selectedUser: number = 1;
  imageUrl: string | ArrayBuffer | null = './assets/images/profile/user-1.jpg';
    @ViewChild('fileInput') fileInput: ElementRef;
  selectedRole: Role;
  addUserForm: FormGroup;
  imageFile: File;
  user: User = new User();
  constructor(
    public addDialogRef: MatDialogRef<AddUserDialogDashComponent>,
    private fb: FormBuilder,
    private userService: UserService,
    private roleService: RoleService,   private cdr: ChangeDetectorRef // Ajoutez cette ligne

  ) {
    this.addUserForm = this.fb.group({
      lastName: [''],
      firstName: [''],
      email: [''],
      cin: 0,
      phone:0,
      password: [''],
      roles: ['', Validators.required], // Add this line to include 'roles' control

      // ... add other form controls as needed
    });
  }
  get form() {
    return this.addUserForm.controls;
  }

  formSubmitted = false;

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

  submitForm(): void {
    this.formSubmitted = true;
  
    if (this.addUserForm.invalid) {
      console.log('Form validation failed');
      return;
    }
  
    const user = this.addUserForm.value;
  
    this.userService.addUser(user, this.imageFile).subscribe(
      (response) => {
        console.log('User added successfully:', response);
        this.addDialogRef.close();
        Swal.fire({
          title: 'Ajout réussi!',
          text: 'Votre utilisateur a été ajouté avec succès !',
          icon: 'success',
        });
      },
      (error) => {
        console.error('Error adding user:', error);
        if (error.status === 200) {
          console.log('User added successfully.');
          this.addDialogRef.close();
       
          Swal.fire({
            title: 'Félicitations!',
            text: 'Utilisateur ajouté avec succès.',
            icon: 'success',
          });
        } else {
          Swal.fire({
            title: 'OOPS!',
            text: 'Vérifiez votre e-mail et le numéro CIN, ils doivent être uniques.',
            icon: 'error',
          });
        }
      }
    );
    window.location.reload();
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
}