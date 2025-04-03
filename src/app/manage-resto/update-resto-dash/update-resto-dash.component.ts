import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {RestaurantService} from "../restaurant.service";

@Component({
  selector: 'app-update-resto-dash',
  templateUrl: './update-resto-dash.component.html',
  styleUrls: ['./update-resto-dash.component.scss']
})
export class UpdateRestoDashComponent {
  @Input() restaurant_data: any;
  @Output() sendmsg = new EventEmitter();
  image: string | ArrayBuffer | null;
  @ViewChild('fileInput') fileInput: any;
  imageUrl: string | ArrayBuffer | null;
  constructor(private s: RestaurantService, private fb: FormBuilder,) {
  }
  updateform = this.fb.group({
    menu: ['', [Validators.required, Validators.pattern('[a-z,A-Z]*')]],
    specialite: ['', [Validators.required, Validators.pattern('[a-z,A-Z]*')]],
    nomRestaurant:['', [Validators.required, Validators.pattern('[a-z,A-Z]*')]]
  })
  ngOnInit(): void {
    this.getImage(this.restaurant_data.imageUrl);
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
  triggerFileInputClick(): void {
    this.fileInput.nativeElement.click();
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
  sendDataToParent() {
    this.restaurant_data.nomRestaurant = this.updateform.get('nomRestaurant')?.value
    this.restaurant_data.specialite = this.updateform.get('specialite')?.value
    this.restaurant_data.menu = this.updateform.get('menu')?.value

    console.log("dataa : ", this.restaurant_data);
    this.sendmsg.emit(this.restaurant_data);
  }
}
