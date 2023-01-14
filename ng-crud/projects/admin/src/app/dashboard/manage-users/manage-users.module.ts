import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { MaterialModule } from '../../material/material.module';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    // NgxPaginationModule,
    ReactiveFormsModule,
    SharedModule,
    ManageUsersRoutingModule,
    HttpClientModule,
    CommonModule
  ]
})
export class ManageUsersModule { }
