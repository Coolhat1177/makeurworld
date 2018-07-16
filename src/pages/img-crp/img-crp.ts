import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AngularCropperjsComponent } from 'angular-cropperjs';
import { CameraOptions, Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-img-crp',
  templateUrl: 'img-crp.html',
})
export class ImgCrpPage {

  @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;
  cropperOptions: any;
  croppedImage = null;
 
  myImage :string= null;
  scaleValX = 1;
  scaleValY = 1;
 
  constructor(public navCtrl: NavController, private camera: Camera) {
    this.cropperOptions = {
      dragMode: 'crop',
      aspectRatio: 2,
      autoCrop: true,
      movable: true,
      zoomable: true,
      scalable: true,
      autoCropArea: 0.8,
    };
  }
 
  // captureImage() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     sourceType: this.camera.PictureSourceType.CAMERA
  //   }
 
  //   this.camera.getPicture(options).then((imageData) => {
  //     this.myImage = 'data:image/jpeg;base64,' + "https://jpeg.org/images/jpeg-home.jpg ";
  //   });
  // }
  captureImage(){
  this.myImage="../assets/imgs/ter1.jpg";
  }
  reset() {
    this.angularCropper.cropper.reset();
  }
 
  clear() {
    this.angularCropper.cropper.clear();
  }
 
  rotate() {
    this.angularCropper.cropper.rotate(90);
  }
 
  zoom(zoomIn: boolean) {
    let factor = zoomIn ? 0.1 : -0.1;
    this.angularCropper.cropper.zoom(factor);
  }
 
  scaleX() {
    this.scaleValX = this.scaleValX * -1;
    this.angularCropper.cropper.scaleX(this.scaleValX);
  }
 
  scaleY() {
    this.scaleValY = this.scaleValY * -1;
    this.angularCropper.cropper.scaleY(this.scaleValY);
  }
 
  move(x, y) {
    this.angularCropper.cropper.move(x, y);
  }
 
  save() {
    let croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
    this.croppedImage = croppedImgB64String;
  }
  

}
