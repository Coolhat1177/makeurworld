import { Component, Injectable} from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ImageStorePage } from '../../pages/image-store/image-store';
import { MusicStorePage } from '../../pages/music-store/music-store';
import { VideoStorePage } from '../../pages/video-store/video-store';


@Component({
  selector: 'storeheader-temp',
  template: `
  
  <ion-row class='storeHeader'>
      <ion-col text-center ><button ion-button clear (tap)="setPhotoRoot()">Photo</button></ion-col>
      <ion-col text-center ><button ion-button clear (tap)="setMusicRoot()">Music</button></ion-col>
      <ion-col text-center ><button ion-button clear (tap)="setVideoRoot()">Video</button></ion-col>
  </ion-row>

            `,
 
})

@Injectable()
export class StoreHeaderPage {
   
  
    constructor(public navCtrl: NavController,private menuCtrl:MenuController){
       
    }



    setPhotoRoot()
    {
        this.navCtrl.setRoot(ImageStorePage);
    }

    setMusicRoot()
    {
        this.navCtrl.setRoot(MusicStorePage);
    }
  

    setVideoRoot(){
        this.navCtrl.setRoot(VideoStorePage);

    }






}