import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Universite} from "../models/Universite";
import {Foyer} from "../models/Foyer";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {


  constructor(private http: HttpClient) {
  }

  getUniversites() {
    return this.http.get("http://localhost:8082/universite/universites");
  }

  addUniversite(data: any, imageFile: File): Observable<Universite> {
    const url = `http://localhost:8082/universite/adduniversite`;
    const formData: FormData = new FormData();
    formData.append('nomUniversite', data.nomUniversite);
    formData.append('adresseUniversite', data.adresseUniversite);
    formData.append('ville', data.ville);
    formData.append('descriptionUniversite', data.descriptionUniversite);
    formData.append('telUniversite', data.telUniversite);
    formData.append('emailUinversite', data.emailUinversite);
    formData.append('file', imageFile, imageFile.name);
    return this.http.post<Universite>(url, formData);
  }

  deleteUniversite(id: number): Observable<Universite> {
    const url = `http://localhost:8082/universite/universite/${id}`;
    return this.http.delete<Universite>(url);
  }

  getUniversiteById(id: number) {
    const url = `http://localhost:8082/universite/universite/${id}`;

    return this.http.get<Universite>(url);
  }

  /**updateUniversite(data:any, imageFile: File){
   const url = `http://localhost:8082/universite`;
   const formData: FormData = new FormData();
   formData.append('nomUniversite', data.nomUniversite);
   formData.append('adresseUniversite', data.adresseUniversite);
   formData.append('ville', data.ville);
   formData.append('descriptionUniversite', data.descriptionUniversite);
   formData.append('telUniversite', data.telUniversite);
   formData.append('emailUinversite', data.emailUinversite);
   formData.append('idFoyer', data.idFoyer);
   formData.append('file', imageFile, imageFile.name);
   return this.http.put<Universite>(url,formData);
   }**/
  updateUniversite(universite: any, imageFile: File | null): Observable<any> {

    const formData = new FormData();
    formData.append('idUniversite', universite.idUniversite);
    formData.append('nomUniversite', universite.nomUniversite);
    formData.append('adresseUniversite', universite.adresseUniversite);
    formData.append('ville', universite.ville);
    formData.append('descriptionUniversite', universite.descriptionUniversite);
    formData.append('telUniversite', universite.telUniversite);
    formData.append('emailUinversite', universite.emailUinversite);
    if (imageFile) {
      formData.append('file', imageFile);
    }

    const url = `http://localhost:8082/universite/universite`;
    return this.http.patch<any>(url, formData);
  }
 /** addUniversiteWithFoyer(data: any, id: string | null | undefined, imageFile: File): Observable<Universite> {
    const url = `http://localhost:8082/universite/adduniversitebyfoyer/${id}`;
    const formData: FormData = new FormData();

    formData.append('nomUniversite', data.nomUniversite);
    formData.append('adresseUniversite', data.adresseUniversite);
    formData.append('ville', data.ville);
    formData.append('descriptionUniversite', data.descriptionUniversite);
    formData.append('telUniversite', data.telUniversite);
    formData.append('emailUinversite', data.emailUinversite);
    formData.append('idFoyer', data.idFoyer);
    formData.append('file', imageFile, imageFile.name);

    return this.http.post<Universite>(url, formData);
  }**/
  getFoyers(){
    return  this.http.get<Foyer>("http://localhost:8082/foyer/foyers");
  }
  searchUniversite(nomUniversite:string){
    const url = `http://localhost:8082/universite/searchUnivarsite/${nomUniversite}`;
    return this.http.get<Universite>(url);
  }
  getUniversiteByFoyer(idUniversite: number){
    const url = `http://localhost:8082/universite/universitebyfoyer/${idUniversite}`;
    return this.http.delete<Universite>(url);

  }


}
