import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { UsersComponent } from './dashboard/manage-users/components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
