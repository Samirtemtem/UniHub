import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FoyerService } from '../service/foyer.service';
import { Foyer } from '../model/Foyer';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-foyer-detail-dash',
  templateUrl: './foyer-detail-dash.component.html',
  styleUrls: ['./foyer-detail-dash.component.scss']
})
export class FoyerDetailDashComponent implements AfterViewInit {
  foyerDetails: Foyer;
  dataSource: any;

  idFoyer: number;
  displayedColumns: string[] = ['name', 'email', 'tel', 'state', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private foyerService: FoyerService, private addUserDialog: MatDialog,
    private route: ActivatedRoute) { }


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

