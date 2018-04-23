import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Release2Page } from '../release2/release2';
import { ModalController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-release',
  templateUrl: 'release.html'
})
export class ReleasePage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {

  }
  list=['资产包转让','债权转让','固产转让','典当担保','融资借贷','悬赏信息','商业保理','尽职调查','资产求购','委外催收','法律服务'];

  goto(){
    let profileModal = this.modalCtrl.create(Release2Page);
    profileModal.present();
  }
}

