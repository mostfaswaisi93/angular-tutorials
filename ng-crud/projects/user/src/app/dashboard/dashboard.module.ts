import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListTasksComponent } from './tasks/components/list-tasks/list-tasks.component';
import { TaskDetailsComponent } from './tasks/components/task-details/task-details.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ListTasksComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
