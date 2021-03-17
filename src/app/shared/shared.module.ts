import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPipe } from './pipes/category.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickDirective } from './directives/click.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CategoryPipe, HighlightDirective, ClickDirective, OrderByPipe],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [CommonModule, FormsModule, MaterialModule, CategoryPipe, HighlightDirective, ClickDirective, OrderByPipe]
})
export class SharedModule { }
