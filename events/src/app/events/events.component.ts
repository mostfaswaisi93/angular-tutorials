import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events;
  constructor(data: DataService) {
    this.events = data.getEvents();
  }

  ngOnInit(): void { }
}

