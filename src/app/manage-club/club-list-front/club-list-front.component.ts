import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UniversiteService } from 'app/manage-university/services/universite.service';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-club-list-front',
  templateUrl: './club-list-front.component.html',
  styleUrls: ['./club-list-front.component.scss'],
})
export class ClubListFrontComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<any>;
  imageBasePath: string = 'http://localhost:3000/upload-directory/';

  constructor(private clubService: ClubService) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.clubService.getAllClubs().subscribe(
      (clubs) => {
        this.dataSource.data = clubs;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des clubs:",
          error
        );
      }
    );
  }
}
