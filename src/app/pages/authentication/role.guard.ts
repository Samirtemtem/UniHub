// auth.guard.ts

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../manage-user/service/user.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class roleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.getRole('ADMIN')) {
      return true; // User is authenticated, allow access to the route (admin role)
    }
  
    this.authService.logout();
    return false;
  }
}
