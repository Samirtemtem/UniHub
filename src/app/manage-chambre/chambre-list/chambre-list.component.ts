import { Component, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ChambreService } from "../chambre.service";
import { MatTableDataSource } from "@angular/material/table";
import { Chambre } from "../model/chambre";


import { HttpErrorResponse } from "@angular/common/http";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
// @ts-ignore
import QRCode from 'qrcode-generator';

import * as jsPDF from 'jspdf';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
  styleUrls: ['./chambre-list.component.scss']
})
export class ChambreListComponent {


  data: any;

  constructor(private s: ChambreService, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.refreshChambreList();

  }

  refreshChambreList() {
    this.s.getChambres().subscribe(
      (result) => {
        this.data = result

      }
    )
  }

  ReservChambre: any;

  traitement(data: any) {
    this.ReservChambre = data;

  }


  generateQRCode(data: string): string {
    const qr = QRCode(0, 'H'); // Create QRCode instance with level H (high)
    qr.addData(data);
    qr.make();
    return qr.createSvgTag();
  }

  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";
  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  openNewWindowWithQRCode() {

  }


}
