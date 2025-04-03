import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matiere } from '../models/matiere';

@Injectable({
  providedIn: 'root',
})
export class MatiereService {
  constructor(private http: HttpClient) {}

  private _baseLocalUrl = 'http://localhost:8082';

  getAllBySpec(id: any): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(
      `${this._baseLocalUrl}/matieres/bySpec/${id}`
    );
  }

  getById(id: any): Observable<Matiere> {
    return this.http.get<Matiere>(`${this._baseLocalUrl}/matieres/${id}`);
  }

  addMatiere(data: any, id: any): Observable<Matiere> {
    return this.http.post<Matiere>(
      `${this._baseLocalUrl}/matieres/${id}`,
      data
    );
  }

  uploadImage(id: any, file: File): Observable<Matiere> {
    const formData: FormData = new FormData();
    formData.append('fileImage', file);

    return this.http.post<Matiere>(
      `${this._baseLocalUrl}/matieres/uploadImage/${id}`,
      formData
    );
  }

  deleteById(id: any): Observable<Matiere> {
    return this.http.delete<Matiere>(`${this._baseLocalUrl}/matieres/${id}`);
  }

  updateMatiere(data: any): Observable<Matiere> {
    return this.http.put<Matiere>(`${this._baseLocalUrl}/matieres`, data);
  }

  countBySpec(id: any): Observable<number> {
    return this.http.get<number>(
      `${this._baseLocalUrl}/matieres/countBySpec/${id}`
    );
  }
}
