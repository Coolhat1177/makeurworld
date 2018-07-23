import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Slides, ModalController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { ImageStoreService } from '../../services/ImageStoreService';
import { VideoplayerPage } from '../videoplayer/videoplayer';

@IonicPage()
@Component({
  selector: 'page-video-store',
  templateUrl: 'video-store.html',
})
export class VideoStorePage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;

  SwipedTabsIndicator :any= null;
  tabs:any=[];
  videoArray:any=[];

 
  constructor(public navCtrl: NavController,
              private modelCtrl:ModalController,
              private credit:CreditService,
              private videoS:ImageStoreService) {
  	this.tabs=["Video Play","Favourite"];
  }

  ionViewWillEnter(){
      this.SwipedTabsSlider.slideTo(0,100);
  }
 
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator2");
    this.loadStor();
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
    console.log('ionViewDidLoad VideoStorePage');
  }



  loadStor()
  {

    this.credit.check().then(data=>{

      // console.log(data);

      this.videoS.firstLoadVid(data[0],data[1]).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.videoS.vidArry.push(data[0][key]);
              }
              this.videoArray=this.videoS.getListVid();

            }
      });
    
    });
    
  }


  doInfinite(event)
  {
    this.loadStorMore(event);
    
  }


  loadStorMore(event?)
  {

    this.credit.check().then(data=>{

      // console.log(this.videoS.vidArry[this.videoS.vidArry.length -1]['']);
      let info={'l_t': this.videoS.vidArry[this.videoS.vidArry.length -1]['video_load']}
      this.videoS.moreLoadVid(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.videoS.vidArry.push(data[0][key]);
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



  playVideo(id){


    let video=[];
    this.credit.check().then(data=>{

    
     
      this.videoS.ownVideoCollectio(data[0],data[1]).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                video.push(data[0][key]);
              }

              const profilePick=this.modelCtrl.create(VideoplayerPage,{vidArr:video,
                video_id:id});
             profilePick.present();
             
              

            }

           
      });
    
    });



  }




}
