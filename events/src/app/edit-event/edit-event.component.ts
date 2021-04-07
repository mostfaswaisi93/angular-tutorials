import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  event;

  title = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  time = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required, Validators.maxLength(5)]);
  country = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);

  editEventForm = new FormGroup({
    title: this.title,
    date: this.date,
    time: this.time,
    price: this.price,
    country: this.country,
    city: this.city,
    address: this.address
  });
  constructor(
    public evService: EventsService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.evService
      .getEvent(this.activatedRoute.snapshot.params.id)
      .subscribe(data => {
        this.event = data;
        this.title.setValue(this.event.title);
        this.country.setValue(this.event.location.country);
        this.city.setValue(this.event.location.city);
        this.address.setValue(this.event.address);

        // this.editEventForm.setValue(data);
      });
  }

  save(): any {
    this.evService.editEvent(this.editEventForm.value).subscribe(data => {
      if (data) {
        this.router.navigate(['']);
      }
    });
  }

  ngOnInit(): void { }
}
