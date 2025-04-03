import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ChambreService } from "../chambre.service";
import { MatTableDataSource } from "@angular/material/table";
import { Chambre } from "../model/chambre";

@Component({
  selector: 'app-add-chambre-dialog-dash',
  templateUrl: './add-chambre-dialog-dash.component.html',
  styleUrls: ['./add-chambre-dialog-dash.component.scss']
})
export class AddChambreDialogDashComponent {
  constructor(
    public addDialogRef: MatDialogRef<AddChambreDialogDashComponent>
    , private s: ChambreService) {
  }

  ngOnInit(): void {

  }

  bloc: any;

  type = ['SIMPLE', 'DOUBLE', 'TRIPLE'];
  //SIMPLE,DOUBLE,TRIPLE
  imageUrl: string | ArrayBuffer | null;
  @ViewChild('fileInput') fileInput: any;

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
  triggerFileInputClick(): void {
    this.fileInput.nativeElement.click();
  }



  closeDialog(): void {
    this.addDialogRef.close();
  }

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
  submitForm(formData: any): void {
    console.log("form dataaa : ", formData)
    const newChambre: Chambre = {
      idChambre: null,
      numeroChambre: formData.numeroChambre,
      typeChambre: formData.typeChambre,
      imageUrl: formData.imageUrl,
    };
    console.log("Chambreee : ", newChambre);
    this.s.addChambre(newChambre).subscribe(
      (result) => {
        this.res = result;
        this.uploadImage(this.fileData, this.res.idChambre);
        console.log(' resultat apres ajout ', result);
        alert("Added Successfully");
      });
    console.log("blocs :", this.bloc);

    this.addDialogRef.close(formData);
  }

  protected readonly FormData = FormData;
}
