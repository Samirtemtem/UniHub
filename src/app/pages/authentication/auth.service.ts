import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, map, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'app/environment/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../../manage-user/model/user';
import { Role } from 'app/manage-user/model/role';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  private tokenStorageKey = 'authToken';
   defaultImageUrl = `img.png`;

  jwtService: JwtHelperService = new JwtHelperService();

  private userSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  constructor(private http: HttpClient , private router:Router ) {
   
  }
  register(firstName: string, lastName: string, cin: number , phone: number ,email: string, password: string, role?: string ): Observable<any> {
    const body = { firstName, lastName,cin ,phone, email, password, role: role || 'ETUDIANT'   };

    return this.http.post<any>(environment.url +`/register`, body)
     
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
  
    return this.http.post<string>(environment.url +`/authenticate`, body, { responseType: 'text' as 'json' })
      .pipe(
        tap(token => this.handleAuthentication(token)),
        catchError(error => throwError(error))
      );
  }

  private handleAuthentication(token: string): void {
    if (token) {
      // Save the token in session storage
      localStorage.setItem('authToken', token);
      const userInfo = this.jwtService.decodeToken(token);
      console.log('Decoded Token:', userInfo);
      if (userInfo) {
        const userRole = userInfo.roles.name;

        // Stocker le rôle dans le localStorage
        localStorage.setItem('role', userRole);
        // Créer le profil utilisateur à partir des informations extraites du jeton
        const userProfile: User = {
          idUser: userInfo.idUser,
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          password: userInfo.password,
          phone: userInfo.phone,
          email:userInfo.email,
          cin: userInfo.cin,
          active: userInfo.active,
          enabled: userInfo.enabled,
          imageUrl: userInfo.imageUrl || this.defaultImageUrl, // Utilisez l'image par défaut si imageUrl est indéfini
          
          roles:userInfo.roles
        };
  
        // Stocker le profil utilisateur dans le stockage local
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
  
        // Autres opérations si nécessaire

  
      // Other handling logic if needed
    } else {
      // Handle authentication failure, e.g., display an error message
      console.error('Authentication failed');
    }
  }

  }

  isUserLoggedIn(): boolean {
    // Vérifiez si un utilisateur est présent dans le stockage local
    const user = localStorage.getItem('authToken');
    return !!user; // Renvoie `true` si un utilisateur est présent, sinon `false`
  }

 
  

  logout(): void {
    // Remove the authentication token from session storage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userProfile');
    localStorage.removeItem('role');
    this.router.navigate(['/home']);


  }




resetPasswordRequest(email: string): Observable<string> {
  const url = environment.url +`/register/password-reset-request`;
  const passwordRequestUtil = { email };
  return this.http.post<string>(url, passwordRequestUtil)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error during password reset request:', error);
        return throwError('Failed to send password reset request.'); // Use throwError to propagate the error
      })
    );
}
resetPassword(passwordRequestUtil: any, token: string): Observable<string> {
  const url = environment.url +`/register/reset-password?token=${token}`;
  return this.http.post<string>(url, passwordRequestUtil);
}


changePassword(newPassword: string, token: string) {
  const resetPasswordUrl = environment.url + `/register/reset-password`;
  const tokenQueryParam = `?token=${token}`;

  const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Set the Content-Type header

  return this.http.post(resetPasswordUrl + tokenQueryParam, { newPassword }, { headers, responseType: 'text' as 'json' });
}


//guard 
is_logged(): boolean {
  return !!localStorage.getItem('authToken');
  }

  getRole(role: string): boolean {
    const userRole = localStorage.getItem('role');
    return userRole === role;
  }

  
}

