import { Component, OnInit } from '@angular/core';
import { SpecialiteService } from '../service/specialite.service';
import { Specialite } from '../models/specialite';
import { MatiereService } from '../manage-matiere/services/matiere.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-specialite-list-front',
  templateUrl: './specialite-list-front.component.html',
  styleUrls: ['./specialite-list-front.component.scss'],
})
export class SpecialiteListFrontComponent implements OnInit {
  constructor(
    private specialiteService: SpecialiteService,
    private matiereService: MatiereService
  ) {}
  specialiteList: Specialite[];
  filtredSpecialiteList: Specialite[];
  filtredSpecialiteListByDiplome: Specialite[];
  searchInput: string = '';
  uploadUrl = 'http://localhost:8083/upload-directory/';
  // countMatiere: number;
  // currentCount: any[] = [];

  cards: Specialite[] = [];
  pagedCards = [];
  totalCards: number = 0;
  pageSize: number = 4;
  pageSizeOptions: number[] = [4, 10, 25, 100];

  // getMatiereCount(id: any): Observable<number> {
  //   return this.matiereService.countBySpec(id);
  // }

  updatePaginator() {
    this.cards = this.filtredSpecialiteListByDiplome;
    this.totalCards = this.cards.length;
    this.updatePagedCards();
  }

  countSpecByDiplomeFn(diplome: string) {
    return this.specialiteList?.filter((spec) => spec.diplome === diplome)
      .length;
  }

  ngOnInit() {
    this.specialiteService.getAll().subscribe({
      next: (res) => {
        this.specialiteList = res;
        this.filtredSpecialiteList = res;
        this.filtredSpecialiteListByDiplome = res;
        this.updatePaginator();
      },
      error: (err) => {
        console.log(err);
      },
      // complete: () => {
      //   const countObservables = this.specialiteList.map((spec) =>
      //     this.getMatiereCount(spec.id)
      //   );

      //   forkJoin(countObservables).subscribe((counts) => {
      //     this.currentCount = counts;
      //   });
      // },
    });
  }

  onPageChange(event: any): void {
    this.updatePagedCards(event.pageIndex, event.pageSize);
  }

  updatePagedCards(
    pageIndex: number = 0,
    pageSize: number = this.pageSize
  ): void {
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    this.filtredSpecialiteListByDiplome = this.cards.slice(
      startIndex,
      endIndex
    );
  }

  selectedTypes: string[] = [];

  onSearchChange(searchInput: string): void {
    // Filter by name
    this.filtredSpecialiteList = this.specialiteList.filter((spec) =>
      spec.nom.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Apply additional filtering by diploma
    this.applyDiplomaFilter();
  }

  onCheckboxChange(type: string): void {
    type = type.toLowerCase();
    if (this.selectedTypes.includes(type)) {
      // Remove the type if already selected
      this.selectedTypes = this.selectedTypes.filter(
        (selectedType) => selectedType !== type
      );
    } else {
      // Add the type if not selected
      this.selectedTypes.push(type);
    }

    // Apply additional filtering by diploma
    this.applyDiplomaFilter();
  }

  applyDiplomaFilter(): void {
    if (this.selectedTypes.length === 0) {
      // Show the full list when no type is selected
      this.filtredSpecialiteListByDiplome = this.filtredSpecialiteList;
      this.updatePaginator();
      return;
    }

    // Filter by diploma
    this.filtredSpecialiteListByDiplome = this.filtredSpecialiteList.filter(
      (spec) => this.selectedTypes.includes(spec.diplome.toLowerCase())
    );

    // Update paginator
    this.updatePaginator();
  }
}
