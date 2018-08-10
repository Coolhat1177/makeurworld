import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddaPage } from '../adda/adda';
import { MusicplayerPage } from '../musicplayer/musicplayer';
import { CoverPage } from '../cover/cover';

import { UploadPage } from '../upload/upload';
import { ImageStorePage } from '../image-store/image-store';
import { ViralImagePage } from '../viral-image/viral-image';


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
  store = ImageStorePage;
  viral = ViralImagePage;
  adda = AddaPage;
  upload=UploadPage;
  musicplayer = MusicplayerPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainTabPage');
  }





}
