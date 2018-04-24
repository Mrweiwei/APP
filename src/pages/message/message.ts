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

  }
list=[{title:'马云',icon:'assets/imgs/18.jpg',ig:'assets/imgs/2.jpg',time:'10:11'},
{title:'马化腾',icon:'assets/imgs/19.jpg',ig:'assets/imgs/2.jpg',time:'11:11'},
{title:'雷军',icon:'assets/imgs/20.jpg',ig:'assets/imgs/2.jpg',time:'12:41'},
{title:'刘强东',icon:'assets/imgs/21.jpg',ig:'assets/imgs/2.jpg',time:'13:01'},
{title:'张朝阳',icon:'assets/imgs/22.jpg',ig:'assets/imgs/2.jpg',time:'18:35'}];


goto(){
  let profileModal = this.modalCtrl.create(Message1Page);

    profileModal.present();
  
  }
}