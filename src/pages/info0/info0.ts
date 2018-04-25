import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage} from'../info/info';
import { ModalController} from 'ionic-angular';

/**
 * Generated class for the Info0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info0',
  templateUrl: 'info0.html',
})
export class Info0Page {
  public typeTxt:any;
  constructor(public modalCtrl:ModalController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
       Object.keys(elements).map((key) => {
          elements[key].style.display = 'none';
         });
       }   
  }
  //ionic当退出页面的时候触发的方法
ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
	   Object.keys(elements).map((key) => {
    		elements[key].style.display = 'flex';
	});
    }
}
  switchType() {
    console.log(this.typeTxt);
  }
  go(){
    let profileModal = this.modalCtrl.create(InfoPage);
    profileModal.present();
  }
  
}
