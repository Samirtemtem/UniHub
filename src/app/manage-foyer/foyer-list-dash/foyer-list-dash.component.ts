
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FoyerService } from '../service/foyer.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AddFoyerDialogDashComponent } from '../add-foyer-dialog-dash/add-foyer-dialog-dash.component';
import { UpdateFoyerDashComponent } from '../update-foyer-dash/update-foyer.component';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-foyer-list-dash',
  templateUrl: './foyer-list-dash.component.html',
  styleUrls: ['./foyer-list-dash.component.scss']
})
export class FoyerListDashComponent implements AfterViewInit {

  capacityFoyer: number;
  dataSource: any;
  displayedColumns: string[] = [ 'nomFoyer', 'capacityFoyer', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private addUserDialog: MatDialog, private foyerService: FoyerService,
    private updateDialogRef: MatDialog,private route: ActivatedRoute, private router: Router, private location: Location

  ) { }



  applyFilter(): void {
    const filterValue = this.capacityFoyer ? this.capacityFoyer.toString() : '';
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data.foyerList);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteFoyer(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce foyer ?')) {
      this.foyerService.deleteFoyer(id).subscribe(
        (data: any) => {
          window.location.reload();

          // Navigate to a specific route or perform any necessary updates
          this.router.navigate(['/some-route']);
        },
        (error) => {
          console.error('Error deleting foyer:', error);
        }
      );
    }
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;


  }

  openAddFoyerDialog(): void {
    const dialogRef = this.addUserDialog.open(
      AddFoyerDialogDashComponent,
      {
        width: '550px',
      }
    );

    dialogRef.afterClosed().subscribe((result) => {

      if (result) {
        console.log('The dialog save pressed', result);
      } else {
        console.log('The dialog was closed', result);
      }
    });
  }

  openUpdateFoyerDialog(foyer: any): void {
    const dialogRef = this.updateDialogRef.open(
      UpdateFoyerDashComponent,
      {
        data: foyer,
        width: '550px',
      }
    );

    dialogRef.afterClosed().subscribe((result) => {

      if (result) {
        console.log('The dialog save pressed', result);

      } else {
        console.log('The dialog was closed', result);
      }
    });
  }

// Couleur de fond initiale
  backgroundColor = '#FFFFFF';

  onColorChanged(newColor: string) {
    console.log(`Nouvelle couleur : ${newColor}`);
    this.backgroundColor = newColor;
  }

}







