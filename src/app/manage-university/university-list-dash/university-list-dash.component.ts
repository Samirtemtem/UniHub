import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddUniversityDialogDashComponent } from '../add-university-dialog-dash/add-university-dialog-dash.component';
import { UniversiteService } from '../services/universite.service';
import {Universite} from "../models/Universite";
import Swal from 'sweetalert2';
import {UniversityUpdateComponent} from "../university-update/university-update.component";
import {FoyerService} from "../services/foyer.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-university-list-dash',
  templateUrl: './university-list-dash.component.html',
  styleUrls: ['./university-list-dash.component.scss'],
})
export class UniversityListDashComponent implements AfterViewInit {

  constructor(private addUniversiteDialog: MatDialog, private updateUniversiteDialog: MatDialog, private serviceUniv: UniversiteService,private route: ActivatedRoute) {
  }
  nomUniversite: string = '';
  imageBasePath: string = 'http://localhost:8084/upload-directory/';
  dataSource: any;
  displayedColumns: string[] = ['image','idUniversite', 'nomUniversite', 'adresseUniversite', 'ville', 'descriptionUniversite', 'telUniversite', 'emailUinversite', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;



  search(): void {
    this.serviceUniv.searchUniversite(this.nomUniversite).subscribe(
      (data: any) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      },
    );
  }
  /**ngOnInit(): void {
    this.search();

    this.serviceUniv.getUniversites().subscribe(
      (data: any) => {
        this.dataSource = data;
        console.log(this.dataSource.foyer);
        this.dataSource = new MatTableDataSource(this.dataSource);
        this.dataSource.paginator = this.paginator;
      },
      (error: any) => {
        console.error('Une erreur est survenue :', error);
      }
    );
    this.route.data.subscribe((data) => {
      this.dataSource = data['universities'];
    });
  }**/
 ngOnInit(): void {
   this.route.data.subscribe((data) => {

     this.dataSource = new MatTableDataSource(data['universitere']);
     this.dataSource.paginator = this.paginator;
   });
 }
  refreshDataSource() {
    this.serviceUniv.getUniversites().subscribe(
      (data: any) => {
        this.dataSource = data;
        this.dataSource = new MatTableDataSource(this.dataSource);
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      },
    )
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  deleteUniversite(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas récupérer ces données après suppression!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceUniv.deleteUniversite(id).subscribe(
          (data: any) => {

            this.refreshDataSource();
          },
        );
      }
    });

  }

  openAddUniversityDialog(): void {
    const dialogRef = this.addUniversiteDialog.open(
      AddUniversityDialogDashComponent,
      {
        width: '550px', // Set the width as per your design
        // Add any other dialog configuration options here
      }
    );

  }

  openUniversityUpdate(universite: any) {
    const dialogRef = this.updateUniversiteDialog.open(UniversityUpdateComponent, {
      width: '400px',
      data: universite,
    });


    dialogRef.afterClosed().subscribe((result) => {
      // Gérer le résultat après la fermeture du dialogue (si nécessaire)
      if (result) {
        console.log('Le dialogue a été fermé avec succès', result);
      } else {
        console.log('Le dialogue a été fermé', result);
      }
    });

  }
}
