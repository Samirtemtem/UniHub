import {ChangeDetectorRef, Component, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RestaurantService} from "../restaurant.service";

@Component({
  selector: 'app-qrcode-dialoge',
  templateUrl: './qrcode-dialoge.component.html',
  styleUrls: ['./qrcode-dialoge.component.scss']
})
export class QrcodeDialogeComponent {
  image: string | ArrayBuffer | null;


  constructor(
      public qrcodeDialogRef: MatDialogRef<QrcodeDialogeComponent>, private s: RestaurantService, private cdr: ChangeDetectorRef,
      @Inject(MAT_DIALOG_DATA) public restaurant_data: any
  ) {

  }

  ngOnInit() {
    this.s.getqrCode(this.restaurant_data.id).subscribe((result: Blob) => {
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result;
      };
      reader.readAsDataURL(result);
    }
    )
  }

  closeDialog(): void {
    this.qrcodeDialogRef.close();
  }


}
