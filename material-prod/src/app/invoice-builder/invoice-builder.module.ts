import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceBuilderRoutingModule } from './invoice-builder-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { InvoiceBuilderComponent } from './invoice-builder.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    SideNavComponent,
    MainContentComponent,
    InvoiceBuilderComponent,
  ],
  imports: [
    CommonModule,
    InvoiceBuilderRoutingModule
  ]
})
export class InvoiceBuilderModule { }
