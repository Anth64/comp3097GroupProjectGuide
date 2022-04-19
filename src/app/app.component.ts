import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Restaurants', url: '/restaurants', icon: 'restaurant' },
    { title: 'Add Restaurant', url: '/add', icon: 'add' },
    { title: 'Map', url: '/map', icon: 'map' },
    { title: 'About', url: '/about', icon: 'warning' },
  ];
  constructor() {}
}
