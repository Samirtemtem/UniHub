import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SpecialiteService } from '../service/specialite.service';
import { Specialite } from '../models/specialite';
import { UniversiteTempService } from '../service/universiteTemp.service';
import { Subject, merge, take } from 'rxjs';

@Component({
  selector: 'app-update-specialite-dialog-dash',
  templateUrl: './update-specialite-dialog-dash.component.html',
  styleUrls: ['./update-specialite-dialog-dash.component.scss'],
})
export class UpdateSpecialiteDialogDashComponent {
  constructor(
    public updateDialogRef: MatDialogRef<UpdateSpecialiteDialogDashComponent>,
    private specialiteService: SpecialiteService,
    // private universiteService: UniversiteTempService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  uploadUrl = 'http://localhost:8083/upload-directory';
  imageUrl = `${this.uploadUrl}/${this.data.imageUrl}`;
  @ViewChild('fileInput') fileInput: any;
  brandNewSpecialite: Specialite;
  toParentData: Specialite;
  imageFile: File | undefined;
  pdfFile: File | undefined;
  isFormSubmited = false;
  // universites: any;

  ngOnInit(): void {
    // this.universiteService.getAll().subscribe({
    //   next: (res) => {
    //     this.universites = res;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
    // this.universites = this.data.universites;

    if (!this.data.planEtudePdf) {
      this.data.planEtudePdf = 'No File Choosen';
    }
  }

  onImageFileSelected(event: any): void {
    this.imageFile = event.target.files?.[0];
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
    this.pdfFile = event.target.files?.[0];
    this.data.planEtudePdf = this.pdfFile?.name ?? 'No File Choosen';
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
        formData.imageUrl = 'specDefaultImg.png';
      }
      formData.value.id = this.data.id;
      this.specialiteService.updateSpecialite(formData.value).subscribe({
        next: (res) => {
          console.log(res);
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

          if (this.pdfFile) {
            this.specialiteService
              .uploadPdf(this.brandNewSpecialite.id, this.pdfFile)
              .subscribe({
                next: (res) => {
                  this.toParentData = res;
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
                let data = [this.toParentData, { action: 'update' }];
                console.log('3_final********************');
                this.updateDialogRef.close(data);
              },
            });
        },
      });
    }
  }
}
