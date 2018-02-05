import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AddFarmerPage } from '../pages/add-farmer/add-farmer';
import { AddFarmerTwoPage } from '../pages/add-farmer-two/add-farmer-two';
import { AddFarmerThreePage } from '../pages/add-farmer-three/add-farmer-three';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProgressBarComponent,
    AddFarmerPage,
    AddFarmerTwoPage,
    AddFarmerThreePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddFarmerPage,
    AddFarmerTwoPage,
    AddFarmerThreePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
