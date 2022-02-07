import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { CategoriesResolver } from 'src/app/Resolvers/categories.resolver';
import { OrdersResolver } from 'src/app/Resolvers/orders.resolver';
import { AddProductComponent } from './add-product/add-product.component';
import { GetOrdersComponent } from './get-orders/get-orders.component';
import { ModifyProductsComponent } from './modify-products/modify-products.component';

const routes: Routes = [
  {
    path:"",
    component:AddProductComponent,
    canActivate:[AdminGuard],
  },
  {
    path:"add",
    component:AddProductComponent,
    canActivate:[AdminGuard],
  },
  {
    path:"orders",
    component:GetOrdersComponent,
    canActivate:[AdminGuard],
    resolve:{orders:OrdersResolver}
  },
  {
    path:"modify",
    component:ModifyProductsComponent,
    resolve:{categories:CategoriesResolver},
    canActivate:[AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
