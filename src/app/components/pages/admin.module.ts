import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { ProductComponent } from './components/products/product/product.component';


@NgModule({
  declarations: [
    AdminComponent, 
    ListProductComponent, 
    ProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
