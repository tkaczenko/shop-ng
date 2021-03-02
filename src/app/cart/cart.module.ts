import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';


const components = [
  CartListComponent,
  CartItemComponent,
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
