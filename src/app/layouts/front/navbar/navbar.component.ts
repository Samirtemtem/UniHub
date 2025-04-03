import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from 'app/manage-user/profile/profile.component';
import { AuthService } from 'app/pages/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog , private authService: AuthService) {}
  openProfileDialog() {
    this.dialog.open(ProfileComponent, {
      
      width: '400px', // ajustez la largeur selon vos besoins
    });
  }

  onLogout(): void {
    // Call the logout method from UserService
    this.authService.logout();
  }
  
  isLoggedIn: boolean;

  ngOnInit() {
    // Vérifiez si un utilisateur est présent dans le stockage local
    this.isLoggedIn = this.authService.isUserLoggedIn();
  }

}
