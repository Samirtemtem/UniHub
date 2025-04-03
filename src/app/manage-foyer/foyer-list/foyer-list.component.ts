import {Component, AfterViewInit, ViewChild, NgZone, ChangeDetectorRef} from '@angular/core';
import { FoyerService } from '../service/foyer.service';
import { MatPaginator } from '@angular/material/paginator';
import { Foyer } from '../model/Foyer';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-foyer-list',
  templateUrl: './foyer-list.component.html',
  styleUrls: ['./foyer-list.component.scss']
})
export class FoyerListComponent implements AfterViewInit {
  isLiked: boolean = false;
  searchTerm: string = '';
  foyerList: Foyer[];
  dataSource: any;
  cards: Foyer[] = [];
  pagedCards = [];
  totalCards: number = 0;
  pageSize: number = 4;
  pageSizeOptions: number[] = [4, 10, 25, 100];
  selectedCapacity: number = 0;
  capacityForm: FormGroup;
  capacityControl: FormControl;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private foyerService: FoyerService,  private cdr: ChangeDetectorRef ) {

  }




  ngOnInit(): void {
    this.fetchData();
    this.foyerService.getListFoyer().subscribe(
      (data: any) => {
        this.foyerList = data;
        console.log(this.foyerList)
        this.updatePaginator()
      },
      (error) => {
        console.error('Une erreur est survenue :', error);
      }
    );


  }

  capacityIntervals: [number, number][] = [[500, 600],[700, 800], [800, 900], [900, 1000],[1000, 2000]]; // Add the intervals you need
  selectedIntervals: { [key: string]: boolean } = {};
  onCapacityFilterChange(): void {
    // Apply filtering based on selected intervals
    this.filterByIntervals();
  }

  filterByIntervals(): void {
    // Apply filtering logic based on selected intervals
    this.foyerList = this.cards.filter(foyer => {
      return Object.keys(this.selectedIntervals).length === 0 ||
        this.isFoyerInSelectedIntervals(foyer.capacityFoyer);
    });

    this.updatePaginator();

    const isAnyUnchecked = Object.values(this.selectedIntervals).some(value => !value);

    // Reload the page only if any checkbox is unchecked
    if (isAnyUnchecked) {
      window.location.reload();
    }
  }

  isFoyerInSelectedIntervals(capacity: number): boolean {
    return Object.keys(this.selectedIntervals).some(intervalKey => {
      const [min, max] = intervalKey.split('-').map(Number);
      return capacity >= min && capacity <= max;
    });
  }

  fetchData(): void {
    this.foyerService.getListFoyer().subscribe(
      (data: any) => {
        this.foyerList = data;
        this.cards = this.foyerList;
        this.totalCards = this.cards.length;
        this.updatePagedCards();
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }
  ngAfterViewInit(): void {

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
    this.foyerList = this.cards.slice(
      startIndex,
      endIndex
    );
  }

  updatePaginator() {
    this.cards = this.foyerList;
    this.totalCards = this.cards.length;
    this.updatePagedCards();
  }


}

