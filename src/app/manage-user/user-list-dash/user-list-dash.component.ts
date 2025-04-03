import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

import { AddUserDialogDashComponent } from '../add-user-dialog-dash/add-user-dialog-dash.component';
import { UserService } from '../service/user.service';
import { User } from '../model/user'; // Update the path
import { of } from 'rxjs';
import { EditUserDialogDashComponent } from '../edit-user-dialog-dash/edit-user-dialog-dash.component';
// Import statements...
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'app/pages/authentication/auth.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-user-list-dash',
  templateUrl: './user-list-dash.component.html',
  styleUrls: ['./user-list-dash.component.scss'],
})
export class UserListDashComponent implements AfterViewInit, OnInit {
  dataSource: any;
  
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phone', 'active', 'isEnabled', 'roles', 'action'];
  imageUrl: string | ArrayBuffer | null = './assets/images/profile/user-1.jpg';
  searchTerm: '';
  searchText = '';

  user: User | null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  filteredData: any[] = [];

  constructor(private addUserDialog: MatDialog ,private userService: UserService, private dialog: MatDialog , private router: Router , ) {
   
  }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        if (Array.isArray(data)) {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
        } else {
          console.error('An error occurred: Data is not in array format.');
        }
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }

  refreshData() {
    if (this.searchText) {
      this.userService.findByCin(parseInt(this.searchText))
        .subscribe(user => {
          this.dataSource.data = [user]; // Update the data source with the search result
        });
    } else {
      this.userService.getAllUsers().subscribe(
        (data: any) => {
          this.dataSource.data = data;
        }
      );
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
 
  

  deleteUserById(idUser: number) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas récupérer ces données après suppression!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler'
    }).then((result: any) => {  // Spécifiez explicitement le type 'any' ici
      if (result.isConfirmed) {
        this.userService.deleteUser(idUser).subscribe(
          (data: any) => {
            this.refreshData();
           // Show success message if needed
           Swal.fire('Supprimé!', 'Le rôle a été supprimé.', 'success');
          },
          (error: any) => {
            // Check if the error status is 403 (Forbidden)
            if (error instanceof HttpErrorResponse && error.status === 403) {
              // Show Swal error message for forbidden operation
              Swal.fire('Erreur!', 'Vous ne pouvez pas supprimer cet utilisateur. Il est utilisé.', 'error');
            } else {
              // Show a generic error message for other errors
              Swal.fire('Erreur!', 'Une erreur s\'est produite lors de la suppression de cet utilisateur.', 'error');
            }
          }
        );
      }
    });
  }
  


  openAddUserDialog(): void {
    const dialogRef = this.addUserDialog.open(AddUserDialogDashComponent, {
      width: '500px',
      // Add any other dialog configuration options here
    });
  }





  openUserUpdate(user: any) {
    const dialogRef = this.dialog.open(EditUserDialogDashComponent, {
      width: '500px',
      data: user,
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      // Gérer le résultat après la fermeture du dialogue (si nécessaire)
      if (result) {
        console.log('Le dialogue a été fermé avec succès', result);
      } else {
        console.log('Le dialogue a été fermé', result);
      }
    });
  }


  updateDataSource(users: User[]) {
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
  }

  onSearchChange() {
    // Check if the search text is empty
    if (!this.searchText || this.searchText.trim() === '') {
      this.dataSource.filter = ''; // Clear any existing filter
      return;
    }

    // Perform the search based on the searchText
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }
// Couleur de fond initiale
backgroundColor = '#FFFFFF'; 

onColorChanged(newColor: string) {
  console.log(`Nouvelle couleur : ${newColor}`);
  this.backgroundColor = newColor;
}
}