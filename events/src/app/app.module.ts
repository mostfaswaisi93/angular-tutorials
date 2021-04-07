import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEventComponent } from './add-event/add-event.component';
import { EventItemComponent } from './event-item/event-item.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { EditEventComponent } from './edit-event/edit-event.component';

const route: Route[] = [
  {
    path: 'addEvent',
    component: AddEventComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'event/:id',
    component: EventItemComponent
  },
  {
    path: 'eventEdit/:id',
    component: EditEventComponent
  },
  {
    path: 'adminEvents',
    component: AdminEventsComponent
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'prefix'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    LoginComponent,
    ProfileComponent,
    AddEventComponent,
    EventItemComponent,
    AdminEventsComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
