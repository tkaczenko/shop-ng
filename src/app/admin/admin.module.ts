import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent, ManageOrdersComponent, ManageProductComponent, ManageProductsComponent } from '.';


@NgModule({
  declarations: [AdminComponent, ManageProductsComponent, ManageProductComponent, ManageOrdersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
