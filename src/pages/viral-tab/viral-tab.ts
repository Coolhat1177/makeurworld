import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViralImagePage } from '../viral-image/viral-image';
import { ViralMusicPage } from '../viral-music/viral-music';
import { ViralVideoPage } from '../viral-video/viral-video';

@IonicPage()
@Component({
  selector: 'page-viral-tab',
  templateUrl: 'viral-tab.html',
})
export class ViralTabPage {

  viralImage = ViralImagePage;
  viralMusic = ViralMusicPage;
  viralVideo = ViralVideoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViralTabPage');
  }

}
