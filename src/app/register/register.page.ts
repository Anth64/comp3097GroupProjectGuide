import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
	username = '';
	password = '';
	registerStatus = '';
  constructor(private route: Router) { }

  ngOnInit() {
  }

	register() {

	}

	goBack() {
		this.route.navigate(['/']);
	}
}
