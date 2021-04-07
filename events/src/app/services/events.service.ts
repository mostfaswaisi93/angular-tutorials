import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(public http: HttpClient) {}

  getEvents(): any {
    return this.http.get('http://localhost:3000/events');
  }
}
