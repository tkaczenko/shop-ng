import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPipe } from './pipes/category.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickDirective } from './directives/click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [CategoryPipe, HighlightDirective, ClickDirective, OrderByPipe],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [CommonModule, FormsModule, MaterialModule, CategoryPipe, HighlightDirective, ClickDirective, OrderByPipe]
})
export class SharedModule { }
