import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Chambre } from "../model/chambre";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
import { ChambreService } from "../chambre.service";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-update-chambre-dash',
  templateUrl: './update-chambre-dash.component.html',
  styleUrls: ['./update-chambre-dash.component.scss']
})
export class UpdateChambreDashComponent {
  constructor(private s: ChambreService, private fb: FormBuilder,) {
  }

  updateform = this.fb.group({
    numero: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    type: ['']
  })

  @Input() chambre_data: any;
  @Output() sendmsg = new EventEmitter();
  type = ['SIMPLE', 'DOUBLE', 'TRIPLE'];

  image: string | ArrayBuffer | null;

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

  ngOnInit(): void {
    this.getImage(this.chambre_data.imageUrl);
  }

  @ViewChild('fileInput') fileInput: any;
  imageUrl: string | ArrayBuffer | null;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Read the selected image file and update the preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
      this.uploadImage(file);
    }
  }

  triggerFileInputClick(): void {
    this.fileInput.nativeElement.click();
  }

  uploadImage(file: File): void {
    const formData = new FormData();
    formData.append('fileImage', file);
    this.s.uploadImage(this.chambre_data.idChambre, formData).subscribe(
      (result) => {
        this.chambre_data = result;
        console.log('Image uploaded successfully:', result);

      }, (error) => {
        // Handle the error here
        console.error('Error uploading image:', error);
      }
    );
  }


  resetImage() {
    this.imageUrl = this.image;
  }


  sendDataToParent() {
    this.chambre_data.typeChambre = this.updateform.get('type')?.value
    this.chambre_data.numeroChambre = this.updateform.get('numero')?.value
    console.log("dataa : ", this.chambre_data);
    this.sendmsg.emit(this.chambre_data);
  }

}
