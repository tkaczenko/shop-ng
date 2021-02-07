import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
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
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
  ],
  exports: components
})
export class CartModule { }
