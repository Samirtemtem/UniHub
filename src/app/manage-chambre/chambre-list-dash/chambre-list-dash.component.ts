import { Component, Injectable, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { AddChambreDialogDashComponent } from "../add-chambre-dialog-dash/add-chambre-dialog-dash.component";
import { types } from "sass";
import Null = types.Null;
import { ChambreService } from "../chambre.service";
import { Chambre } from "../model/chambre";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chambre-list-dash',
  templateUrl: './chambre-list-dash.component.html',
  styleUrls: ['./chambre-list-dash.component.scss']
})
export class ChambreListDashComponent {
  search = '';

  ELEMENT_DATA: any;
  Showupdate = false;
  chambretoupdate: any;

  showForm(chambre: any) {
    this.chambretoupdate = chambre;
    this.Showupdate = true;
  }

  delete(chambre: any) {

    console.log("id chambre bch nfasakheha", chambre.idChambre);
    this.s.removeChambre(chambre.idChambre).subscribe(() => {
      this.refreshChambreList();
    }
    );
  }

  afterrecieveData(e: any) {

    console.log(e);
    this.s.updateChambre(e).subscribe(
      () => {
        this.refreshChambreList();
      }
    )
    this.Showupdate = false;
  }


  constructor(private addUserDialog: MatDialog, private s: ChambreService, private http: HttpClient) {
  }

  dataSource: any;
  displayedColumns: string[] = ['numeroChambre', 'typeChambre', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  statistiqueChambres: any;

  ngOnInit(): void {
    this.refreshChambreList();

    this.s.getStatistiqueNombreChambresParType().subscribe(
      (data) => {
        this.statistiqueChambres = data;
        console.log('Statistique des chambres par type :', this.statistiqueChambres);
      },
      (error) => {
        console.error('Erreur lors de la récupération de la statistique :', error);
      }
    );

  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  refreshChambreList() {
    this.s.getChambres().subscribe(
      (result) => {
        console.log("resulttt ", result)
        this.ELEMENT_DATA = result
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      }
    )

  }

  openAddChambreDialog(): void {
    const dialogRef = this.addUserDialog.open(
      AddChambreDialogDashComponent,
      {
        width: '550px', // Set the width as per your design
        // Add any other dialog configuration options here
      }
    );
    dialogRef.afterClosed().subscribe((result) => {
      // Handle the result after the dialog is closed (if needed)
      if (result) {
        this.refreshChambreList();
        console.log('The dialog save pressed', result);
        console.log('bloc de resultat ', result.bloc);
      } else {

        console.log('The dialog was closed', result);
      }
    });
  }



}
