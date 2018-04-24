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
  list=[{title:'资产包转让',icon:"assets/imgs/xin1.png"},
  {title:'债权转让',icon:"assets/imgs/xin1.png"},
  {title:'固产转让',icon:"assets/imgs/xin2.png"},
  {title:'典当担保',icon:"assets/imgs/xin3.png"},
  {title:'融资借贷',icon:"assets/imgs/xin4.png"},
  {title:'悬赏信息',icon:"assets/imgs/xin5.png"},
  {title:'商业保理',icon:"assets/imgs/xin6.png"},
  {title:'尽职调查',icon:"assets/imgs/xin7.png"},
  {title:'资产求购',icon:"assets/imgs/xin8.png"},
  {title:'委外催收',icon:"assets/imgs/xin3.png"},
  {title:'法律服务',icon:"assets/imgs/xin2.png"},
 ];


  goto(){
    let profileModal = this.modalCtrl.create(Release2Page);
    profileModal.present();
  }
}

