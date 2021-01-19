import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [CategoryPipe],
  imports: [
    CommonModule,
  ],
  exports: [CategoryPipe]
})
export class SharedModule { }
