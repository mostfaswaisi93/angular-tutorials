import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
      CommonModule,
      MatButtonModule,
      MatIconModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatCardModule
    ],
    exports : [
      MatButtonModule,
      MatIconModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatCardModule
    ],
    declarations: []
  })
export class MaterialModule { }
