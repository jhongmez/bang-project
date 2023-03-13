import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserI } from '../../../interfaces/user';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public formLogin!: FormGroup;

	constructor(
		private authSvc: 		AuthService,
		private formBuilder: FormBuilder,
		private router: 		Router
	) { }

	ngOnInit(): void {
		this.builderForm();
	}

	builderForm() {
		this.formLogin = this.formBuilder.group({
			email: 		[null, [Validators.required]],
			password: 	[null, [Validators.required]]
		})
	}

	onLogin() {
		if(this.formLogin.invalid) {
			this.formLogin.markAllAsTouched();
		} else {
			const userData: UserI = {
				"email": this.formLogin.get('email')?.value,
				"password": this.formLogin.get('password')?.value,
			}
			this.authSvc.login(userData)
				.then((response) => {
					console.log('Successfully', response);
					this.router.navigateByUrl('/administration/products/list-products')
				})
				.catch(err => console.log(err));
		}
	}

}
