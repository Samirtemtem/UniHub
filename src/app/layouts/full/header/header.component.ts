import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from 'app/manage-user/profile/profile.component';
import { AuthService } from 'app/pages/authentication/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(public dialog: MatDialog , private authService: AuthService) {}
  openProfileDialog() {
    this.dialog.open(ProfileComponent, {
      width: '400px', // ajustez la largeur selon vos besoins
      data: { /* Vous pouvez transmettre des données au composant de profil ici si nécessaire */ }
    });
  }

  onLogout(): void {
    // Call the logout method from UserService
    this.authService.logout();
  }
}
