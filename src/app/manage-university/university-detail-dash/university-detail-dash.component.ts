import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {ActivatedRoute} from "@angular/router";
import {UniversiteService} from "../services/universite.service";
import {ActualiteService} from "../services/actualite.service";
import Swal from "sweetalert2";
import {UniversityUpdateComponent} from "../university-update/university-update.component";


@Component({
  selector: 'app-university-detail-dash',
  templateUrl: './university-detail-dash.component.html',
  styleUrls: ['./university-detail-dash.component.scss'],
})
export class UniversityDetailDashComponent implements AfterViewInit {
  universityDetails: any;
  idUniversite: number;
  imageBasePath: string = 'http://localhost:8084/upload-directory/';

  constructor(private addNewsDialog: MatDialog, private updateNewsDialog: MatDialog,private route: ActivatedRoute,private serviceUniv:UniversiteService,private serviceAct: ActualiteService) {}

  dataSource: any;
  displayedColumns: string[] = ['idActualite', 'titreActualite', 'description', 'dateActualite', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idString = params.get('id');
      if (idString != null) {
        this.idUniversite = parseInt(idString, 10);
      }

      // Utiliser le service pour récupérer les détails de l'université
      this.serviceUniv.getUniversiteById(this.idUniversite).subscribe(
        details => {
          this.universityDetails = details;
          // Vous pouvez également faire d'autres opérations avec les données ici
        },
        error => {
          console.error('Erreur lors de la récupération des détails de l\'université', error);
        }
      );
    });
    this.serviceAct.getActualiteByUniversiteId(this.idUniversite).subscribe(

        (data: any) => {


          console.log(data);
          this.dataSource = data;
          this.dataSource = new MatTableDataSource(this.dataSource);
          this.dataSource.paginator = this.paginator;
      }

    )

  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }



}
