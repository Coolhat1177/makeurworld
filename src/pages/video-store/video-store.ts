import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController,Slides, ModalController, PopoverController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { ImageStoreService } from '../../services/ImageStoreService';
import { VideoplayerPage } from '../videoplayer/videoplayer';
import { StoreHeaderPage } from '../../component/header/storeheader';
import { HeaderPage } from '../../component/header/header';
import { ImageOptionPop } from '../popover/imagePopover';
import { ViralServices } from '../../services/ViralServices';
import { VideosuggestionPage } from '../videosuggestion/videosuggestion';
import { VideofavPage } from '../videofav/videofav';
import { FavouritePage } from '../favourite/favourite';

@IonicPage()
@Component({
  selector: 'page-video-store',
  templateUrl: 'video-store.html',
})
export class VideoStorePage {
 
  @ViewChild("bgselector") bgselector:ElementRef;
  selecEle:any;

 
  videoArray:any=[];
  favArray:any=[];

 
  constructor(public navCtrl: NavController,
              private modelCtrl:ModalController,
              private credit:CreditService,
              private videoS:ImageStoreService,
              private popCtrl:PopoverController,
              private iServices:ViralServices,) {
  
  }

  
  ionViewDidLoad() {
 
    this.loadStor();
  }

  loadVideoP(){
    this.navCtrl.setRoot(VideoStorePage);

  }


  loadFavouriteP()
  {
    this.navCtrl.setRoot(FavouritePage);

  }



  swipeEvent(ev)
  {
   
    if(ev.direction==2)
    {
     
     this.loadFavouriteP();
     
    }

   

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
                this.videoArray.push(data[0][key]);
              }
            

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
      console.log()

      // console.log(this.videoS.vidArry[this.videoS.vidArry.length -1]['']);
      let info={'l_t': this.videoArray[this.videoArray.length -1]['video_load']}
      this.videoS.moreLoadVid(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.videoArray.push(data[0][key]);
              }
              // this.videoArray=this.imgStore.getList();

            }

            if(event)
            {
              event.complete();
            }
      });
    
    });
    
  }



  playVideo(i){


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
                video:this.videoArray[i],add_status:false,delet_status:true});
             profilePick.present();
             profilePick.onDidDismiss((data)=>{
              console.log()
                if (data !=null && data['data'] ){
                  this.videoArray.splice(i,i+1);
                  
                }
              
                   
            });
        

             
              

            }

           
      });
    
    });



  }


  // press code ........................................................................................



  selectMe(event,i){
    console.log(this.videoArray[i]);
    let bgS=this.bgselector.nativeElement;
    bgS.classList.add("selectorBg");
   this.selecEle=event.target || event.srcElement || event.currentTarget;
   this.selecEle.classList.add("selectElem");


      this.credit.check().then(data=>{
               
                let info={
                  'video_id':this.videoArray[i]['video_id'],
                
                }
              
                this.iServices.checkStatusV(data[0],data[1],info).subscribe(data=>{
                  if(data['status'])
                  {
                    
                        const pop=this.popCtrl.create(ImageOptionPop,{
                          media_id:this.videoArray[i]['video_id'],
                          add_status:false,
                          delete_status:true,
                          'activity_id':this.videoArray[i]['activity_id'],
                          suggestStatus:this.vrialVidSug,
                          // addStatus:this.viralAddType,
                          moreOption:this.viralMoreOption,
                          full_name:this.videoArray[i]['full_name'],
                          pic_url:this.videoArray[i]['pic_url'],
                          user_id:this.videoArray[i]['user_id'],
                         
                          deleteFn:this.DeleteFromStore,
                        });
                        pop.present({ev:event});
                        pop.onDidDismiss((data)=>{
                          console.log()
                            if (data !=null && data['data'] ){
                              this.videoArray.splice(i,i+1);
                              
                            }
                            this.removeSelect();
                               
                        });
                    

                  }
                  

                
            });

                
       });
  


  


  }


  vrialVidSug(video_id,modelCtrl){
   
    const load=modelCtrl.create(VideosuggestionPage,{video_id:video_id});
    load.present();
    
  
    
  }



  removeSelect(){
    let bgS=this.bgselector.nativeElement;
    bgS.classList.remove("selectorBg");
    this.selecEle.classList.remove("selectElem");
  }



  DeleteFromStore(video_id,credit,service,alertBox):Promise<boolean>{
  
    console.log(video_id);

    return new Promise(resolve=>{
      
      
     
      let alert = alertBox.create({
        title: 'Delete',
        message: 'Do you want to delete this video from Store',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
             resolve(false);
            }
           
          },
          {
            text: 'Ok',
            handler: () => {
              credit.check().then(data=>{
  
                                                  
                let info={'video_id': video_id}
                
                service.deleteVideo(data[0],data[1],info).subscribe(data=>{
                      if(data['status'])
                      {
                        
                        
                        resolve(true);
                       
                        
                      }
                     
                    
          
                      
                });
            });
              
            }
          }
        ]
      });
      alert.present();

    });
  }



  viralMoreOption(video_id,actionSheet,modelCtrl,fnc,credit,viralS,alertM){

    const actSheet=actionSheet.create({
     
      buttons:[
        {
          text:"Add to Favourite",
          handler:()=>{

            const profilePick=modelCtrl.create(VideofavPage,{'video_id':video_id});
            profilePick.present();
            profilePick.onDidDismiss(()=>{
        
             
              
            });
            
          }
        },
     
        {
          text:'Cancel',
          role:'cancel'
        }
      ]
    });

    actSheet.present();


  }








}
