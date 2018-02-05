import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddFarmerTwoPage } from '../add-farmer-two/add-farmer-two';

/**
 * Generated class for the AddFarmerThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-farmer-three',
  templateUrl: 'add-farmer-three.html',
})
export class AddFarmerThreePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFarmerThreePage');
  }

  addFarmerSecondpage(){
    this.navCtrl.push(AddFarmerTwoPage);
  }

}
