import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProcessingComponent } from './processing/processing.component';
import { CandidatesComponent } from './candidates/candidates.component';
import {RouterModule , Routes} from '@angular/router';
import { NgwWowModule } from 'ngx-wow';
import { JoeBidenComponent } from './joe-biden/joe-biden.component';
import { TrumpComponent } from './trump/trump.component';
import { MapComponent } from './map/map.component';
import {ProgressBarModule} from "angular-progress-bar";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProcessingComponent,
    CandidatesComponent,
    JoeBidenComponent,
    TrumpComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,NgwWowModule,RouterModule,ProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
