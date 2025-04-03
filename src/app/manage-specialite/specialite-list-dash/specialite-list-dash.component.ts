import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddSpecialiteDialogDashComponent } from '../add-specialite-dialog-dash/add-specialite-dialog-dash.component';
import { SpecialiteService } from '../service/specialite.service';
import { DeleteSpecialiteDialogDashComponent } from '../delete-specialite-dialog-dash/delete-specialite-dialog-dash.component';
import { Specialite } from '../models/specialite';
import { UpdateSpecialiteDialogDashComponent } from '../update-specialite-dialog-dash/update-specialite-dialog-dash.component';
import { UniversiteTempService } from '../service/universiteTemp.service';

@Component({
  selector: 'app-specialite-list-dash',
  templateUrl: './specialite-list-dash.component.html',
  styleUrls: ['./specialite-list-dash.component.scss'],
})
export class SpecialiteListDashComponent {
  specialiteList: Specialite[];
  filtredSpecialiteList: Specialite[];
  searchInput: string = '';
  constructor(
    private addSpecialiteDialog: MatDialog,
    private deleteSpecialiteDialog: MatDialog,
    private updateSpecialiteDialog: MatDialog,
    private specialiteService: SpecialiteService // private universiteService: UniversiteTempService
  ) {}

  dataSource: any;
  displayedColumns: string[] = [
    'nom',
    'diplome',
    // 'universite',
    'planEtude',
    'action',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  brandNewSpecialite: any;
  uploadUrl = 'http://localhost:8083/upload-directory/';
  // universites: any;
  showDeleteDialog: boolean = false;
  toDeleteSpec: Specialite;

  updateList(data: any) {
    if (data[1].action === 'delete') {
      let index = this.filtredSpecialiteList.indexOf(data[0]);
      this.filtredSpecialiteList.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.filtredSpecialiteList);
      this.dataSource.paginator = this.paginator;
    } else if (data[1].action === 'add') {
      this.filtredSpecialiteList.push(data[0]);
      this.dataSource = new MatTableDataSource(this.filtredSpecialiteList);
      this.dataSource.paginator = this.paginator;
    } else if (data[1].action === 'update') {
      console.log(data);
      let index = this.filtredSpecialiteList.findIndex(
        (spec) => data[0].id == spec.id
      );
      // this.filtredSpecialiteList[index].imageUrl = data[0].imageUrl;
      // this.filtredSpecialiteList[index].planEtudePdf = data[0].planEtudePdf;
      this.filtredSpecialiteList[index] = data[0];
      this.dataSource = new MatTableDataSource(this.filtredSpecialiteList);
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.specialiteService.getAll().subscribe({
      next: (res) => {
        this.specialiteList = res;
        this.filtredSpecialiteList = res;
        this.dataSource = new MatTableDataSource(this.filtredSpecialiteList);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      },
    });

    // this.universiteService.getAll().subscribe({
    //   next: (res) => {
    //     this.universites = res;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }

  openAddSpecialiteDialog(): void {
    const addDialogRef = this.addSpecialiteDialog.open(
      AddSpecialiteDialogDashComponent,
      {
        width: '550px',
        // data: this.universites,
      }
    );

    addDialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.updateList(res);
      }
    });
  }

  onClose(res: any) {
    this.showDeleteDialog = res;
  }

  onDelete(res: any) {
    this.updateList(res);
  }

  openDeleteSpecialiteDialog(deletedSpecialite: Specialite): void {
    // this.showDeleteDialog = true;
    // this.toDeleteSpec = deletedSpecialite;
    const deleteDialogRef = this.deleteSpecialiteDialog.open(
      DeleteSpecialiteDialogDashComponent,
      {
        width: '400px',
        data: deletedSpecialite,
      }
    );

    deleteDialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.updateList(res);
      }
    });
  }

  openUpdateSpecialiteDialog(updatedSpecialite: Specialite): void {
    const updateDialogRef = this.updateSpecialiteDialog.open(
      UpdateSpecialiteDialogDashComponent,
      {
        width: '550px',
        // data: { ...updatedSpecialite, universites: this.universites },
        data: updatedSpecialite,
      }
    );

    updateDialogRef.afterClosed().subscribe((res) => {
      this.updateList(res);
    });
  }

  onSearchChange(searchInput: string) {
    if (!searchInput) {
      this.filtredSpecialiteList = this.specialiteList;
      this.dataSource = new MatTableDataSource(this.filtredSpecialiteList);
      this.dataSource.paginator = this.paginator;
      return;
    }

    this.filtredSpecialiteList = this.specialiteList.filter((spec) =>
      spec.nom.toLowerCase().includes(searchInput.toLowerCase())
    );
    this.dataSource = new MatTableDataSource(this.filtredSpecialiteList);
    this.dataSource.paginator = this.paginator;
  }
}
