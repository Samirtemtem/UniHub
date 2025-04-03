import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Role } from '../model/role';
import { environment } from 'app/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleService {

  constructor(private http: HttpClient) {}

  addRole(role: Role): Observable<Role> {
    return this.http.post<Role>(environment.url +`/user/addrole`, role);
  }

  getRole(id: number): Observable<Role> {
    return this.http.get<Role>(environment.url +`/user/role/${id}`);
  }

  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(environment.url +`/user/roles`);
  }

  deleteRole(id: number): Observable<void> {
    return this.http.delete<void>(environment.url +`/user/deleterole/${id}`);
  }

  updateRole(role : Role){
    return this.http.put<any>(environment.url +`/user/updaterole`,role);
  }
  


  findRoleByName(name: string): Observable<Role> {
    return this.http.get<Role>(environment.url +`/user/role/${name}`);
  }
}