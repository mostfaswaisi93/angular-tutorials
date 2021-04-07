import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css']
})
export class AdminEventsComponent implements OnInit {
  events;
  constructor(public eventsService: EventsService, public router: Router) {
    eventsService.getEvents().subscribe(data => (this.events = data));
  }

  ngOnInit(): void { }

  delete(id): any {
    this.eventsService.deleteEvent(id).subscribe(data => {
      if (data) {
        this.eventsService.getEvents().subscribe(dd => (this.events = dd));
      }
    });
  }

  goEditEvent(id): any {
    this.router.navigate(['eventEdit', id]);
  }
}
