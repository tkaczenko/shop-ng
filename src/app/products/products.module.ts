import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsRoutingModule } from './products-routing.module';



const components = [
  ProductListComponent,
  ProductComponent,
  ProductViewComponent,
];
@NgModule({
  declarations: components,
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  exports: components
})
export class ProductsModule { }
