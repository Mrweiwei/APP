import { Component } from '@angular/core';
import {ViewController,IonicPage, NavController, NavParams } from 'ionic-angular';
import  {Release0Page} from '../release0/release0'
/**
 * Generated class for the Release2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-release2',
  templateUrl: 'release2.html',
})
export class Release2Page {

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Release2Page');
  }
  back(){
    this.viewCtrl.dismiss();
  }
  re(){
    this.navCtrl.push(Release0Page);
  }
}
