import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPipe } from './pipes/category.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [CategoryPipe, HighlightDirective],
  imports: [
    CommonModule,
  ],
  exports: [CategoryPipe, HighlightDirective]
})
export class SharedModule { }
