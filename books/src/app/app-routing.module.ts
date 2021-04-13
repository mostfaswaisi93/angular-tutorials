import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBookComponent } from './components/admin/list-book/list-book.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { Page404Component } from './components/page404/page404.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'book/:id', component: DetailsBookComponent },
  { path: 'admin/list-books', component: ListBookComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
