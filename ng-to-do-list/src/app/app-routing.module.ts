import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { Page404Component } from './components/page404/page404.component';
import { CreateTaskComponent } from './components/tasks/create-task/create-task.component';
import { EditTaskComponent } from './components/tasks/edit-task/edit-task.component';
import { TaskDetailsComponent } from './components/tasks/task-details/task-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: ListTasksComponent },
  { path: 'tasks/create', component: CreateTaskComponent },
  { path: 'tasks/edit/:id', component: EditTaskComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
