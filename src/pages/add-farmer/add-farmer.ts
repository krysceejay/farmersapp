import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddFarmerTwoPage } from '../add-farmer-two/add-farmer-two';

/**
 * Generated class for the AddFarmerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-farmer',
  templateUrl: 'add-farmer.html',
})
export class AddFarmerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFarmerPage');
  }

  addFarmerSecondpage(){
    this.navCtrl.push(AddFarmerTwoPage);
  }

}
