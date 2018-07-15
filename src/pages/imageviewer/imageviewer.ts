import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { ImagesuggestPage } from '../imagesuggest/imagesuggest';

import { ImageZoomServices } from '../../services/ImageZoomServices';
import { CreditService } from '../../services/CreditService';
import { ReactionCenterPage} from '../../component/reaction/reaction';
import { ReactionServices } from '../../services/InteractionServices';
import { AddCnavasPage } from '../add-cnavas/add-cnavas';

/**
 * Generated class for the ImageviewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imageviewer',
  templateUrl: 'imageviewer.html',
})
export class ImageviewerPage {

   data:any={};
   imgInfo:any={};
   reactStatus:any={ov_rate:0,
    rate_by:0,
    activity_id:'',
    t_rev:0 };

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private modelCtr:ModalController,
      private actionSheet:ActionSheetController,
      private imgZoom:ImageZoomServices,
      private credit:CreditService,
      private intrService:ReactionServices)
 {
      this.data=this.navParams.data;
      this.imgZoom.imageList=this.data['imgArr'];
      this.imgZoom.image_id=this.data['image_id'];
      this.loadImg();
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageviewerPage');

  }

  dismissImageView()
  {
    this.navCtrl.pop();
  }

  imageSuggest(){
    const load=this.modelCtr.create(ImagesuggestPage,{image_id:this.imgZoom.image_id});
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

            const profilePick=this.modelCtr.create(AddCnavasPage,{'image_id':this.imgZoom.image_id});
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

  loadImg()
  {
    
    this.credit.check().then(data=>{

    
     let info={'image_id':this.imgZoom.image_id

     }
     
      this.imgZoom.loadImg(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              
               this.imgInfo=data[0][0];
           
              this.loadInitialReactionV();

            }

           
      });
    
    });


  }

  loadInitialReactionV(){

    // console.log(22);

    this.credit.check().then(data=>{

    
      let info={'activity_id': this.imgInfo['activity_id']
 
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
      let i=this.imgZoom.currentIndex(this.imgZoom.image_id);
      this.imgZoom.image_id= this.imgZoom.nextImg(i);
      this.loadImg();
      // console.log( this.imgZoom.image_id)
      // this.loadImg();
    }

    if(ev.direction==4){

      this.imgZoom.image_id= this.imgZoom.prevImg(this.imgZoom.currentIndex(this.imgZoom.image_id));
      this.loadImg();
    }

    // console.log(this.imgZoom.imageList);

  }




 
}
