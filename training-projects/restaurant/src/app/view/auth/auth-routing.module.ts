import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseGuard } from 'src/app/guards/use.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    canActivate:[UseGuard]
  },
  {
    path:"login",
    component:LoginComponent,
    canActivate:[UseGuard]
  },
  {
    path:"register",
    component:RegisterComponent,
    canActivate:[UseGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
