import { Injectable } from '@angular/core';
import { Foyer } from '../model/Foyer';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private baseUrl = "http://localhost:8081/Foyer";
  private foyerIdSubject = new BehaviorSubject<number>(0);
  foyerId$ = this.foyerIdSubject.asObservable();
  idFoyer$: any;

  constructor(private http: HttpClient) { }

  setFoyerId(foyerId: number): void {
    this.foyerIdSubject.next(foyerId);
  }


  getListFoyer() {
    return this.http.get(`${this.baseUrl}/foyers`);
  }



  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.baseUrl}/add`, foyer);
  }



  deleteFoyer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }


  getFoyerById(idFoyer: number): Observable<Foyer> {
    return this.http.get<Foyer>(`${this.baseUrl}/foyer/${idFoyer}`);
  }


  updateFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.put<Foyer>(`${this.baseUrl}/foyer`, foyer);
  }




}
