import { Component, Injectable, ViewChild } from '@angular/core';
import { Platform, NavController, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { ProfileviewPage } from '../pages/profileview/profileview';
import { ProfileimagePage } from '../pages/profileimage/profileimage';
import { ProfilmusicPage } from '../pages/profilmusic/profilmusic';
import { ProfilevideoPage } from '../pages/profilevideo/profilevideo';
import { FreindsPage } from '../pages/freinds/freinds';
import { SettingPage } from '../pages/setting/setting';
import { MainTabPage } from '../pages/main-tab/main-tab';
import { ImageStorePage } from '../pages/image-store/image-store';
import { MusicStorePage } from '../pages/music-store/music-store';


// @Injectable()
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage=MainTabPage;


  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen,private menuCtrl:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  loadSetting(){
    // this.navCtrl.push(SettingPage);
    this.nav.push(SettingPage);
    this.menuCtrl.close();

  }

  loadFriends(){

    this.nav.push(FreindsPage);
    this.menuCtrl.close();

  }



}

