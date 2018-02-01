import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddFarmerPage } from '../add-farmer/add-farmer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addFarmer(){
    this.navCtrl.push(AddFarmerPage);
  }

}
