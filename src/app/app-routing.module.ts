import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => ProductsModule
  },
  {
    path: 'cart',
    loadChildren: () => CartModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
