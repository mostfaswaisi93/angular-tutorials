import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events;
  constructor(public eventsService: EventsService, public router: Router) {
    eventsService.getEvents().subscribe(data => (this.events = data));
  }

  ngOnInit(): void { }

  goEvent(id): any {
    this.router.navigate(['event', id]);
  }

}
