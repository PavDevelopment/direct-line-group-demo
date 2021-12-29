import { NgModule } from '@angular/core';
import { AccordionModule } from './accordion/accordion.module';

@NgModule({
  imports: [AccordionModule],
  exports: [AccordionModule],
})
export class SharedUIComponentsModule {}
