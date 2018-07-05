import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-cover',
  templateUrl: 'cover.html',
})
export class CoverPage {
  image:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private actionSheetController: ActionSheetController,public camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoverPage');
  }


  choseForBg(){
    //
    const actionsheet = this.actionSheetController.create({
      title:"Add Photos",
      buttons: [
        {
          text:"From Storage",
          handler: ()=> {
            const options: CameraOptions={
              quality:100,
              destinationType:this.camera.DestinationType.DATA_URL,
              encodingType:this.camera.EncodingType.JPEG,
              sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
              mediaType:this.camera.MediaType.PICTURE,
              correctOrientation:true,
              saveToPhotoAlbum:true
            }
            const result = this.camera.getPicture(options);
            this.image = `data:image/jpeg;base64,${result}`
          }
        },
        {
          text:"Open Camera",
          handler: ()=> {
           const options: CameraOptions={
             quality:100,
             destinationType:this.camera.DestinationType.DATA_URL,
             encodingType:this.camera.EncodingType.JPEG,
             mediaType:this.camera.MediaType.PICTURE,
             correctOrientation:true,
             saveToPhotoAlbum:true
           }
           const result = this.camera.getPicture(options);
           this.image = `data:image/jpeg;base64,${result}`
          }
        },
        {
          text:'Cancel',
          role:'cancel'

        }
      ]
    }) ;
   
    actionsheet.present();
  }

  choseForPr(){
    
  }

}
