import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
	apiLoaded: Observable<boolean>;
	options: google.maps.MapOptions = {
		center: {lat: 43.651070, lng: -79.347015 },
		zoom: 12
	};
  constructor(httpClient: HttpClient) {
		this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBHiqHhbCVYMQqTxw6UVpUvh-HWzzm1cGo', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
	}

	public static addMarker(address) {

	}

	public static removeMarker(address) {

	}

  ngOnInit() {
  }
}
