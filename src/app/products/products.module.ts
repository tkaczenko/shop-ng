import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from '../material/material.module';



const components = [
  ProductListComponent,
  ProductComponent
];
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: components
})
export class ProductsModule { }
