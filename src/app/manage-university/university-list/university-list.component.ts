import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UniversiteService } from '../services/universite.service';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss']
})
export class UniversityListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<any>;
  imageBasePath: string = 'http://localhost:8084/upload-directory/';

  constructor(private serviceUniv: UniversiteService) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.serviceUniv.getUniversites().subscribe(
      (data: any) => {
        this.dataSource.data = data.map((university: any) => {
          university.image = this.imageBasePath + university.image;
          return university;
        });
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.error('Error fetching universities:', error);
      }
    );
  }
}
