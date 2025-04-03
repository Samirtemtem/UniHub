import {ChangeDetectorRef, Component, Inject, Input, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RestaurantService} from "../restaurant.service";
import {Restaurant} from "../model/restaurant";
import {Restaurantt} from "../model/restaurantt";

@Component({
    selector: 'app-update-resto-dialog',
    templateUrl: './update-resto-dialog.component.html',
    styleUrls: ['./update-resto-dialog.component.scss']
})
export class UpdateRestoDialogComponent {

    imageUrl: string | ArrayBuffer | null;
    image: string | ArrayBuffer | null;
    @ViewChild('fileInput') fileInput: any;

    constructor(
        public updateDialogRef: MatDialogRef<UpdateRestoDialogComponent>, private s: RestaurantService, private cdr: ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) public restaurant_data: any
    ) {

    }

    ngOnInit(): void {
        this.getImage(this.restaurant_data.imageUrl);
        console.log("data update:", this.restaurant_data)
    }

    getImage(file: any) {
        this.s.getImage(file).subscribe(
            (result: Blob) => {
                const reader = new FileReader();
                reader.onload = () => {
                    this.image = reader.result;
                    this.imageUrl = reader.result;
                };
                reader.readAsDataURL(result);
            }
        )

    }

    onFileSelected(event: any): void {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.imageUrl = e.target.result;
            };
            reader.readAsDataURL(file);
            this.uploadImage(file);
        }
    }

    fileData: any;

    uploadImage(file: File): void {
        const formData = new FormData();
        formData.append('fileImage', file);
        this.s.uploadImage(this.restaurant_data.id, formData).subscribe(
            (result) => {
                this.restaurant_data = result;
                console.log('Image uploaded successfully:', result);

            }, (error) => {
                console.error('Error uploading image:', error);
            }
        );
    }

    resetImage() {
        this.imageUrl = this.image;
    }


    triggerFileInputClick(): void {
        this.fileInput.nativeElement.click();
    }

    closeDialog(): void {
        this.updateDialogRef.close();
    }

    submitForm(e: any): void {
        const newRestaurant: Restaurantt = {
            id: this.restaurant_data.id,
            nomRestaurant: this.restaurant_data.nomRestaurant,
            menu: this.restaurant_data.menu,
            specialite: this.restaurant_data.specialite,
            imageUrl:this.restaurant_data.imageUrl
        };
        console.log("update dataaa : ", e);
        console.log("newRestaurant : ", newRestaurant);

        this.s.updateRestaurant(newRestaurant.id, newRestaurant).subscribe(
            () => {
                this.updateDialogRef.close(newRestaurant);
            }
        )

    }
}
