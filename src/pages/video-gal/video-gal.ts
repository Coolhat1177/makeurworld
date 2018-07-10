import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';


@IonicPage()
@Component({
  selector: 'page-video-gal',
  templateUrl: 'video-gal.html',
})
export class VideoGalPage {
  vidList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fileOpener: FileOpener) {
    this.vidList = this.navParams.get('arr');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoGalPage');
  }
  
}
