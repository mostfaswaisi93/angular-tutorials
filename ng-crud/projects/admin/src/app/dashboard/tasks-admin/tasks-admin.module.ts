import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksAdminRoutingModule } from './tasks-admin-routing.module';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';


@NgModule({
  declarations: [
    ConfirmationComponent,
    ListTasksComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    TasksAdminRoutingModule
  ]
})
export class TasksAdminModule { }
