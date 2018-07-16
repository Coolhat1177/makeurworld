
import { Component,ViewChild } from '@angular/core';
import { NavController,IonicPage,Slides } from 'ionic-angular';
import { ImageStoreService } from '../../services/ImageStoreService';
import { CreditService } from '../../services/CreditService';
@IonicPage()
@Component({
  selector: 'page-music-store',
  templateUrl: 'music-store.html'
})
export class MusicStorePage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
  musicArray:any=[];

  SwipedTabsIndicator :any= null;
  tabs:any=[];

 
  constructor(public navCtrl: NavController,
              private storeS:ImageStoreService,
              private credit:CreditService) {
    this.tabs=["Music","Playlist"];
    this.loadMusic();
  }
  ionViewWillEnter(){
    this.SwipedTabsSlider.slideTo(0,100);
}

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator1");
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
  }


  loadMusic(){


    this.credit.check().then(data=>{

      // console.log(data);

      this.storeS.firstLoadM(data[0],data[1]).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {

                data[0][key]['thmb_src']="http://media.makeurworld.com/store/music_th/81652736758ecda33a6116.jpg";
                this.storeS.addToList(data[0][key]);
              
              }
            //  console.log(this.musicArray);
             this.musicArray=this.storeS.getList();

            }
      });
    
    });

  }


  doInfinite(event){
    this.loadStorMore(event);
  }

  loadStorMore(event?)
  {
    console.log(this.storeS.getList());
    this.credit.check().then(data=>{

    
      let info={'l_t':this.storeS.last_timeM()}
      this.storeS.moreLoadM(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.storeS.addToList(data[0][key]);
              }
              // this.imageArray=this.imgStore.getList();

            }

            if(event)
            {
              event.complete();
            }
      });
    
    });
    
  }

}
