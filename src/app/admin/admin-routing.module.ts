import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent, ManageOrdersComponent, ManageProductsComponent } from '.';
import { ProductsService } from '../products/services/products.service';
import { AuthGuard, CanDeactivateGuard } from '../shared';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'products', component: ManageProductsComponent },
          { path: 'product/add', component: ManageProductsComponent },
          {
            path: 'product/edit:productID',
            component: ManageProductsComponent,
            resolve: {products: ProductsService},
            canDeactivate: [CanDeactivateGuard]
          },
          { path: 'orders', component: ManageOrdersComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
