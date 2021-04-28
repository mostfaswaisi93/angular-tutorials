import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName = new FormControl(null, [
    Validators.required,
    Validators.maxLength(5)
  ]);
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('mostfaswaisi93', Validators.required);
  webSite = new FormControl('www.facebook.com/mostfaswaisi93', Validators.required);
  info = new FormControl('This is info about me.', Validators.required);

  profile = new FormGroup({
    userName: this.userName,
    firstName: this.firstName,
    lastName: this.lastName,
    webSite: this.webSite,
    info: this.info
  });

  constructor() { }

  ngOnInit(): void {
  }
}
