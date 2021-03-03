import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent, CartListComponent, ItemFormComponent } from '.';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    children: [
      {
        path: '',
        component: CartListComponent,
      },
      {
        path: 'edit/:productID',
        component: ItemFormComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
