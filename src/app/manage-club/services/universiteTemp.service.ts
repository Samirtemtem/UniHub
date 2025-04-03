import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UniversiteTempService {
  constructor(private http: HttpClient) {}

  // private _baseLocalUrl = 'http://localhost:8082';
  private _baseLocalUrl = environment.url;

  getAllUniversites() {
    return this.http.get(`${this._baseLocalUrl}/universite/universites`);
  }
}
