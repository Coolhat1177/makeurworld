import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-img-gal',
  templateUrl: 'img-gal.html',
})
export class ImgGalPage {
  imgList :any; 
  constructor(public navCtrl: NavController, public navParams: NavParams){
   this.imgList = this.navParams.get('arr'); 
   //for(let i=0;i<imgList.length();i++) console.log(imgList[i]);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImgGalPage');
  }
   deletePhoto(index){
   this.imgList.splice(index, 1);
 }
}

