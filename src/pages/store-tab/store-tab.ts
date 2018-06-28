import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageStorePage } from '../image-store/image-store';
import { MusicStorePage } from '../music-store/music-store';
import { VideoStorePage } from '../video-store/video-store';


@IonicPage()
@Component({
  selector: 'page-store-tab',
  templateUrl: 'store-tab.html',
})
export class StoreTabPage {

  imageStore=ImageStorePage;
  musicStore=MusicStorePage;
  videoStore=VideoStorePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreTabPage');
  }

}
