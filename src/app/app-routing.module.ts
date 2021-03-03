import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { ProductsModule } from './products/products.module';
import { AuthGuard, IsCartEmptyGuard } from './shared';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => ProductsModule
  },
  {
    path: 'cart',
    loadChildren: () => CartModule
  },
  {
    path: 'order',
    canLoad: [IsCartEmptyGuard],
    loadChildren: () => OrderModule
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: () => AdminModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
