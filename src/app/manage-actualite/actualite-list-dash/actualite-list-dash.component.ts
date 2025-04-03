import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Actualite } from '../models/actualite';
import { ActualiteService } from '../services/actualite.service';
import { AddActualiteDialogDashComponent } from '../add-actualite-dialog-dash/add-actualite-dialog-dash.component';
import { UpdateActualiteDialogDashComponent } from '../update-actualite-dialog-dash/update-actualite-dialog-dash.component';

@Component({
  selector: 'app-actualite-list-dash',
  templateUrl: './actualite-list-dash.component.html',
  styleUrls: ['./actualite-list-dash.component.scss'],
})
export class ActualiteListDashComponent implements AfterViewInit {
  constructor(
    private addActualiteDialog: MatDialog,
    private actualiteService: ActualiteService,
    private updateActualiteDialog: MatDialog
  ) {}

  dataSource: MatTableDataSource<Actualite> =
    new MatTableDataSource<Actualite>();
  displayedColumns: string[] = ['titre', 'description', 'date', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.refreshActualiteList();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  refreshActualiteList(): void {
    this.actualiteService.getAllActualites().subscribe(
      (actualites) => {
        this.dataSource.data = actualites;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des actualites:",
          error
        );
      }
    );
  }

  openAddActualiteDialog(): void {
    const dialogRef = this.addActualiteDialog.open(
      AddActualiteDialogDashComponent,
      {
        width: '550px', // Set the width as per your design
        // Add any other dialog configuration options here
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      // Handle the result after the dialog is closed (if needed)
      if (result) {
        console.log('The dialog save pressed', result);
        this.refreshActualiteList();
      } else {
        console.log('The dialog was closed', result);
      }
    });
  }

  onDeleteActualite(id: any): void {
    this.actualiteService.deleteActualite(id).subscribe(
      () => {
        this.refreshActualiteList();
      }
      // handle errors...
    );
  }

  openUpdateDialog(actualiteId: any): void {
    this.actualiteService.getActualite(actualiteId).subscribe(
      (actualiteData) => {
        const dialogRef = this.updateActualiteDialog.open(
          UpdateActualiteDialogDashComponent,
          {
            width: '550px',
            data: actualiteData,
          }
        );

        // Vous pouvez également écouter la fermeture du dialogue si nécessaire
        dialogRef.afterClosed().subscribe((result) => {
          this.refreshActualiteList();
          console.log('Dialog closed with result:', result);
        });
      },
      (error) => {
        console.error('Error fetching actualite data:', error);
      }
    );
  }
}
