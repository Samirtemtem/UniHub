import { Component, OnInit, ViewChild } from '@angular/core';
import { Actualite } from '../models/actualite';
import { MatDialogRef } from '@angular/material/dialog';
import { ActualiteService } from '../services/actualite.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-actualite-dialog-dash',
  templateUrl: './add-actualite-dialog-dash.component.html',
  styleUrls: ['./add-actualite-dialog-dash.component.scss'],
})
export class AddActualiteDialogDashComponent implements OnInit {
  imageFile: File | undefined;
  @ViewChild('fileInput') fileInput: any;
  isFormSubmited = false;
  brandNewActualite: Actualite;
  imageUrl: string | ArrayBuffer | null =
    './assets/images/profile/specDefaultImg.png';

  constructor(
    public addDialogRef: MatDialogRef<AddActualiteDialogDashComponent>,
    private actualiteService: ActualiteService
  ) {}

  ngOnInit(): void {}

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
    this.imageUrl = './assets/images/profile/specDefaultImg.png';
  }

  closeDialog(): void {
    this.addDialogRef.close();
  }

  submitForm(formData: any): void {
    console.log(formData);
    this.isFormSubmited = true;
    // if (formData.valid) {
    if (!this.imageFile) {
      formData.value.imageUrl = 'specDefaultImg.png';
    }

    this.actualiteService.addActualite(formData).subscribe({
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
        this.addDialogRef.close(formData);
      },
    });
    // }
  }
}
