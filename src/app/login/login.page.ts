import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	username = '';
	password = '';
	loginStatus = '';
  constructor(private route: Router) { }

  ngOnInit() {
  }

	login() {
		if(this.username.length === 0 || this.password.length === 0) {
			this.loginStatus = 'No username or password entered!';
			return;
		}
		this.loginStatus = '';
		this.route.navigate(['/tabs/restaurants']);
	}

	register() {
		this.route.navigate(['/register']);
	}
}
