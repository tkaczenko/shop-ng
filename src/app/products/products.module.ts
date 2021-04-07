import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductComponent, ProductListComponent, ProductViewComponent } from '.';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductEffects } from './state/products.effects';
import * as fromProducts from './state/products.reducer';



const components = [
  ProductListComponent,
  ProductComponent,
  ProductViewComponent,
];
@NgModule({
  declarations: components,
  imports: [
    SharedModule,
    ProductsRoutingModule,
    StoreModule.forFeature(fromProducts.productsFeatureKey, fromProducts.reducer),
    EffectsModule.forFeature([ProductEffects])
  ],
})
export class ProductsModule { }
