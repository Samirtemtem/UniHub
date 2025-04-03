import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  constructor(private http:HttpClient) { }
  getFoyers(){
    return  this.http.get("http://localhost:8082/foyers");
  }
}
