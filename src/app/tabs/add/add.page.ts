import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  name = ''; address = ''; phoneNumber = ''; description = '';

  constructor(private route: Router) {}

  ngOnInit() {
  }

  addRestaurant() {

  }

  goBack() {
    this.route.navigate(['/tabs/restaurants']);
  }

}
