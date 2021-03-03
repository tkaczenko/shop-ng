import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessOrderComponent } from '.';

const routes: Routes = [
  {
    path: '',
    component: ProcessOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
