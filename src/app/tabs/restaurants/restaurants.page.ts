import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})

export class RestaurantsPage implements OnInit {
	restaurantList = [];
  constructor(private route: Router) { }

  ngOnInit() {
	}

	delete(restId) {
		for(let i = 0; i < Restaurant.list.length; i++) {
			if(Restaurant.list[i].id === restId) {
				Restaurant.list.splice(i, 1);
				break;
			}
		}

		// Re-base ids
		for(let i = 0; i < Restaurant.list.length; i++) {
			Restaurant.list[i].id = i;
		}
	}

	getList() {
		return Restaurant.list;
	}

	edit(restId) {
		this.route.navigate(['/tabs/edit/' + restId]);
	}
}
