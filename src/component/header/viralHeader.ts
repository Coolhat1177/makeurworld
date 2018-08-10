import { Component, Injectable} from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { ViralVideoPage } from '../../pages/viral-video/viral-video';
import { ViralMusicPage } from '../../pages/viral-music/viral-music';
import { ViralImagePage } from '../../pages/viral-image/viral-image';


@Component({
  selector: 'viralheader-temp',
  template: `
  
  <ion-row class='storeHeader'>
      <ion-col text-center ><button ion-button clear (tap)="setViralPhotoRoot()">Photo</button></ion-col>
      <ion-col text-center ><button ion-button clear (tap)="setViralMusicRoot()">Music</button></ion-col>
      <ion-col text-center ><button ion-button clear (tap)="setViralVideoRoot()">Video</button></ion-col>
  </ion-row>

            `,
 
})

@Injectable()
export class ViralHeaderPage {
   
  
    constructor(public navCtrl: NavController,private menuCtrl:MenuController){
       
    }



    setViralPhotoRoot()
    {
        this.navCtrl.setRoot(ViralImagePage);
    }

    setViralMusicRoot()
    {
        this.navCtrl.setRoot(ViralMusicPage);
    }
  

    setViralVideoRoot(){
        this.navCtrl.setRoot(ViralVideoPage);

    }






}