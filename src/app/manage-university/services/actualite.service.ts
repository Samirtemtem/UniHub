import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Actualite} from "../models/Actualite";
import {AbstractControl, ValidationErrors, ɵElement, ɵValue} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor(private http:HttpClient) { }
  getActualites(){
    return  this.http.get("http://localhost:8082/actualite/actualites");
  }
  addActualite(data:any):Observable<Actualite>{
    return this.http.post<Actualite>("http://localhost:8082/actualite/addactualite",data);
  }
  deleteActualite(id: number): Observable<Actualite> {
    const url = `http://localhost:8082/actualite/actualite/${id}`;
    return this.http.delete<Actualite>(url);
  }
  getActualiteById(id: number){
    const url = `http://localhost:8082/actualite/actualite/${id}`;

    return  this.http.get<Actualite>(url);
  }
  updateActualite(data:any){
    return this.http.put<Actualite>("http://localhost:8082/actualite/actualite",data);
  }
  affecterUniversiteAActualite(idUniversite:number,actualite:any){
    const url = `http://localhost:8082/actualite/actualite/${idUniversite}`;
    return this.http.post<Actualite>(url, actualite);
  }
  getActualiteByUniversiteId(idUniversite:number){
    const url = `http://localhost:8082/actualite/actualitebyuniversite/${idUniversite}`;
    return this.http.get<Actualite>(url);
  }

  updateActualiteWithUniversite(idUniversite: number, idActualite: ɵValue<ɵElement<(string | ((control: AbstractControl) => (ValidationErrors | null))[])[], null>> | undefined){
    const url = `http://localhost:8082/actualite/updateactualiteuniversite/${idUniversite}/${idActualite}`;
    // @ts-ignore
    return this.http.put<Actualite>(url);
  }

}
