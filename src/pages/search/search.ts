import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides;

  SwipedTabsIndicator :any= null;
  tabs:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabs=["People","Adda"];
  }
  ionViewWillEnter(){
    this.SwipedTabsSlider.slideTo(0,100);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator3");
  }

  selectTab(index) {    
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
  	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
  	{
  		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  	}
    
    }

  animateIndicator($event) {
  	if(this.SwipedTabsIndicator)
   	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }

  onInput(event)
  {
    console.log("ok");
  }


  onCancel(event)
  {
      console.log("ok");
  }

}
