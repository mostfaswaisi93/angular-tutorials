import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { HeroComponent } from './components/hero/hero.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { ListBookComponent } from './components/admin/list-book/list-book.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Services
import { DataApiService } from 'src/app/services/data-api.service';
import { ModalComponent } from './components/modal/modal.component';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OffersComponent,
    HeroComponent,
    DetailsBookComponent,
    ListBookComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    ModalComponent,
    TruncateTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
