import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Actualite } from '../models/actualite';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActualiteService } from '../services/actualite.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-update-actualite-dialog-dash',
  templateUrl: './update-actualite-dialog-dash.component.html',
  styleUrls: ['./update-actualite-dialog-dash.component.scss'],
})
export class UpdateActualiteDialogDashComponent implements OnInit {
  actualiteData: any;
  actualiteId: any;
  imageFile: File | undefined;
  @ViewChild('fileInput') fileInput: any;
  isFormSubmited = false;
  brandNewActualite: Actualite;

  constructor(
    public updateDialogRef: MatDialogRef<UpdateActualiteDialogDashComponent>,
    private actualiteService: ActualiteService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log('tesssssst', this.data);
  }

  uploadUrl = 'http://localhost:8085/upload-directory/';
  imageUrl = `${this.uploadUrl}/${this.data.imageActualite}`;

  onFileSelected(event: any): void {
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
    this.imageUrl = `${this.uploadUrl}/${this.data.imageActualite}`;
    this.imageFile = undefined;
  }

  closeDialog(): void {
    this.updateDialogRef.close();
  }

  submitForm(formData: any): void {
    console.log('testUpdate');

    console.log(formData.value);
    this.isFormSubmited = true;
    // if (formData.valid) {
    if (!this.imageFile) {
      formData.value.imageActualite = 'specDefaultImg.png';
    }

    formData.value.idActualite = this.data.idActualite;
    this.actualiteService.updateActualite(formData.value).subscribe({
      next: (res) => {
        console.log(res);
        this.brandNewActualite = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        let imageUploadCompleted = new Subject();

        if (this.imageFile) {
          this.actualiteService
            .uploadImage(this.brandNewActualite.idActualite, this.imageFile)
            .subscribe({
              next: (res) => {
                console.log('1_image upload********************');
                console.log(res);
              },
              error: (err) => {
                // console.log(err);
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
        this.updateDialogRef.close(formData);
      },
    });
  }
}
