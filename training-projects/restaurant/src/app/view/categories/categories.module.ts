import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    CartDetailsComponent,
    CategoriesDetailsComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule ,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class CategoriesModule { }
