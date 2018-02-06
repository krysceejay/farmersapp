import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddFarmerPage } from '../add-farmer/add-farmer';

/**
 * Generated class for the FarmersListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-farmers-list',
  templateUrl: 'farmers-list.html',
})
export class FarmersListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmersListPage');
  }

  addFarmer(){
    this.navCtrl.push(AddFarmerPage);
  }

}
