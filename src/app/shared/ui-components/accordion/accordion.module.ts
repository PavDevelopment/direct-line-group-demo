import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionComponent } from './accordion.component';
import { AccordionContent } from './directives/accordion-content.directive';
import { AccordionHeader } from './directives/accordion-header.directive';
import { AccordionItem } from './directives/accordion-item.directive';
import { AccordionTitle } from './directives/accordion-title.directive';
import { TogglePipe } from './pipe/toggle.pipe';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItem,
    AccordionContent,
    AccordionTitle,
    AccordionHeader,
    TogglePipe,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    AccordionComponent,
    AccordionItem,
    AccordionContent,
    AccordionTitle,
    AccordionHeader,
  ],
})
export class AccordionModule {}
