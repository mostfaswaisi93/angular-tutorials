import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(public http: HttpClient) { }

  getEvents(): any {
    return this.http.get('http://localhost:3000/events');
  }

  getEvent(id): any {
    return this.http.get(`http://localhost:3000/events/${id}`);
  }
  addEvent(event): any {
    return this.http.post('http://localhost:3000/events', event);
  }
  editEvent(event): any {
    return this.http.put(`http://localhost:3000/events/${event.id}`, event);
  }

  deleteEvent(id): any {
    return this.http.delete(`http://localhost:3000/events/${id}`);
  }
}
