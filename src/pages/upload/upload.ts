import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { ImgGalPage } from '../img-gal/img-gal';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { VideoGalPage } from '../video-gal/video-gal';
import { FileOpener } from '@ionic-native/file-opener';
import { ImgCrpPage } from '../img-crp/img-crp';


@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  image:string;
  base64Image:string;
  arr:any=[];
  arr1:any=[];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private actionSheetController: ActionSheetController,
     public camera: Camera
              ,private imagePicker:ImagePicker,
              private fileOpener: FileOpener) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }
  chooseImg(){
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
            this.imagePicker.getPictures(options).then((imageData) => {
              for (var i = 0; i < imageData.length; i++) {
                this.base64Image = imageData[i];
                this.arr.push(this.base64Image);
                this.arr.reverse();
            }
                  }, (err) => { console.log(err)});
              this.navCtrl.push(ImgGalPage,{ arr :this.arr}); 
          }
        },
        {
          text:"From Camera",
          handler: ()=> {
           const options: CameraOptions={
             quality:100,
             destinationType:this.camera.DestinationType.DATA_URL,
             encodingType:this.camera.EncodingType.JPEG,
             mediaType:this.camera.MediaType.PICTURE,
             correctOrientation:true,
             saveToPhotoAlbum:true
           }
         
                this.camera.getPicture(options).then((imageData)=>{
                  this.base64Image = "data:image/jpeg;base64,"+imageData;
                  this.arr.push(this.base64Image);
                  this.arr.reverse();
                  },(err)=>{
                      console.log(err);
                  });
                  console.log("check ok");
                  this.navCtrl.push(ImgGalPage,{ arr :this.arr}); 
                }
        },
        {
          text:'Cancel',
          role:'cancel'

        }
      ]
    }) ;
   
    actionsheet.present();
    // this.navCtrl.push(ImgGalPage,{ arr :this.arr});  
  }
  chooseVid(){
    const actionsheet = this.actionSheetController.create({
      title:"Add Video",
      buttons: [
        {
          text:"From Storage",
          handler: ()=> {
            const options: CameraOptions={
              destinationType:this.camera.DestinationType.DATA_URL,
              encodingType:this.camera.EncodingType.JPEG,
              sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
              mediaType:this.camera.MediaType.VIDEO,
              saveToPhotoAlbum:true
            }
            this.camera.getPicture(options).then((videoData) => {
              console.log("imageData"+videoData);
              this.base64Image =videoData;
              this.arr1.push(this.base64Image);
                this.arr1.reverse();
                  }, (err) => { console.log(err)});
              this.navCtrl.push(VideoGalPage,{ arr :this.arr1}); 
          }
        },
        {
          text:"From Camera",
          handler: ()=> {
           const options: CameraOptions={
             quality:100,
             destinationType:this.camera.DestinationType.DATA_URL,
             //encodingType:this.camera.EncodingType.JPEG,
             mediaType:this.camera.MediaType.VIDEO,
             //correctOrientation:true,
             saveToPhotoAlbum:true
           }
         
                this.camera.getPicture(options).then((imageData)=>{
                  console.log("imageData"+imageData);
                  this.base64Image = "data:image/jpeg;base64,"+imageData;
                  this.arr1.push(this.base64Image);
                  this.arr1.reverse();
                  },(err)=>{
                      console.log(err);
                  });
                  this.navCtrl.push(VideoGalPage,{ arr :this.arr1}); 
                }
        },
        {
          text:'Cancel',
          role:'cancel'

        }
      ]
    }) ;
   
    actionsheet.present();
    // this.navCtrl.push(ImgGalPage,{ arr :this.arr});  
  }


  audioChoose(){
    this.fileOpener.open('path/to/file.pdf', 'application/pdf')
  .then(() => console.log('File is opened'))
  .catch(e => console.log('Error opening file', e));
  }
  pushCropPage(){
  this.navCtrl.push(ImgCrpPage); 
  }
}
