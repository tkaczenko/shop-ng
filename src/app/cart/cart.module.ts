import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartService } from './services/cart.service';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


const components = [
  CartListComponent,
  CartItemComponent,
];
// Уже зарегистрирован через свой декоратор
// const providers = [
//   CartService
// ];
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
  ],
  // providers,
  exports: components
})
export class CartModule { }
