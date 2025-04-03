import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FoyerService } from '../service/foyer.service';
import { Foyer } from '../model/Foyer';


@Component({
  selector: 'app-add-foyer-dialog-dash',
  templateUrl: './add-foyer-dialog-dash.component.html',
  styleUrls: ['./add-foyer-dialog-dash.component.scss']
})


export class AddFoyerDialogDashComponent {

  foyers: Foyer;
  selectedUniversityId: any;
  img: string = "./assets/images/manage-foyer/";
  constructor(
    public addDialogRef: MatDialogRef<AddFoyerDialogDashComponent>, private foyerService: FoyerService) { }


  submitForm(formData: any): void {

    if (formData.imageFoyer) {
      formData.imageFoyer = formData.imageFoyer.replace("C:\\fakepath\\", "");

      formData.imageFoyer = this.img + formData.imageFoyer;

    }

    this.foyerService.addFoyer(formData).subscribe(
      (addedFoyer) => {
        console.log('Foyer ajouté avec succès :', addedFoyer);

        window.location.reload();
        this.addDialogRef.close(addedFoyer);
        formData.foyerId = Number(formData.foyerId);

      },
      (error) => {
        console.error('Erreur lors de l\'ajout du foyer :', error);

      }

    );

  }

  closeDialog(): void {
    this.addDialogRef.close();

  }



}

