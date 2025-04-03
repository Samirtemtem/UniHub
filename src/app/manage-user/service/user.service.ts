import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../model/user';
import { Role } from '../model/role';
import { environment } from 'app/environment/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  role: Role[] = [];

  constructor(private http: HttpClient) {
  }
 
  jwtService: JwtHelperService = new JwtHelperService();

 // Register a new user
 addUser(user: any, imageFile: File): Observable<any> {
  const formData: FormData = new FormData();

  // Ajoutez chaque champ du modèle utilisateur individuellement
  formData.append('firstName', user.firstName);
  formData.append('lastName', user.lastName);
  formData.append('email', user.email);
  formData.append('cin', user.cin);
  formData.append('phone', user.phone);
  formData.append('password', user.password);
  formData.append('roles', user.roles);
  formData.append('file', imageFile);

  return this.http.post(environment.url + '/user/adduser', formData);
}
// Get user by ID
getUserById(idUser: number): Observable<any> {
  return this.http.get(environment.url +`/user/user/${idUser}`);
}

// Get all users
getAllUsers(): Observable<User[]> {
  return this.http.get<User[]>(environment.url +`/user/users`);
}

// Update user details



updateUser(user: any, imageFile: File | null): Observable<any> {
  const formData = new FormData();
 

  // Ajoutez chaque champ du modèle utilisateur individuellement
  formData.append('idUser', user.idUser);
  formData.append('firstName', user.firstName);
  formData.append('lastName', user.lastName);
  formData.append('email', user.email);
  formData.append('cin', user.cin);
  formData.append('phone', user.phone);
  formData.append('password', user.password);
  if (typeof user.enabled !== 'undefined') {
    formData.append('enabled', user.enabled.toString());
  }

  if (typeof user.active !== 'undefined') {
    formData.append('active', user.active.toString());
  }

  formData.append('roles', user.roles);



    // Append the role name to the formData
 

  // Assurez-vous que l'image est définie avant de l'ajouter au FormData
  if (imageFile) {
    formData.append('file', imageFile);
  }

  // Utilisez l'opérateur de concaténation de chaînes pour construire l'URL
  const url = `${environment.url}/user/updateuser`;

  return this.http.patch<any>(url, formData);
}

// Delete user by ID
deleteUser(userId: number): Observable<any> {
  return this.http.delete(environment.url +`/user/deleteuser/${userId}`);
}

findByCin(cin: number): Observable<User> {
  const url = environment.url + `/user/cin/${cin}`;
  return this.http.get<User>(url)
   
}
checkEmailExists(email: string): Observable<boolean> {
  const url = environment.url +`/user/checkEmailExists?email=${email}`;
  return this.http.get<boolean>(url);
}

checkCinExists(cin: string): Observable<boolean> {
  const url = environment.url +`/user/checkCinExists?cin=${cin}`;
  return this.http.get<boolean>(url);
}

// Request password reset
requestPasswordReset(email: string): Observable<any> {
  return this.http.post(environment.url +`/user/password-reset-request`, { email });
}

// Reset password
resetPassword(token: string, newPassword: string): Observable<any> {
  return this.http.post(environment.url +`/user/reset-password?token=${token}`, { newPassword });
}

// Change user password
changePassword(email: string, newPassword: string): Observable<any> {
  return this.http.post(environment.url +`/user/user/change-password`, { email, newPassword });
}


// Mettre à jour le profil de l'utilisateur


uploadImage(file: File, userId: number): Observable<User> {
  const formData: FormData = new FormData();
  formData.append('fileImage', file, file.name);

  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');

  return this.http.post<User>(environment.url +`/user/uploadImage/${userId}`, formData, { headers: headers });
}
getToken(): any {
  const token= sessionStorage.getItem('access_token');

  return token
}

}
  


