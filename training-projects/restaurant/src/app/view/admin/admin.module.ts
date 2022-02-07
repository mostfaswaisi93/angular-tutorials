import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { GetOrdersComponent } from './get-orders/get-orders.component';
import { ModifyProductsComponent } from './modify-products/modify-products.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    AddProductComponent,
    GetOrdersComponent,
    ModifyProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
   SharedModule,
    FormsModule,
    MatTableModule,
  ]
})
export class AdminModule { }
