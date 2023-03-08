import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsService } from '../../../../../services/products.service';
import { Observable } from 'rxjs';
import { ProductI } from '../../../../../interfaces/product';

@Component({
	selector: 'app-list-product',
	templateUrl: './list-product.component.html',
	styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
	
	products$: Observable<ProductI[]>;

	constructor(
		private firestore: AngularFirestore,
		private _productSvc: ProductsService
	) { }

	ngOnInit(): void {
		this.getAllProducts();
	}
	
	getAllProducts() {
		this.products$ = this._productSvc.getAllProducts();
	}

}
