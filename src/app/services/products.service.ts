import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductI } from 'src/app/interfaces/product';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	constructor(private firestore: AngularFirestore) { }

	getAllProducts() {
		return this.firestore.collection('products')
			.snapshotChanges()
			.pipe(
				map( actions => 
					actions.map( a => {
						const data = a.payload.doc.data() as ProductI;
						const id = a.payload.doc.id;
						return { id, ...data}
					})
				)
			);
	}

}
