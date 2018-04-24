import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewpagePage } from '../newpage/newpage';
import { Http} from "@angular/http";
import { Headers } from "@angular/http";
import { AlertController } from 'ionic-angular';
import { ZiyaPage } from '../Ziya/Ziya';
import { ContactPage } from '../contact/contact';
import { App } from 'ionic-angular';  
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,  
              private alertCtrl: AlertController,
              public http:Http,
              private app:App,
  
  
  ) {

  }

  
  text:string;
  password:number;
  headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  // 警示框部分函数：
  Error1() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'your login is not exist!',
      buttons: ['disimiss']
    });
    alert.present();
  }
  Error2() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'your login or password is wrong!',
      buttons: ['disimiss']
    });
    alert.present();
  }
  // 点击登录函数：
  login(){
  //   this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',
  //   JSON.stringify({
  //     status:'login',
  //     userID:this.text,
  //     password:this.password
  //   }),{
  //     headers:this.headers
  //   }).subscribe(data=>{
  //     // console.log(data['_body']);
  //       if(data['_body']==0){
  //         this.Error1();
  //       }
  //       else if(data['_body']==2){
  //         this.Error2();
  //       }
  //       else{
  //         // 登陆成功后跳转到商品首页去
  //         this.navCtrl.push(ZiyaPage);
  //       }   
  //   }),err=>{
  //     console.log(err);
  //   };
  // };
  this.navCtrl.push(TabsPage);
  }
  re(){
    this.navCtrl.push(ContactPage);
  }
}
