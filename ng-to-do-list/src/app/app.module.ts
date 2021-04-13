import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { CreateTaskComponent } from './components/tasks/create-task/create-task.component';


const appRoutes: Routes = [
  { path: 'list', component: ListTasksComponent },
  { path: 'create', component: CreateTaskComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
