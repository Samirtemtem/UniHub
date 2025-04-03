import { Injectable } from '@angular/core';
import { Club } from '../models/club';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  private baseUrl = 'http://localhost:3000';
  // private baseUrl = environment.url;

  constructor(private http: HttpClient) {}

  getAllClubs(): Observable<Club[]> {
    return this.http.get<Club[]>(`${this.baseUrl}/clubs`);
  }

  deleteClub(id: any) {
    return this.http.delete(`${this.baseUrl}/clubs/${id}`);
  }

  addClub(data: any): Observable<Club> {
    return this.http.post<Club>(this.baseUrl + '/clubs/', data);
  }

  uploadImage(id: any, file: File): Observable<Club> {
    const formData: FormData = new FormData();
    formData.append('fileImage', file);

    return this.http.post<Club>(
      `${this.baseUrl}/clubs/uploadImage/${id}`,
      formData
    );
  }

  getClub(id: any): Observable<Club> {
    return this.http.get<Club>(`${this.baseUrl}/clubs/${id}`);
  }

  updateClub(data: any): Observable<Club> {
    console.log('data');
    console.log(data);
    return this.http.put<Club>(this.baseUrl + '/clubs/', data);
  }
}
