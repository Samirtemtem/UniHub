import {Component, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RestaurantService} from "../restaurant.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

import {AddRestoDialogComponent} from "../add-resto-dialog/add-resto-dialog.component";
import {UpdateRestoDialogComponent} from "../update-resto-dialog/update-resto-dialog.component";

@Component({
  selector: 'app-resto-list-dash',
  templateUrl: './resto-list-dash.component.html',
  styleUrls: ['./resto-list-dash.component.scss']
})
export class RestoListDashComponent {
  constructor(private addUserDialog: MatDialog,private updateRestaurantDialog: MatDialog, private s: RestaurantService) {
  }
  search='';

  ELEMENT_DATA: any;
  Showupdate = false;
  restauranttoupdate: any;
  dataSource: any;
  displayedColumns: string[] = ['nomRestaurant','specialite'  ,'menu', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  showForm(resto: any) {
    this.restauranttoupdate = resto;
    this.Showupdate = true;
  }

  delete(Restaurant: any) {
    console.log("id Restaurant bch nfasakheha", Restaurant.id);
    this.s.removeRestaurant(Restaurant.id).subscribe(() => {
        this.refreshRestaurantList();
      }
    );
    this.refreshRestaurantList();
  }

  afterrecieveData(e: any) {

    console.log(e);
    this.s.updateRestaurant(e.id,e).subscribe(
      () => {
        this.refreshRestaurantList();
      }
    )
    this.Showupdate = false;
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.refreshRestaurantList();
  }
  refreshRestaurantList() {
    this.s.getRestaurant().subscribe(
      (result) => {
        console.log("resulttt ", result)
        this.ELEMENT_DATA = result
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      }
    )

  }


  openAddRestaurantDialog(): void {
    const dialogRef = this.addUserDialog.open(
      AddRestoDialogComponent,
      {
        width: '550px',
      }
    );
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.refreshRestaurantList();
        console.log('The dialog save pressed', result);
      } else {
        console.log('The dialog was closed', result);
      }
    });
  }

  openRestaurantUpdate(data: any) {
    const dialogRef = this.updateRestaurantDialog.open(UpdateRestoDialogComponent, {
      width: '400px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Gérer le résultat après la fermeture du dialogue (si nécessaire)
      if (result) {
        console.log('Le dialogue a été fermé avec succès', result);
      } else {
        console.log('Le dialogue a été fermé', result);
      }
    });

  }

}
