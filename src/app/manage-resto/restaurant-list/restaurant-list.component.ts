import {Component} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {RestaurantService} from "../restaurant.service";
import {MatDialog} from "@angular/material/dialog";
import {QrcodeDialogeComponent} from "../qrcode-dialoge/qrcode-dialoge.component";

@Component({
    selector: 'app-restaurant-list',
    templateUrl: './restaurant-list.component.html',
    styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent {
    data: any;

    constructor(private s: RestaurantService, private sanitizer: DomSanitizer, private qrcodeDialog: MatDialog) {

    }

    refreshRestaurantList() {
        this.s.getRestaurant().subscribe(
            (result) => {
                this.data = result

            }
        )
    }

    ngOnInit(): void {
        this.refreshRestaurantList();

    }

    openQrCodeDialog(e: any) {
        const dialogRef = this.qrcodeDialog.open(
            QrcodeDialogeComponent, {
                width: '550px', // Set the width as per your design
                data: e,
            }
        );
        dialogRef.afterClosed().subscribe((result) => {
            // Handle the result after the dialog is closed (if needed)
            if (result) {
                alert("Qr Code Closed !! ")
            }
        });
    }

    traitement(data: any) {
        this.openQrCodeDialog(data);
    }

}
