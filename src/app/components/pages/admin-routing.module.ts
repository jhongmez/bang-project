import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';

const routes: Routes = [
	{ 
		path: '', 
		component: AdminComponent 
	},
	{
		path: 'products/list-products',
		component: ListProductComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
