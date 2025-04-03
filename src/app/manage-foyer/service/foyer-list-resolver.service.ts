import { Injectable } from '@angular/core';
import { FoyerService } from './foyer.service';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { Foyer } from '../model/Foyer';
@Injectable({
  providedIn: 'root'
})
export class FoyerListResolverService implements Resolve<any> {
  constructor(private foyerService: FoyerService) {}

  resolve(): Observable<Foyer> | Promise<Foyer> | any {
    return this.foyerService.getListFoyer();
  }
}

