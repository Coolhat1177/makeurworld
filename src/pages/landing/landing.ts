import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';



@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  

  @ViewChild(Slides)slides:Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.slides.autoplayDisableOnInteraction = false;
}


slideChanged(){
  let currentIndex = this.slides.getActiveIndex();
    if(currentIndex==4){
      this.slides.stopAutoplay();
      this.slides.lockSwipeToNext(true);
    }
    else if(currentIndex==1)
    {
      this.slides.startAutoplay();
      this.slides.lockSwipeToNext(false);
      this.slides.lockSwipeToPrev(true);
    }
    else{
      this.slides.startAutoplay();
      this.slides.lockSwipeToNext(false);
      this.slides.lockSwipeToPrev(false);
    }
}


goToSignIn(){
    this.navCtrl.push(SignInPage);
}


 

}
