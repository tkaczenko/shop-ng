import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';



const components = [
  ProductListComponent,
  ProductComponent
];
@NgModule({
  declarations: components,
  imports: [
    SharedModule
  ],
  exports: components
})
export class ProductsModule { }
