import { Component, ViewChild, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClubService } from '../services/club.service';
import { Club } from '../models/club';
import { Router } from '@angular/router';
import { UniversiteTempService } from '../services/universiteTemp.service';
import { Subject, merge, take } from 'rxjs';

@Component({
  selector: 'app-add-club-dialog-dash',
  templateUrl: './add-club-dialog-dash.component.html',
  styleUrls: ['./add-club-dialog-dash.component.scss'],
})
export class AddClubDialogDashComponent implements OnInit {
  // universites: any;
  imageFile: File | undefined;
  @ViewChild('fileInput') fileInput: any;
  isFormSubmited = false;
  brandNewClub: Club;
  imageUrl: string | ArrayBuffer | null =
    './assets/images/profile/specDefaultImg.png';

  constructor(
    public addDialogRef: MatDialogRef<AddClubDialogDashComponent>,
    private clubService: ClubService,
    private universiteService: UniversiteTempService
  ) {}

  ngOnInit(): void {
    // this.universiteService.getAllUniversites().subscribe((universites: any) => {
    //   this.universites = universites;
    // });
  }

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
    this.imageFile = undefined;
  }

  closeDialog(): void {
    this.addDialogRef.close();
  }

  submitForm(formData: any): void {
    console.log(formData);
    this.isFormSubmited = true;
    // if (formData.valid) {
    // if (!this.imageFile) {
    //   formData.value.imageUrl = 'specDefaultImg.png';
    // }

    this.clubService.addClub(formData).subscribe({
      next: (res) => {
        console.log(res);
        this.brandNewClub = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        let imageUploadCompleted = new Subject();

        if (this.imageFile) {
          this.clubService
            .uploadImage(this.brandNewClub._id, this.imageFile)
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

  // Appeler la méthode addClub du service pour ajouter le club
  // this.clubService.addClub(newClub).subscribe(
  //   (addedClub) => {
  //     console.log('Club ajouté avec succès :', addedClub);
  //     // Fermer la boîte de dialogue

  //     // this.addDialogRef.close();
  //     // this.router.navigate(['/dashboard/clubs']);
  //   },
  //   (error) => {
  //     console.error("Erreur lors de l'ajout du club :", error);
  //     // Gérer les erreurs si nécessaire
  //   }
  // );

  //   this.addDialogRef.close(formData);
  //   console.log(formData);
  // }
}
