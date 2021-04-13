import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { Page404Component } from './components/page404/page404.component';
import { CreateTaskComponent } from './components/tasks/create-task/create-task.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ListTasksComponent },
  { path: 'create', component: CreateTaskComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
