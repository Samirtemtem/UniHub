import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/events';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private baseUrl = 'http://localhost:8087';
  //private baseUrl = environment.url;

  constructor(private http: HttpClient) {}

  addEvent(data: any): Observable<Event> {
    return this.http.post<Event>(
      `${this.baseUrl}/event/addEvent`,
      data
    );
  }

  uploadImage(id: any, file: File): Observable<Event> {
    const formData: FormData = new FormData();
    formData.append('fileImage', file);

    return this.http.post<Event>(
      `${this.baseUrl}/event/events/uploadImage/${id}`,
      formData
    );
  }

  deleteEvent(id: any) {
    return this.http.delete(
      `${this.baseUrl}/event/deleteEvent/${id}`
    );
  }

  getEvent(id: any): Observable<Event> {
    return this.http.get<Event>(
      `${this.baseUrl}/event/getOneEvent/${id}`
    );
  }

  updateEvent(data: any): Observable<Event> {

    return this.http.put<Event>(
      `${this.baseUrl}/event/updateEvent`,
      data
    );
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/event/events`);
  }

  getAllEventsSortedByDateAsc(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/event/sortedByDateAsc`);
  }

  getAllEventsSortedByDateDesc(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseUrl}/event/sortedByDateDesc`);
  }

}
