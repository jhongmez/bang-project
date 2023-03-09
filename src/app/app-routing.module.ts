import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ 
		path: 'inicio', 
		loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) 
	},
	{ 
		path: 'inicio-sesion', 
		loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) 
	},
	{ 
		path: 'administration', 
		loadChildren: () => import('./components/pages/admin.module').then(m => m.AdminModule) 
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
