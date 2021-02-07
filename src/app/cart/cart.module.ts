import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
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
  ],
  exports: components
})
export class CartModule { }
