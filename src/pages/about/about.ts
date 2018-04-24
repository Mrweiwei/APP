import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from 'ionic-angular';  
import{HomePage}from'../home/home';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
    private app:App,
  ) {

  }
exit(){
  this.app.getRootNavs()[0].setRoot(HomePage);
}
}
