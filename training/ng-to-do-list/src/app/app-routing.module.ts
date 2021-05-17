import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { Page404Component } from './components/page404/page404.component';
import { TaskCreateComponent } from './components/tasks/task-create/task-create.component';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'create', component: TaskCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:taskId', component: TaskCreateComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
