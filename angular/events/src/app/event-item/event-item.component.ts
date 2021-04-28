import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  event;
  constructor(
    private eventsService: EventsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.eventsService
      .getEvent(this.activatedRoute.snapshot.params.id)
      .subscribe(data => (this.event = data));
  }

  ngOnInit(): void { }
}
