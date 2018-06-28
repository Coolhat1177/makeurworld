import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreTabPage } from '../store-tab/store-tab';
import { ViralTabPage } from '../viral-tab/viral-tab';
import { AddaPage } from '../adda/adda';
import { MusicplayerPage } from '../musicplayer/musicplayer';
import { CoverPage } from '../cover/cover';
import { SearchPage } from '../search/search';
import { MessagePage } from '../message/message';
import { RequestPage } from '../request/request';
import { NotificationPage } from '../notification/notification';

/**
 * Generated class for the MainTabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-tab',
  templateUrl: 'main-tab.html',
})
export class MainTabPage {
  cover = CoverPage;
  store = StoreTabPage;
  viral = ViralTabPage;
  adda = AddaPage;
  musicplayer = MusicplayerPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainTabPage');
  }



  goToSearch(){

    this.navCtrl.push(SearchPage)

  }


  goToMessage(){

    this.navCtrl.push(MessagePage);

  }
  

  goToRequest(){

    this.navCtrl.push(RequestPage);

  }


  goToNotification(){

    this.navCtrl.push(NotificationPage);

  }


}
