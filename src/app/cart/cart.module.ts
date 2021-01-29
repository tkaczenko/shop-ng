import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartService } from './services/cart.service';
import { ProductsModule } from '../products/products.module';
import { MaterialModule } from '../material/material.module';


const components = [
  CartListComponent,
  CartItemComponent,
];
const providers = [
  CartService
];
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers,
  exports: components
})
export class CartModule { }
