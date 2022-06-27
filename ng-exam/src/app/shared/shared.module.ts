import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatrialModule } from './matrial.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    MatrialModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    BrowserModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    MatrialModule,
    CommonModule,
    NavbarComponent
  ]
})
export class SharedModule { }
