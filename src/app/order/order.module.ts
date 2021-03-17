import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { ProcessOrderComponent } from '.';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ProcessOrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule
  ],
  exports: [ProcessOrderComponent]
})
export class OrderModule { }
