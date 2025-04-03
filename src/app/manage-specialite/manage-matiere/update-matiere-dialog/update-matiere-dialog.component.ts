import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Specialite } from 'app/manage-specialite/models/specialite';
import { Subject, merge, take } from 'rxjs';
import { AddMatiereDialogDashComponent } from '../add-matiere-dialog-dash/add-matiere-dialog-dash.component';
import { Matiere } from '../models/matiere';
import { MatiereService } from '../services/matiere.service';

@Component({
  selector: 'app-update-matiere-dialog',
  templateUrl: './update-matiere-dialog.component.html',
  styleUrls: ['./update-matiere-dialog.component.scss'],
})
export class UpdateMatiereDialogComponent {
  constructor(
    public updateDialogRef: MatDialogRef<UpdateMatiereDialogComponent>,
    private matiereService: MatiereService,
    @Inject(MAT_DIALOG_DATA) public data: Matiere
  ) {}
  uploadUrl = 'http://localhost:8082/upload-directory';
  imageUrl = `${this.uploadUrl}/${this.data.imageUrl}`;
  @ViewChild('fileInput') fileInput: any;
  brandNewMatiere: Matiere;
  toParentData: Matiere;
  imageFile: File | undefined;
  isFormSubmited = false;

  ngOnInit(): void {}

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
    this.imageUrl = `${this.uploadUrl}/${this.data.imageUrl}`;
    this.imageFile = undefined;
  }

  submitForm(formData: any): void {
    this.isFormSubmited = true;
    if (formData.valid) {
      if (!this.imageFile) {
        formData.value.imageUrl = 'specDefaultImg.png';
      }
      formData.value.id = this.data.id;
      this.matiereService.updateMatiere(formData.value).subscribe({
        next: (res) => {
          this.brandNewMatiere = res;
          this.toParentData = res;
        },
        error: (err) => {
          console.log(formData.value);
          console.log(err);
        },
        complete: () => {
          let imageUploadCompleted = new Subject();

          if (this.imageFile) {
            this.matiereService
              .uploadImage(this.brandNewMatiere.id, this.imageFile)
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
                let data = [this.toParentData, { action: 'update' }];
                console.log(data);
                this.updateDialogRef.close(data);
              },
            });
        },
      });
    }
  }
}
