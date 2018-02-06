import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FarmGroupPage }from '../farm-group/farm-group';
import { FarmersListPage } from '../farmers-list/farmers-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

 

  viewFarmGroup(){
    this.navCtrl.push(FarmGroupPage);
  }

  viewFarmerList(){
    this.navCtrl.push(FarmersListPage);
  }

}
