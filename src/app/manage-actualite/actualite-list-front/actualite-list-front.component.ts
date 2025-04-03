import { Component } from '@angular/core';
import { ActualiteService } from '../services/actualite.service';

@Component({
  selector: 'app-actualite-list-front',
  templateUrl: './actualite-list-front.component.html',
  styleUrls: ['./actualite-list-front.component.scss'],
})
export class ActualiteListFrontComponent {
  newsList: any;
  constructor(private actualiteService: ActualiteService) {}

  ngOnInit(): void {
    this.newsList = [];
    this.refreshNewsList();
  }

  refreshNewsList(): void {
    this.actualiteService.getAllActualites().subscribe(
      (actualites) => {
        // this.dataSource.data = clubs;
        // this.dataSource.paginator = this.paginator;
        this.newsList = actualites;
        console.log(this.newsList);
      },
      (error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des actualites:",
          error
        );
      }
    );
  }
}
