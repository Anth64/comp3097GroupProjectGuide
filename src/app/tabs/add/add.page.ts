import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  name = ''; address = ''; phoneNumber = ''; description = ''; addStatus = ''; rating = '';

  constructor(private route: Router) {}

  ngOnInit() {
  }

  addRestaurant() {
		if(this.name === '' || this.address === '' || this.phoneNumber === '' || this.description === '' || this.rating === '') {
			this.addStatus = 'Fields cannot be empty!';
			return;
		}
		this.addStatus = '';
		let id = Restaurant.list[Restaurant.list.length - 1].id + 1;
		let rest = {
			"id": id, 
			"name": this.name,
			"phone": this.phoneNumber,
			"address": this.address,
			"desc": this.description,
			"rating": this.rating
		}
		Restaurant.list.push(rest);
		this.route.navigate(['/tabs/restaurants']);
  }

  goBack() {
    this.route.navigate(['/tabs/restaurants']);
  }

}
