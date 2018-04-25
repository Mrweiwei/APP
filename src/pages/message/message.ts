import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Message1Page } from '../message1/message1';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  constructor(public modalCtrl:ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
    console.log(this.list[0].title);
  }
list=[{title:'马云',icon:'assets/imgs/18.jpg',ig:'五星级酒店不能去抢麻辣烫的生意，要有自己的定位。',time:'10:11'},
{title:'马化腾',icon:'assets/imgs/19.jpg',ig:'再小的网店，做的都是全中国的生意。',time:'11:11'},
{title:'雷军',icon:'assets/imgs/20.jpg',ig:'买家不是职业采购，买家的判断来源于生活经验，而不是工程师学历。',time:'12:41'},
{title:'刘强东',icon:'assets/imgs/21.jpg',ig:'页面漂亮的目的不是让买家爽心悦目，是为了让消费者信任你。',time:'13:01'},
{title:'张朝阳',icon:'assets/imgs/22.jpg',ig:'每一单都要咨询客服才能成交，你得多失败啊。',time:'18:35'}];


goto(){
  let profileModal = this.modalCtrl.create(Message1Page,
    {title:this.list[1].title},
  
  );

    profileModal.present();
  }
}