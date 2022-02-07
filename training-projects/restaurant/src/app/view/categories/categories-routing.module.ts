import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartGuard } from 'src/app/guards/cart.guard';
import { CartResolver } from 'src/app/Resolvers/cart.resolver';
import { CategoriesResolver } from 'src/app/Resolvers/categories.resolver';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CategoriesDetailsComponent } from './categories-details/categories-details.component';

const routes: Routes = [
  {
    path:'cart',
    component:CartDetailsComponent,
   resolve:{cart:CartResolver},
   canActivate:[CartGuard],
    
  },
    {
    path:":categoryName",
    component:CategoriesDetailsComponent,
    resolve:{categories:CategoriesResolver}
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
