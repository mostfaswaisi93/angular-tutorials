import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextPipe } from './text.pipe';
import { SearchPipe } from './search.pipe';
import { AccordionModule } from 'ngx-bootstrap/accordion';

const accordion = [AccordionModule.forRoot()]
@NgModule({
  declarations: [TextPipe, SearchPipe],
  imports: [
    CommonModule,
    AccordionModule.forRoot()
  ],
  exports:[TextPipe,SearchPipe,accordion]
})
export class SharedModule { }



