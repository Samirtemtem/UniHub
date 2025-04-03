import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Chambre} from "./model/chambre";
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  constructor(private http: HttpClient) {
  }

  getChambres() {
    return this.http.get("http://localhost:8091/Chambre/chambres")
  }

  fetchChambreById(id: any) {
    return this.http.get("http://localhost:8091/Chambre/chambre/" + id)
  }

  removeChambre(id: any) {
    return this.http.delete("http://localhost:8091/Chambre/chambre/" + id)
  }

  addChambre(data: any) {
    return this.http.post("http://localhost:8091/Chambre/addchambree", data);
  }


  updateChambre(data: any) {
    return this.http.put("http://localhost:8091/Chambre", data)
  }

  private apiUrl = 'http://localhost:8091/Chambre';

  getStatistiqueNombreChambresParType(): Observable<any> {
    const url = `${this.apiUrl}/statistique/type`;
    return this.http.get(url);
  }

  getSalesOverviewData(): Observable<any> {
    return this.getStatistiqueNombreChambresParType();
  }

  //****************IMAGE***********************

  uploadImage(id:any,data:any){
    return this.http.post("http://localhost:8091/Chambre/uploadImage/" + id,data)

  }
 // @GetMapping("/getImage/{fileName:.+}")
  getImage(fileName:any){
    return this.http.get("http://localhost:8091/Chambre/getImage/" + fileName, { responseType: 'blob' })

  }


 
  }


