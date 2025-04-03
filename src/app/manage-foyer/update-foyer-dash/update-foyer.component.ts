import { Component, Inject } from '@angular/core';
import { Foyer } from '../model/Foyer';
import { FoyerService } from '../service/foyer.service';
import { FormBuilder,  Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.scss']
})
export class UpdateFoyerDashComponent {
  img: string = "./assets/images/manage-foyer/";
  constructor(
    public updateDialogRef: MatDialogRef<UpdateFoyerDashComponent>, private serviceFoyer: FoyerService, private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.frombuil.patchValue({
      ...data,
    });
  }
  frombuil = this.fb.group({
    idFoyer: ['', [Validators.required]],
    nomFoyer: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    capacityFoyer: ['', [Validators.required, Validators.min(500), Validators.max(2000)]],
    // superficie: ['', [Validators.required]],
     imageFoyer: [''],
    newImageFoyer: [''],


  });

  updateFoyer(form: any) {
    const formData: Foyer = {
      ...this.data,
      ...this.frombuil.value,
    };

     if (form.newImageFoyer) {
       formData.imageFoyer = this.img + form.newImageFoyer.replace("C:\\fakepath\\", "");
     }

    this.serviceFoyer.updateFoyer(formData).subscribe(
      () => {

        alert('Êtes-vous sûr de vouloir modifier ce foyer ?');
        this.frombuil.reset();
        window.location.reload()
      },
      (error) => {
        console.error('Erreur lors de la mise à jour :', error);
      }
    );
    this.updateDialogRef.close();
  }

  closeDialog(): void {
    this.updateDialogRef.close();
  }


}


