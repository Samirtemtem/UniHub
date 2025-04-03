import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpecialiteService } from '../service/specialite.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddSpecialiteDialogDashComponent } from '../add-specialite-dialog-dash/add-specialite-dialog-dash.component';
import { DeleteSpecialiteDialogDashComponent } from '../delete-specialite-dialog-dash/delete-specialite-dialog-dash.component';
import { Specialite } from '../models/specialite';
import { UpdateSpecialiteDialogDashComponent } from '../update-specialite-dialog-dash/update-specialite-dialog-dash.component';
import { ActivatedRoute } from '@angular/router';
import { MatiereService } from '../manage-matiere/services/matiere.service';
import { AddMatiereDialogDashComponent } from '../manage-matiere/add-matiere-dialog-dash/add-matiere-dialog-dash.component';
import { Matiere } from '../manage-matiere/models/matiere';
import { DeleteMatiereDialogDashComponent } from '../manage-matiere/delete-matiere-dialog-dash/delete-matiere-dialog-dash.component';
import { UpdateMatiereDialogComponent } from '../manage-matiere/update-matiere-dialog/update-matiere-dialog.component';

@Component({
  selector: 'app-specialite-detail-dash',
  templateUrl: './specialite-detail-dash.component.html',
  styleUrls: ['./specialite-detail-dash.component.scss'],
})
export class SpecialiteDetailDashComponent {
  constructor(
    private addSpecialiteDialog: MatDialog,
    private deleteSpecialiteDialog: MatDialog,
    private updateSpecialiteDialog: MatDialog,
    private specialiteService: SpecialiteService,
    private activatedRoute: ActivatedRoute,
    private matiereService: MatiereService
  ) {}

  // dataSource: any;
  displayedColumns: string[] = ['nom', 'ects', 'description', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  brandNewSpecialite: any;
  uploadUrl = 'http://localhost:8083/upload-directory/';
  currentSpecialite: Specialite | null;
  matiereList: Matiere[];
  filtredmatiereList: Matiere[];
  searchInput: string = '';

  // updateList(data: any) {
  //   if (data[1].action === 'delete') {
  //     let index = this.matiereList.indexOf(data[0]);
  //     this.matiereList.splice(index, 1);
  //     this.dataSource = new MatTableDataSource(this.matiereList);
  //     this.dataSource.paginator = this.paginator;
  //   } else if (data[1].action === 'add') {
  //     this.matiereList.push(data[0]);
  //     this.dataSource = new MatTableDataSource(this.matiereList);
  //     this.dataSource.paginator = this.paginator;
  //   } else if (data[1].action === 'update') {
  //     let index = this.matiereList.findIndex((spec) => data[0].id == spec.id);
  //     this.matiereList[index].imageUrl = data[0].imageUrl;
  //     this.dataSource = new MatTableDataSource(this.matiereList);
  //     this.dataSource.paginator = this.paginator;
  //   }
  // }

  ngOnInit(): void {
    this.specialiteService
      .getById(this.activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (res) => {
          this.currentSpecialite = res;
        },
        error: (err) => {
          console.log(err);
        },
        // complete: () => {
        //   this.matiereService
        //     .getAllBySpec(this.currentSpecialite?.id)
        //     .subscribe({
        //       next: (res) => {
        //         this.matiereList = res;
        //         this.filtredmatiereList = res;
        //         this.dataSource = new MatTableDataSource(this.matiereList);
        //         this.dataSource.paginator = this.paginator;
        //       },
        //       error: (err) => {
        //         console.log(err);
        //       },
        //     });
        // },
      });
  }

  // ngAfterViewInit(): void {
  //   this.updateList();
  // }

  // openAddMatiereDialog(): void {
  //   const addDialogRef = this.addSpecialiteDialog.open(
  //     AddMatiereDialogDashComponent,
  //     {
  //       width: '550px',
  //       data: this.currentSpecialite,
  //     }
  //   );

  //   addDialogRef.afterClosed().subscribe((res) => {
  //     this.updateList(res);
  //   });
  // }

  // openDeleteMatiereDialog(deletedSpecialite: Specialite): void {
  //   const deleteDialogRef = this.deleteSpecialiteDialog.open(
  //     DeleteMatiereDialogDashComponent,
  //     {
  //       width: '400px',
  //       data: deletedSpecialite,
  //     }
  //   );

  //   deleteDialogRef.afterClosed().subscribe((res) => {
  //     this.updateList(res);
  //   });
  // }

  // openUpdateMatiereDialog(updatedMatiere: Matiere): void {
  //   const updateDialogRef = this.updateSpecialiteDialog.open(
  //     UpdateMatiereDialogComponent,
  //     {
  //       width: '550px',
  //       data: updatedMatiere,
  //     }
  //   );

  //   updateDialogRef.afterClosed().subscribe((res) => {
  //     this.updateList(res);
  //   });
  // }

  // onSearchChange(searchInput: string) {
  //   if (!searchInput) {
  //     this.filtredmatiereList = this.matiereList;
  //     this.dataSource = new MatTableDataSource(this.filtredmatiereList);
  //     this.dataSource.paginator = this.paginator;
  //     return;
  //   }

  //   this.filtredmatiereList = this.matiereList.filter((matiere) =>
  //     matiere.nom.toLowerCase().includes(searchInput.toLowerCase())
  //   );
  //   this.dataSource = new MatTableDataSource(this.filtredmatiereList);
  //   this.dataSource.paginator = this.paginator;
  // }
}
