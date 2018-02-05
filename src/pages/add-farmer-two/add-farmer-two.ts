import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AddFarmerPage } from '../add-farmer/add-farmer';
import { AddFarmerThreePage } from '../add-farmer-three/add-farmer-three';

/**
 * Generated class for the AddFarmerTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-farmer-two',
  templateUrl: 'add-farmer-two.html',
})
export class AddFarmerTwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFarmerTwoPage');
  }

  addFarmerFirstpage(){
    this.navCtrl.push(AddFarmerPage);
  }

  addFarmerThirdpage(){
    this.navCtrl.push(AddFarmerThreePage);
  }

}
