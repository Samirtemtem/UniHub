
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from '../app/manage-user/service/role.service';
import { Role } from 'app/manage-user/model/role';

@Injectable({
  providedIn: 'root',
})
export class resolverResolver implements Resolve<Role[]> {

  constructor(private roleService: RoleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Role[]> {
    return this.roleService.getAllRoles();
  }
}
