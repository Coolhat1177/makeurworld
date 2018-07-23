import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { VideoPlayerServices } from '../../services/VideoPlayerServices';
import { CreditService } from '../../services/CreditService';
import { VideosuggestionPage } from '../videosuggestion/videosuggestion';
import { VideofavPage } from '../videofav/videofav';
import { ReactionServices } from '../../services/InteractionServices';



@IonicPage()
@Component({
  selector: 'page-videoplayer',
  templateUrl: 'videoplayer.html',
})
export class VideoplayerPage {
  data:any={};
  videoInfo:any={};
  video_id:string;
  reactStatus:any={ov_rate:0,
    rate_by:0,
    activity_id:'',
    t_rev:0 };
  constructor(public navCtrl: NavController,
               public navParams: NavParams,
              private vidPly:VideoPlayerServices,
              private credit:CreditService,
              private actionSheet:ActionSheetController,
              private modelCtr:ModalController,
              private intrService:ReactionServices) {
                this.vidPly.video_id=this.navParams.data['video_id'];
                this.vidPly.videoArray=this.navParams.data['vidArr'];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoplayerPage');
    this.vidInfo();
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
          text:"Add to Canvas",
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
               console.log(data[0][0]);
                this.videoInfo=data[0][0];
            
               this.loadInitialReactionV();
 
             }

             console.log(this.videoInfo);
 
            
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


}
