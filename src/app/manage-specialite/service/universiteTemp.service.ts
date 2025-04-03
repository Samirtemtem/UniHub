import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UniversiteTempService {
  constructor(private http: HttpClient) {}

  private _baseLocalUrl = 'http://localhost:8082';

  getAll() {
    return this.http.get(`${this._baseLocalUrl}/universite/universites`);
  }
}
