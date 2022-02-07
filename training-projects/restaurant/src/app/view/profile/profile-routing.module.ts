import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileGuard } from 'src/app/guards/profile.guard';
import { OrdersComponent } from './orders/orders.component';
import { ParentComponent } from './parent/parent.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:ParentComponent,
    canActivate:[ProfileGuard],
    children:[
      {
        path:'',
        component:ProfileComponent
      },
      {
        path:'orders',
        component:OrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
