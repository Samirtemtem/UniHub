import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'app/manage-user/service/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private user: UserService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('authToken');

    // Cloner la requête pour ajouter le header d'authentification
    if (authToken) {
      const authRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      // Passer la nouvelle requête au gestionnaire suivant
      return next.handle(authRequest);
    }

    // Si le token n'est pas présent, passer la requête originale
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Gérer les erreurs ici, par exemple, rediriger vers une page de connexion
        if (error.status === 401 || error.status === 403) {
          // Code pour gérer l'erreur d'authentification ou d'autorisation
          // Rediriger vers la page de connexion
          this.router.navigate(['/login']);
        }

        // Renvoyer l'erreur pour que le gestionnaire d'erreur global puisse la traiter
        return throwError(error);
      })
    );
  }
}
