import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:"",
    redirectTo:"/home",
    pathMatch:'full'
  },
  {
    path:"products",
    loadChildren:() => import("src/app/view/categories/categories.module").then(m => m.CategoriesModule)
  },
  {
    path:"profile",
    loadChildren:() => import("src/app/view/profile/profile.module").then(m => m.ProfileModule)
  },
  {
    path:"auth",
    component:AuthLayoutComponent,
    children:[
      {
        path:"",
        loadChildren:() => import("src/app/view/auth/auth.module").then(m => m.AuthModule)
      }
    ]
  },
  {
    path:"dashboard",
    component:AdminComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:"",
        loadChildren: () => import("src/app/view/admin/admin.module").then(m => m.AdminModule)
      }
    ]
  },
  {path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
