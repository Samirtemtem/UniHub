import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FoyerService } from '../service/foyer.service';
import { MatPaginator } from '@angular/material/paginator';
import { Foyer } from '../model/Foyer';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foyer-detail',
  templateUrl: './foyer-detail.component.html',
  styleUrls: ['./foyer-detail.component.scss']
})
export class FoyerDetailComponent implements AfterViewInit {
  foyerDetails: Foyer;

  idFoyer: number;
  //imageFoyer: string;
  dataSource: any;
  displayedColumns: string[] = ['name', 'email', 'tel', 'state', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private foyerService: FoyerService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.loadFoyerDetails();
    console.log(this.idFoyer)
    this.dataSource.paginator = this.paginator;


  }

  private loadFoyerDetails(): void {
    this.route.params.subscribe(({ id }) => {
      const foyerId = +id;
      this.foyerService.setFoyerId(id);

      this.foyerService.getFoyerById(foyerId).subscribe(
        (foyer) => {
          this.foyerDetails = foyer;

        },

        (error) => console.error('Error retrieving foyer by ID:', error)
      );

    });

  }




  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


}


