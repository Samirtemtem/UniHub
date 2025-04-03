import {Component, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {RestaurantService} from "../restaurant.service";
import {Restaurant} from "../model/restaurant";

@Component({
  selector: 'app-add-resto-dialog',
  templateUrl: './add-resto-dialog.component.html',
  styleUrls: ['./add-resto-dialog.component.scss']
})
export class AddRestoDialogComponent {
  constructor(
    public addDialogRef: MatDialogRef<AddRestoDialogComponent>, private s: RestaurantService
  ) {
  }

  imageUrl: string | ArrayBuffer | null;
  @ViewChild('fileInput') fileInput: any;

  // @Output() addFormSubmit: EventEmitter<any> = new EventEmitter<any>();

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
      this.fileData = file;
    }
  }

  fileData: any;

  uploadImage(file: File, id: any): void {
    const formData = new FormData();
    formData.append('fileImage', file);
    this.s.uploadImage(id, formData).subscribe(
      (result) => {

        console.log('Image uploaded successfully:', result);

      }, (error) => {
        // Handle the error here
        console.error('Error uploading image:', error);
      }
    );
  }

  res: any;

  triggerFileInputClick(): void {
    this.fileInput.nativeElement.click();
  }

  resetAvatarImage() {
    this.imageUrl = './assets/images/profile/user-1.jpg';
  }

  closeDialog(): void {
    this.addDialogRef.close();
  }

  submitForm(formData: any): void {
    console.log("form dataaa : ", formData)
    const newRestaurant: Restaurant = {
      id: null,
      nomRestaurant: formData.nomRestaurant,
      menu: formData.menu,
      specialite: formData.specialite

    };
    console.log("restauranttt : ", newRestaurant)
    this.s.addRestaurant(newRestaurant).subscribe(
      (result) => {
        this.res = result;
        this.uploadImage(this.fileData, this.res.id);
        console.log(' resultat apres ajout ', result);
        alert("Added Successfully");
      });

    this.addDialogRef.close(formData);
  }
}
