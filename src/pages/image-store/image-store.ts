import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Slides } from 'ionic-angular';
import { AlertServices } from '../../services/AlertServices';
import { CreditService } from '../../services/CreditService';
import { ImageStoreService } from '../../services/ImageStoreService';

@IonicPage()
@Component({
  selector: 'page-image-store',
  templateUrl: 'image-store.html',
})
export class ImageStorePage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;

  SwipedTabsIndicator :any= null;
  tabs:any=[];
  imageArray:any=[];

 
  constructor(public navCtrl: NavController,
            private alertCtrl:AlertServices, 
            private credit:CreditService,
            private imgStore:ImageStoreService
              ) {
  	this.tabs=["Photo","Canvas"];
  }
  ionViewWillEnter(){
    this.SwipedTabsSlider.slideTo(0,100);
}
  
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageStorePage');
    this.loadStor();
  }


  loadStor()
  {

    this.credit.check().then(data=>{

      // console.log(data);

      this.imgStore.firstLoad(data[0],data[1]).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.imgStore.addToList(data[0][key]);
              }
              this.imageArray=this.imgStore.getList();

            }
      });
    
    });
    
  }




}
