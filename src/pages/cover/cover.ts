import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, ModalController } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';

import { AlertServices } from '../../services/AlertServices';

import { ImagePickPage } from '../image-pick/image-pick';

@IonicPage()
@Component({
  selector: 'page-cover',
  templateUrl: 'cover.html',
})
export class CoverPage {
  image:string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private actionSheetController: ActionSheetController,
    public camera: Camera,
   
    private toastCtrl: ToastController,
    private altCtrl:AlertServices,
    private modelCtr:ModalController
    
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoverPage');
    
  }


  choseForBg(){
    // //
    // const actionsheet = this.actionSheetController.create({
    //   title:"Add Photos",
    //   buttons: [
    //     {
    //       text:"From Storage",
    //       handler: ()=> {
    //         const options: CameraOptions={
    //           quality:100,
    //           destinationType:this.camera.DestinationType.DATA_URL,
    //           encodingType:this.camera.EncodingType.JPEG,
    //           sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
    //           mediaType:this.camera.MediaType.PICTURE,
    //           correctOrientation:true,
    //           saveToPhotoAlbum:true
    //         }
    //         let toast = this.toastCtrl.create({
    //           message: 'User was added successfully',
    //           duration: 1000,
    //           position: 'top'
    //         });
          
    //         toast.onDidDismiss(() => {
    //           console.log('Dismissed toast');
    //         });
          
    //         toast.present();
    //         console.log(15);
          
    //         this.camera.getPicture(options);

         
    //       }
    //     },
    //     {
    //       text:"Open Camera",
    //       handler: ()=> {
    //        const options: CameraOptions={
    //          quality:100,
    //          destinationType:this.camera.DestinationType.DATA_URL,
    //          encodingType:this.camera.EncodingType.JPEG,
    //          mediaType:this.camera.MediaType.PICTURE,
    //          correctOrientation:true,
    //          saveToPhotoAlbum:true
    //        }

    //        this.crop.crop("http://m.makeurworld.com/public/images/mw0.jpg", {quality: 75})
    //        .then(
    //          newImage =>  this.altCtrl.errorALert('new image path is: ' + newImage),
    //          error => console.log('Error cropping image', error)
    //        );
    //       //  this.camera.getPicture(options).then(data=>{

    //       //   this.altCtrl.errorALert("ok");
    //       //     this.crop.crop("assets/imgs/ter1.jpg", {quality: 75})
    //       //     .then(
    //       //       newImage => console.log('new image path is: ' + newImage),
    //       //       error => console.error('Error cropping image', error)
    //       //     );
         
    //       //  });;
    //       //  this.image = `data:image/jpeg;base64,${result}` 
    //       //  this.crop.crop(this.image, {quality: 75})
    //       //     .then(
    //       //       newImage => console.log('new image path is: ' + newImage),
    //       //       error => console.error('Error cropping image', error)
    //       //     );
         
          
    //       }
    //     },
    //     {
    //       text:'Cancel',
    //       role:'cancel'

    //     }
    //   ]
    // }) ;
   
    // actionsheet.present();

   
  //o
  }

  choseForPr(){


    const profilePick=this.modelCtr.create(ImagePickPage);
    profilePick.present();


    
  }

}
