import {Component, ViewChild, Inject, ChangeDetectorRef} from '@angular/core';
import {UniversiteService} from "../services/universite.service";
import {FormBuilder, Validators} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Foyer} from "../models/Foyer";

@Component({
  selector: 'app-university-update',
  templateUrl: './university-update.component.html',
  styleUrls: ['./university-update.component.scss']
})
export class UniversityUpdateComponent {
  idUniversite: number;
  image: string | ArrayBuffer | null = './assets/images/profile/specDefaultImg.png';
  @ViewChild('fileInput') fileInput: any;
  imageFile: File;

  constructor(
    public updateDialogRef: MatDialogRef<UniversityUpdateComponent>,private serviceUniv:UniversiteService,private fb:FormBuilder, private cdr: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.frombuil.patchValue({
      ...(data || {}),

    });

    if (data && data.image) {
      this.image = `http://localhost:8084/upload-directory/${data.image}`;
    } else {
      this.image = './assets/images/profile/specDefaultImg.png';
    }
  }
  ngOnInit(): void {

  }
  frombuil=this.fb.group({
    idUniversite:['',[Validators.required]],
    nomUniversite: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    adresseUniversite:['',[Validators.required]],
    ville:['',[Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    descriptionUniversite:['',[Validators.required]],
    telUniversite: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
    emailUinversite:['', [Validators.required,Validators.email]],
    image: ['', [Validators.required]],

  });
  updateUniversite(frombuil: any) {
    //const data = this.frombuil.value;
    this.serviceUniv.updateUniversite(frombuil, this.imageFile).subscribe(
      () => {
        console.log(frombuil, this.imageFile);
        alert('Ajouté avec succès');
        this.frombuil.reset();
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de l\'université', error);
      }
    );

    this.updateDialogRef.close();
    window.location.reload();

  }

  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.image = reader.result;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(this.imageFile);
  }


  selectImage(): void {
    this.fileInput.nativeElement.click();
  }


  closeDialog(): void {
    this.updateDialogRef.close();
  }
  resetAvatarImage() {
    this.image = './assets/images/profile/specDefaultImg.png';
  }
  submitForm(formData: any): void {
    // console.log('Form Data:', formData);
    // Emit the form data when the form is submitted
    // this.addFormSubmit.emit(formData);
    // Close the dialog
    // formData.userImage = this.imageUrl;
    this.updateDialogRef.close(formData);
  }

}
