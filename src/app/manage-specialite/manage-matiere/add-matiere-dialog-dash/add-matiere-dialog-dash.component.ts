import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Specialite } from 'app/manage-specialite/models/specialite';
import { Subject, merge, take } from 'rxjs';
import { Matiere } from '../models/matiere';
import { MatiereService } from '../services/matiere.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-matiere-dialog-dash',
  templateUrl: './add-matiere-dialog-dash.component.html',
  styleUrls: ['./add-matiere-dialog-dash.component.scss'],
})
export class AddMatiereDialogDashComponent {
  constructor(
    public addDialogRef: MatDialogRef<AddMatiereDialogDashComponent>,
    private matiereService: MatiereService,
    @Inject(MAT_DIALOG_DATA) public data: Specialite,
    private formBuilder: FormBuilder
  ) {
    let formControls = {
      imageInput: new FormControl(),
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]+[a-zA-Z ]*'),
        Validators.minLength(3),
      ]),
      ects: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+'),
      ]),
      description: new FormControl(),
    };

    this.addForm = formBuilder.group(formControls);
  }
  uploadUrl = 'http://localhost:8083/upload-directory/';
  imageUrl = '/assets/images/profile/specDefaultImg.png';
  @ViewChild('fileInput') fileInput: any;
  brandNewSpecialite: Matiere;
  toParentData: Matiere;
  imageFile: File | undefined;
  isFormSubmited = false;
  addForm: FormGroup;

  onImageFileSelected(event: any): void {
    this.imageFile = event.target.files[0];
    if (this.imageFile) {
      // Read the selected image file and update the preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(this.imageFile);
    }
  }

  triggerFileInputClick(): void {
    this.fileInput.nativeElement.click();
  }

  resetAvatarImage() {
    this.imageUrl = '/assets/images/profile/specDefaultImg.png';
    this.imageFile = undefined;
  }

  get nom() {
    return this.addForm.get('nom');
  }

  get ects() {
    return this.addForm.get('ects');
  }

  get description() {
    return this.addForm.get('description');
  }

  submitForm(): void {
    this.isFormSubmited = true;
    if (this.addForm.valid) {
      if (!this.imageFile) {
        this.addForm.value.imageUrl = 'specDefaultImg.png';
      }
      this.matiereService
        .addMatiere(this.addForm.value, this.data.id)
        .subscribe({
          next: (res) => {
            this.brandNewSpecialite = res;
            this.toParentData = res;
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            let imageUploadCompleted = new Subject();
            if (this.imageFile) {
              this.matiereService
                .uploadImage(this.brandNewSpecialite.id, this.imageFile)
                .subscribe({
                  next: (res) => {
                    this.toParentData = res;
                  },
                  error: (err) => {
                    console.log(err);
                  },
                  complete: () => {
                    imageUploadCompleted.next(null);
                    imageUploadCompleted.complete();
                  },
                });
            } else {
              imageUploadCompleted.next(null);
              imageUploadCompleted.complete();
            }
            merge(imageUploadCompleted)
              .pipe(take(1))
              .subscribe({
                complete: () => {
                  let data = [this.toParentData, { action: 'add' }];
                  this.addDialogRef.close(data);
                },
              });
          },
        });
    }
  }
}
