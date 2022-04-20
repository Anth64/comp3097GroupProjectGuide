import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from  '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	username = '';
	password = '';
	registerStatus = '';
  constructor(private nativeStorage: NativeStorage, private route: Router, public toastController: ToastController) { }

  ngOnInit() {
  }
	/*
	usernameExists(uname) {
		let found = false;
		this.nativeStorage.getItem(uname)
			.then(
				data => { found = true; },
				error => { found = false;}
			);
		return found;
	}
	*/

	async register() {
		if(this.username.length === 0) {
			this.registerStatus = 'Username field must be filled in. ';
		}
		/*
		else if(this.usernameExists(this.username)) {
			this.registerStatus = 'Username already taken! ';
			return;
		}
		*/
		else  {
			this.registerStatus = '';
		}

		if(this.password.length === 0) {
			this.registerStatus += 'Password must not be empty';
		}

		if(this.username.length === 0 || this.password.length === 0) {
			return;
		}

		// Valid input if here is reached.
		const toastRegistered = await this.toastController.create({
			message: 'Succesfully registered!',
			color: 'success',
			position: 'middle',
			duration: 5000
		});

		toastRegistered.present();

		this.route.navigate(['/']);
	}

	goBack() {
		this.route.navigate(['/']);
	}

}
