import { NgModule } from '@angular/core';
import { CartComponent, CartItemComponent, CartListComponent, ItemFormComponent } from '.';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';


const components = [
  CartListComponent,
  CartItemComponent,
  CartComponent,
  ItemFormComponent
];

@NgModule({
  declarations: components,
  imports: [
    SharedModule,
    CartRoutingModule,
  ],
  exports: components
})
export class CartModule { }
