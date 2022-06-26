import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductComponent } from './products/components/product/product.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SelectComponent } from './shared/components/select/select.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    AllProductsComponent,
    ProductComponent,
    ProductsDetailsComponent,
    HeaderComponent,
    SelectComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
