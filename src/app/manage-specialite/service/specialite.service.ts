import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specialite } from '../models/specialite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpecialiteService {
  constructor(private http: HttpClient) {}

  private _baseLocalUrl = 'http://localhost:8082';

  addSpecialite(data: any): Observable<Specialite> {
    return this.http.post<Specialite>(
      this._baseLocalUrl + '/specialites',
      data
    );
  }

  uploadPdf(id: any, file: File): Observable<Specialite> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post<Specialite>(
      `${this._baseLocalUrl}/specialites/uploadPdf/${id}`,
      formData
    );
  }

  uploadImage(id: any, file: File): Observable<Specialite> {
    const formData: FormData = new FormData();
    formData.append('fileImage', file);

    return this.http.post<Specialite>(
      `${this._baseLocalUrl}/specialites/uploadImage/${id}`,
      formData
    );
  }

  getAll(): Observable<Specialite[]> {
    return this.http.get<Specialite[]>(`${this._baseLocalUrl}/specialites`);
  }

  deleteById(id: any): Observable<Specialite> {
    return this.http.delete<Specialite>(
      `${this._baseLocalUrl}/specialites/${id}`
    );
  }

  updateSpecialite(data: any): Observable<Specialite> {
    return this.http.put<Specialite>(this._baseLocalUrl + '/specialites', data);
  }

  getById(id: any): Observable<Specialite> {
    return this.http.get<Specialite>(`${this._baseLocalUrl}/specialites/${id}`);
  }
}
