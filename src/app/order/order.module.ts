import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { ProcessOrderComponent } from '.';



@NgModule({
  declarations: [ProcessOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  exports: [ProcessOrderComponent]
})
export class OrderModule { }
