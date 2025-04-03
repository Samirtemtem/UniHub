import { Injectable } from '@angular/core';
import { Actualite } from '../models/actualite';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActualiteService {
  private baseUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {}

  getAllActualites(): Observable<Actualite[]> {
    return this.http.get<Actualite[]>(`${this.baseUrl}/news`);
  }

  deleteActualite(id: any) {
    return this.http.delete(`${this.baseUrl}/news/deleteActualite/${id}`);
  }

  addActualite(data: any): Observable<Actualite> {
    console.log('data');
    console.log(data);
    return this.http.post<Actualite>(
      this.baseUrl + '/news/addActualite/',
      data
    );
  }

  uploadImage(id: any, file: File): Observable<Actualite> {
    const formData: FormData = new FormData();
    formData.append('fileImage', file);

    return this.http.post<Actualite>(
      `${this.baseUrl}/news/uploadImage/${id}`,
      formData
    );
  }

  getActualite(id: any): Observable<Actualite> {
    return this.http.get<Actualite>(
      `${this.baseUrl}/news/getOneActualite/${id}`
    );
  }

  updateActualite(data: any): Observable<Actualite> {
    console.log('data');
    console.log(data);
    return this.http.put<Actualite>(
      this.baseUrl + '/news/updateActualite/',
      data
    );
  }

  shareFb(id: any): Observable<String> {
    console.log('data');
    return this.http.post<String>(
      `${this.baseUrl}/news/shareFb/${id}`,
      'shared'
    );
  }
}
