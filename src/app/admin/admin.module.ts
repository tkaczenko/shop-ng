import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent, ManageOrdersComponent, ManageProductComponent, ManageProductsComponent } from '.';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AdminComponent, ManageProductsComponent, ManageProductComponent, ManageOrdersComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
