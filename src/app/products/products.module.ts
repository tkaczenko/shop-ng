import { NgModule } from '@angular/core';
import { ProductComponent, ProductListComponent, ProductViewComponent } from '.';
import { SharedModule } from '../shared/shared.module';
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
})
export class ProductsModule { }
