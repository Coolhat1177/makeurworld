import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ActionSheetController, AlertController, PopoverController } from 'ionic-angular';
import { FavsuggestionPage } from '../favsuggestion/favsuggestion';


import { FavService } from '../../services/FavServices';
import { CreditService } from '../../services/CreditService';
import { AddvideoPage } from '../addvideo/addvideo';
import { VideoplayerPage } from '../videoplayer/videoplayer';
import { ViralServices } from '../../services/ViralServices';
import { ImageOptionPop } from '../popover/imagePopover';
import { VideofavPage } from '../videofav/videofav';
import { VideosuggestionPage } from '../videosuggestion/videosuggestion';



@IonicPage()
@Component({
  selector: 'page-favviewer',
  templateUrl: 'favviewer.html',
})
export class FavviewerPage {
  fav:any={};
  reactStatus:any={ov_rate:0,
    rate_by:0,
    activity_id:'',
    t_rev:0 };
    add_status:boolean=false;
    delete_status:boolean=false;
  favVideo:any=[];
  allowUpload:boolean=false;

    fix:boolean=false;
    @ViewChild('canvasHeader') canvasHeader:ElementRef;
    @ViewChild("bgselector") bgselector:ElementRef;
    selecEle:any;

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
                private viewCtrl:ViewController,
                private modelCtr:ModalController,
                private actionSheet:ActionSheetController,
                private credit:CreditService,
                private favService:FavService,
                private alertBox:AlertController,
                private iService:ViralServices,
                private popCtrl:PopoverController
               ) {
                
                 this.fav=this.navParams.data['fav'];
                 this.reactStatus['activity_id']=this.fav['activity_id'];
                 this.add_status=this.navParams.data['add_status'];
                 this.delete_status=this.navParams.data['delete_status'];
                 if(parseInt(this.fav['type'])==0 || parseInt(this.fav['type'])==4){
                  this.allowUpload=true;
                  this.add_status=false;
                  this.delete_status=true;
  
                }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavviewerPage');
    this.loadFavVideo();
  }

  onScroll(event){
    let elem=this.canvasHeader.nativeElement;
    if(event.scrollTop>180){
        elem.classList.add("fix");
        this.fix=true;
    }
    else{
      elem.classList.remove("fix");
      this.fix=false;
    }

  }


 


  suggestFriend(){

    const load=this.modelCtr.create(FavsuggestionPage,{'fav_id':this.fav['fav_id']});
    load.present();

  }


  addType(){

    const actSheet=this.actionSheet.create({
   
      buttons:[
        {
          text:"Viral",
          handler:()=>{
            console.log(15);
          }
        },
        {
          text:'Private',
          handler:()=>{

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

  moreOption(){

    const actSheet=this.actionSheet.create({
     
      buttons:[
      
        {
          text:'Report',
          handler:()=>{

          }
        },
        {
          text:'Cancel',
          role:'cancel'
        }
      ]
    });


    const actSheet1=this.actionSheet.create({
     
      buttons:[
        {
          text:'Detail',
          handler:()=>{

          }
        }
      
       ,
        {
          text:'Cancel',
          role:'cancel'
        }
      ]
    });

    if(this.delete_status){
      actSheet1.present();
    }
    else{
      actSheet.present();
    }

    


  }


  dismisView(){
    this.viewCtrl.dismiss();

  }


  loadFavVideo(){

    this.credit.check().then(data=>{

    
      let info={'fav_id':this.fav['fav_id']}
      this.favService.favVideo(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.favVideo.push(data[0][key]);
              }

              console.log(this.favVideo);
             

            }

            
      });
    
    });

  }


  doInfinite(event){
    this.credit.check().then(data=>{

    
      let info={'fav_id':this.fav['fav_id'],
                  'o_t':this.favVideo[this.favVideo.length -1]['o_t']}
                  console.log(info);
      this.favService.favVideoMr(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.favVideo.push(data[0][key]);
              }

              console.log(this.favVideo);
             

            }

            if(event)
            {
              event.complete();
            }

            
      });
    
    });

  }


  addVideo(){



    const profilePick=this.modelCtr.create(AddvideoPage,{'fav_id':this.fav['fav_id']});
    profilePick.present();
  }


  playVideoFav(i){


    let video=[];
    this.credit.check().then(data=>{

    
     let info={
       fav_id:this.fav['fav_id']
     }
      this.favService.favVideoCollectio(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                video.push(data[0][key]);
              }

              const profilePick=this.modelCtr.create(VideoplayerPage,{vidArr:video,
                video:this.favVideo[i]});
             profilePick.present();
             
              

            }

           
      });
    
    });



  }

  deleteFromStore(){


    let alert = this.alertBox.create({
      title: 'Delete',
      message: 'Do you want to delete this favourite from Store',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
              this.viewCtrl.dismiss({
                data:false
              });
          }
         
        },
        {
          text: 'Ok',
          handler: () => {
            this.credit.check().then(data=>{

                                                
              let info={'fav_id': this.fav['fav_id']}
              
              this.iService.deleteFav(data[0],data[1],info).subscribe(data=>{
                    if(data['status'])
                    {
                      
                      
                      this.viewCtrl.dismiss({
                        data:true
                      });
                     
                      
                    }
                   
                  
        
                    
              });
          });
            
          }
        }
      ]
    });
    alert.present();


  }



  selectMe(event,i){
    // console.log(this.favVideo[i]);
    let bgS=this.bgselector.nativeElement;
    bgS.classList.add("selectorBg");
   this.selecEle=event.target || event.srcElement || event.currentTarget;
   this.selecEle.classList.add("selectElem");

     
      // this.credit.check().then(data=>{
               
      //           let info={
      //             'video_id':this.favVideo[i]['fav_id'],
                
      //           }
              
      //           this.iService.checkStatusf(data[0],data[1],info).subscribe(data=>{
      //             if(data['status'])
      //             {
                    
                        
                    

      //             }
                  

                
      //       });

                
      //  });
      console.log(this.favVideo[i]);

      const pop=this.popCtrl.create(ImageOptionPop,{
        media_id:this.favVideo[i]['video_id'],
        add_status:false,
        delete_status:this.allowUpload,
        'activity_id':this.favVideo[i]['activity_id'],
        suggestStatus:this.vrialVidSug,
        // addStatus:this.viralAddType,
        moreOption:this.viralMoreOption,
        media_cont:this.favVideo[i],
        full_name:this.favVideo[i]['full_name'],
        pic_url:this.favVideo[i]['pic_url'],
        user_id:this.favVideo[i]['user_id'],
       
        deleteFn:this.DeleteFromStore,
      });
      pop.present({ev:event});
      pop.onDidDismiss((data)=>{
        console.log()
          if (data !=null && data['data'] ){
            this.favVideo.splice(i,i+1);
            
          }
          this.removeSelect();
             
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



  DeleteFromStore(video_id,credit,service,alertBox,detail):Promise<boolean>{
  
    console.log(video_id);

    return new Promise(resolve=>{
      
      
     
      let alert = alertBox.create({
        title: 'Delete',
        message: 'Do you want to delete this video from Favourite',
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
  
                                                  
                let info={'fav_id': detail['fav_id'],
                          'fav_vid_id':detail['fav_vid_id']}
                
                service.deleteFavVideo(data[0],data[1],info).subscribe(data=>{
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
