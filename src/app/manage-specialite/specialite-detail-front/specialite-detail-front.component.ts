import { Component, OnInit } from '@angular/core';
import { SpecialiteService } from '../service/specialite.service';
import { Specialite } from '../models/specialite';
import { ActivatedRoute } from '@angular/router';
import { MatiereService } from '../manage-matiere/services/matiere.service';
import { Matiere } from '../manage-matiere/models/matiere';

@Component({
  selector: 'app-specialite-detail-front',
  templateUrl: './specialite-detail-front.component.html',
  styleUrls: ['./specialite-detail-front.component.scss'],
})
export class SpecialiteDetailFrontComponent implements OnInit {
  constructor(
    private specialiteService: SpecialiteService,
    // private matiereService: MatiereService,
    private activedRoute: ActivatedRoute
  ) {}
  currentSpecialite: Specialite;
  specID: number;
  // matiereList: Matiere[];
  // matiereCount: number;
  uploadUrl = 'http://localhost:8083/upload-directory/';

  // cards: Matiere[] = []; // Replace YourCardType with the type of your card data
  // pagedCards = [];
  // totalCards: number = 0;
  // pageSize: number = 4; // Adjust the number of cards per page as needed
  // pageSizeOptions: number[] = [4, 10, 25, 100];

  ngOnInit(): void {
    this.specID = this.activedRoute.snapshot.params['id'];
    this.specialiteService.getById(this.specID).subscribe({
      next: (res) => {
        this.currentSpecialite = res;
      },
      error: (err) => {
        console.log(err);
      },
      // complete: () => {
      //   this.matiereService.getAllBySpec(this.specID).subscribe({
      //     next: (res) => {
      //       this.matiereList = res;
      //       this.matiereCount = this.matiereList.length;
      //       this.cards = this.matiereList;
      //       this.totalCards = this.cards.length;
      //       this.updatePagedCards();
      //     },
      //     error: (err) => {
      //       console.log(err);
      //     },
      //   });
      // },
    });
  }

  // onPageChange(event: any): void {
  //   this.updatePagedCards(event.pageIndex, event.pageSize);
  // }

  // updatePagedCards(
  //   pageIndex: number = 0,
  //   pageSize: number = this.pageSize
  // ): void {
  //   const startIndex = pageIndex * pageSize;
  //   const endIndex = startIndex + pageSize;
  //   this.matiereList = this.cards.slice(startIndex, endIndex);
  // }
}
