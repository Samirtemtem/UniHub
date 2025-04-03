import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UniversiteService } from '../manage-university/services/universite.service';
import { Universite } from "./models/Universite";
@Injectable({
  providedIn: 'root'
})

export class ResolverUnivService implements Resolve<any> {
  constructor(private serviceUniv: UniversiteService) {}

  resolve(): Observable<Universite> | Promise<Universite> | any {
    return this.serviceUniv.getUniversites();
  }
}
