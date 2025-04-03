import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SpecialiteService } from '../service/specialite.service';
import { Specialite } from '../models/specialite';
import { UniversiteTempService } from '../service/universiteTemp.service';
import { Subject, merge, take } from 'rxjs';

@Component({
  selector: 'app-add-specialite-dialog-dash',
  templateUrl: './add-specialite-dialog-dash.component.html',
  styleUrls: ['./add-specialite-dialog-dash.component.scss'],
})
export class AddSpecialiteDialogDashComponent implements OnInit {
  constructor(
    public addDialogRef: MatDialogRef<AddSpecialiteDialogDashComponent>,
    private specialiteService: SpecialiteService // private universiteService: UniversiteTempService,
  ) // @Inject(MAT_DIALOG_DATA) public universites: any
  {}
  // universites: any;
  uploadUrl = 'http://localhost:8083/upload-directory/';
  imageUrl = '/assets/images/profile/specDefaultImg.png';
  @ViewChild('fileInput') fileInput: any;
  brandNewSpecialite: Specialite;
  toParentData: Specialite;
  imageFile: File | undefined;
  pdfFile: File | undefined;
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

  onPdfFileSelected(event: any): void {
    this.pdfFile = event.target.files[0];
  }

  triggerFileInputClick(): void {
    this.fileInput.nativeElement.click();
  }

  resetAvatarImage() {
    this.imageUrl = '/assets/images/profile/specDefaultImg.png';
    this.imageFile = undefined;
  }

  submitForm(formData: any): void {
    this.isFormSubmited = true;
    if (formData.valid) {
      if (!this.imageFile) {
        formData.value.imageUrl = 'specDefaultImg.png';
      }
      this.specialiteService.addSpecialite(formData.value).subscribe({
        next: (res) => {
          // console.log(res);
          this.brandNewSpecialite = res;
          this.toParentData = res;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          let imageUploadCompleted = new Subject();
          let pdfUploadCompleted = new Subject();

          if (this.imageFile) {
            this.specialiteService
              .uploadImage(this.brandNewSpecialite.id, this.imageFile)
              .subscribe({
                next: (res) => {
                  this.toParentData = res;
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

          if (this.pdfFile) {
            this.specialiteService
              .uploadPdf(this.brandNewSpecialite.id, this.pdfFile)
              .subscribe({
                next: (res) => {
                  this.toParentData = res;
                  console.log('2_pdf upload********************');

                  console.log(res);
                },
                error: (err) => {
                  console.log(err);
                },
                complete: () => {
                  pdfUploadCompleted.next(null);
                  pdfUploadCompleted.complete();
                },
              });
          } else {
            pdfUploadCompleted.next(null);
            pdfUploadCompleted.complete();
          }

          merge(imageUploadCompleted, pdfUploadCompleted)
            .pipe(take(2))
            .subscribe({
              complete: () => {
                let data = [this.toParentData, { action: 'add' }];
                console.log('3_final********************');
                this.addDialogRef.close(data);
              },
            });
        },
      });
    }
  }
}
