import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})

export class AddEventComponent implements OnInit {
  title = new FormControl('test', [Validators.required]);
  date = new FormControl('12/11/2018', [Validators.required]);
  time = new FormControl('08:28', [Validators.required]);
  price = new FormControl('5', [Validators.required, Validators.maxLength(5)]);
  country = new FormControl('p', [Validators.required]);
  city = new FormControl('g', [Validators.required]);
  address = new FormControl('a', [Validators.required]);

  addEventForm = new FormGroup({
    title: this.title,
    date: this.date,
    time: this.time,
    price: this.price,
    country: this.country,
    city: this.city,
    address: this.address
  });
  constructor(public evService: EventsService, private router: Router) { }

  ngOnInit(): void { }

  save(): any {
    // console.log(this.addEventForm.value);
    this.evService.addEvent(this.addEventForm.value).subscribe(data => {
      if (data) {
        this.router.navigate(['']);
      }
    });

  }
}
