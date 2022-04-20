import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
	id: any;
	rest: any;
	editStatus: any
  constructor(private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
		this.id = this.activeRoute.snapshot.paramMap.get('id');
		this.rest = Restaurant.list[this.id];
		console.log(this.rest);
  }

	editRestaurant() {
		Restaurant.list[this.id] = this.rest;
		for(const e in this.rest) {
			if(this.rest[e] === '') {
				this.editStatus = 'Fields cannot be empty!';
				return;
			}
		}
		this.route.navigate(['/tabs/restaurants']);
	}

	goBack() {
		this.route.navigate(['/tabs/restaurants']);
	}
}
