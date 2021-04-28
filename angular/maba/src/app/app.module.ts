import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { FirstUpperPipe } from './pipes/first-upper.pipe';
import { UserService } from './services/users.service';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddProductComponent,
    AdminProductsComponent,
    AdminUsersComponent,
    CheckoutComponent,
    EditProductComponent,
    HomeComponent,
    LoginComponent,
    Page404Component,
    ProductComponent,
    ProductsComponent,
    ProfileComponent,
    SignupComponent,
    FirstUpperPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
