import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UniversiteService} from "../services/universite.service";
import {MatTableDataSource} from "@angular/material/table";
import {ActualiteService} from "../services/actualite.service";

@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.scss']
})
export class UniversityDetailComponent {
  universityDetails: any;
  idUniversite: number;
  dataSource: any;
  imageBasePath: string = 'http://localhost:8084/upload-directory/';

  constructor(private route: ActivatedRoute,private serviceUniv:UniversiteService,private serviceAct:ActualiteService) {
  }
ngOnInit(){
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

    }

  )

}
}
