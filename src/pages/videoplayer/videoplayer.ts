import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController, AlertController, ViewController } from 'ionic-angular';
import { VideoPlayerServices } from '../../services/VideoPlayerServices';
import { CreditService } from '../../services/CreditService';
import { VideosuggestionPage } from '../videosuggestion/videosuggestion';
import { VideofavPage } from '../videofav/videofav';
import { ReactionServices } from '../../services/InteractionServices';
import { ViralServices } from '../../services/ViralServices';
import { UplaodvideoPage } from '../uplaodvideo/uplaodvideo';



@IonicPage()
@Component({
  selector: 'page-videoplayer',
  templateUrl: 'videoplayer.html',
})
export class VideoplayerPage {
  data:any={};
  videoInfo:any={};
  videoSrc:string="";
  video_id:string;
  reactStatus:any={ov_rate:0,
    rate_by:0,
    activity_id:'',
    t_rev:0 };

    delete_status:boolean=false;
    add_status:boolean=false;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private vidPly:VideoPlayerServices,
              private credit:CreditService,
              private actionSheet:ActionSheetController,
              private modelCtr:ModalController,
              private intrService:ReactionServices,
              private iServices:ViralServices,
              private alertBox:AlertController,
              private viewCtrl:ViewController) {
              this.video_id=this.vidPly.video_id=this.navParams.data['video']['video_id'];
              this.reactStatus.activity_id=this.navParams.data['video']['activity_id']
              this.vidPly.videoArray=this.navParams.data['vidArr'];
              this.videoSrc=this.navParams.data['video']['video_src'];
                // console.log(this.vidPly.videoArray);
                // console.log(this.vidPly.videoArray);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoplayerPage');
    this.vidInfo();
    this.checkStatus();
  }


  dismissVideoView()
  {
    this.navCtrl.pop();
  }

  videoSuggest(){
    const load=this.modelCtr.create(VideosuggestionPage,{video_id:this.vidPly.video_id});
    load.present();
    
  }




  addType()
  {
    
    const actSheet=this.actionSheet.create({
   
      buttons:[
        {
          text:"Viral",
          handler:()=>{
                       this.credit.check().then(data=>{
                         
                    
                                  let info={
                                  video_id:this.video_id,
                                  pub_s:0
                            
                                  }
                                
                                 this.iServices.addVideo(data[0],data[1],info).subscribe(data=>{
                                  
                                  this.add_status=false;
                                  this.delete_status=true;

                                   
                            
                                  
                                });
                    
                          
                      });

          }
        },
        {
          text:'Private',
          handler:()=>{
                       this.credit.check().then(data=>{
                                    
                                
                                let info={
                                video_id:this.video_id,
                                pub_s:1
                          
                                }
                              
                                this.iServices.addVideo(data[0],data[1],info).subscribe(data=>{
                                


                                  this.add_status=false;
                                  this.delete_status=true;
                                  
                          
                                
                              });

      
                 });

          }
        },
        {
          text:'Cancel',
          role:'cancel',
          handler:()=>{
           
          }
        }
      ]
    });

    actSheet.present();






  }

  moreOption(){

    const actSheet=this.actionSheet.create({
     
      buttons:[
        {
          text:"Add to Favourite",
          handler:()=>{

            const profilePick=this.modelCtr.create(VideofavPage,{'video_id':this.vidPly.video_id});
            profilePick.present();
            profilePick.onDidDismiss(()=>{
        
             
              
            });
            
          }
        },
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

    actSheet.present();


  }




  vidInfo(){

    this.credit.check().then(data=>{

    
      let info={'video_id':this.vidPly.video_id
 
      }
      
       this.vidPly.loadDetail(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              //  console.log(data[0][0]);
                this.videoInfo=data[0][0];
                this.videoSrc=this.videoInfo['video_src']
                // this.reactStatus.activity_id=this.videoInfo['activity_id'];
            
              //  this.loadInitialReactionV();
 
             }

            //  console.log(this.videoInfo);
 
            
       });
     
     });

  }


  loadInitialReactionV(){

    // console.log(22);

    this.credit.check().then(data=>{

    
      let info={'activity_id': this.videoInfo['activity_id']
 
      }
      
       this.intrService.loadCurReaction(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
               
               
                this.reactStatus=data[0][0];
            
               
              
             }

            //  console.log(this.reactStatus);
 
            
       });


       this.intrService.loadCurComment(data[0],data[1],info).subscribe(data=>{
        if(data['status'])
        {
          
          
           this.reactStatus['t_rev']=data[0][0]['t_rev'];
       
          
         
        }

       //  console.log(this.reactStatus);

       
  });
     
     });

  }

  swipeEvent(ev)
  {
   
    if(ev.direction==2)
    {
      // console.log(this.imgZoom.imageList);
     this.next();
      // console.log( this.imgZoom.image_id)
      // this.loadImg();
    }

    if(ev.direction==4){

      this.previous();
    }

    // console.log(this.imgZoom.imageList);

  }


  next() {
    this.video_id=this.vidPly.nextVid(this.vidPly.getIndex(this.video_id));
    this.videoInfo();
  }

  previous() {
    this.video_id=this.vidPly.prevVid(this.vidPly.getIndex(this.video_id));
    this.videoInfo();
  }


  checkStatus(){
    this.credit.check().then(data=>{
               
      let info={
        'video_id':this.video_id,
      
      }
      console.log(info);
    
      this.iServices.checkStatusV(data[0],data[1],info).subscribe(data=>{
        if(data['status'])
        {
          
              this.delete_status=true;
              this.add_status=false;
          

        }
        else{
          this.delete_status=true;
              this.add_status=false;

        }
        

      
  });

      
});

  }



  deleteFromStore(){
  
    

   
      
      
     
      let alert = this.alertBox.create({
        title: 'Delete',
        message: 'Do you want to delete this video from Store',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              // this.viewCtrl.dismiss({
              //   data:false
              // });
          
          
            }
           
          },
          {
            text: 'Ok',
            handler: () => {
              this.credit.check().then(data=>{
  
                                                  
                let info={'video_id': this.video_id}
                
                this.iServices.deleteVideo(data[0],data[1],info).subscribe(data=>{
                  if(data['status'])
                  {
                    
                    this.viewCtrl.dismiss({
                      data:true
                    });
                      
                   
                    
                  }
                  else{
                    this.viewCtrl.dismiss({
                      data:false
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

  videoDetail(){
    const detail=this.modelCtr.create(UplaodvideoPage,{
      video:this.videoInfo,
      mode:"detail"

    });
    
    detail.present();
  }


}
