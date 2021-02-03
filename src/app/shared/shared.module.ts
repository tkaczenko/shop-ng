import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPipe } from './pipes/category.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickDirective } from './directives/click.directive';



@NgModule({
  declarations: [CategoryPipe, HighlightDirective, ClickDirective],
  imports: [
    CommonModule,
  ],
  exports: [CategoryPipe, HighlightDirective, ClickDirective]
})
export class SharedModule { }
