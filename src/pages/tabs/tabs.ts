import { Component } from '@angular/core';
import { NewpagePage } from '../../pages/newpage/newpage';
import { ZiyaPage } from '../Ziya/Ziya';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ReleasePage } from '../release/release';
import { MessagePage } from '../message/message';
import { Release0Page } from '../release0/release0';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ReleasePage;
  tab3Root=ZiyaPage;
  tab4Root=AboutPage;
  tab5Root=MessagePage;

  constructor() {

  }
}
