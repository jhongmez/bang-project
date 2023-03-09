import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { UserI } from '../interfaces/user';


@Injectable({
	providedIn: 'root'
})
export class AuthService {
	
	public userData$!: 	any;
	private filePath!: 	string;

	constructor(
		private fireAuth: AngularFireAuth
	) {
		this.userData$ = fireAuth.authState;
	}

	login(user: UserI) {
		const {email, password} = user;
		return this.fireAuth.signInWithEmailAndPassword(email, password);
	}

	logout() {
		this.fireAuth.signOut();
	}
}
