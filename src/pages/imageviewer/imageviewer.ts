import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController, AlertController, ViewController } from 'ionic-angular';
import { ImagesuggestPage } from '../imagesuggest/imagesuggest';

import { ImageZoomServices } from '../../services/ImageZoomServices';
import { CreditService } from '../../services/CreditService';
import { ReactionCenterPage} from '../../component/reaction/reaction';
import { ReactionServices } from '../../services/InteractionServices';
import { AddCnavasPage } from '../add-cnavas/add-cnavas';
import { AlertServices } from '../../services/AlertServices';
import { ViralServices } from '../../services/ViralServices';
import { UplaodimagePage } from '../uplaodimage/uplaodimage';



@IonicPage()
@Component({
  selector: 'page-imageviewer',
  templateUrl: 'imageviewer.html',
})
export class ImageviewerPage {
  add_status:boolean=false;
  delete_status=false;
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
              private intrService:ReactionServices,
              private alertM:AlertServices,
              private viralS:ViralServices,
              private alertBox:AlertController,
              private viewCtrl:ViewController)
            {
                  this.data=this.navParams.data;
                 
                  this.imgZoom.image_id=this.data['image']['image_id'];
                  this.imgZoom.imageList=this.data['imageNextArray'];
                  
                  this.reactStatus.activity_id=this.data['image']['activity_id'];
                  console.log(this.imgZoom.image_id);
                    
              }

  ionViewDidLoad() {
    this.loadImg();

  }

  dismissImageView()
  {
    this.viewCtrl.dismiss({data:false});
  }

  imageSuggest(){
    const load=this.modelCtr.create(ImagesuggestPage,{image_id:this.imgZoom.image_id});
    load.present();
    
  }

  deleteFromStore(){

   

   
    let alert = this.alertBox.create({
      title: 'Delete',
      message: 'Do you want to delete this image from Store',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
         
         
        },
        {
          text: 'Ok',
          handler: () => {
            this.credit.check().then(data=>{

                                                
              let info={'image_id': this.imgZoom.image_id}
              
              this.viralS.deleteImage(data[0],data[1],info).subscribe(data=>{
                    if(data['status'])
                    {
                      
                      
                     this.viewCtrl.dismiss({data:true});
                     
                      
                    }
                   
                  
        
                    
              });
          });
            
          }
        }
      ]
    });
    alert.present();

    
  

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
                                  image_id:this.imgZoom.image_id,
                                  pub_s:0
                            
                                  }
                                
                                  this.viralS.addImage(data[0],data[1],info).subscribe(data=>{
                                  


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
                                image_id:this.imgZoom.image_id,
                                pub_s:1
                          
                                }
                              
                                this.viralS.addImage(data[0],data[1],info).subscribe(data=>{
                                


                                  this.add_status=false;
                                  this.delete_status=true;
                                  
                          
                                
                              });

      
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
              console.log( this.imgInfo);
              // this.loadInitialReactionV();
              this.checkStatusImg();

            }

           
      });
    
    });


  }


  detail_load(){
    const detail=this.modelCtr.create(UplaodimagePage,{
      image:this.imgInfo,
      mode:"detail"

    });
    
    detail.present();
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


  checkStatusImg(){
    this.credit.check().then(data=>{
               
      let info={
        'image_id':this.imgZoom.image_id,
      
      }
    
      this.imgZoom.checkStatus(data[0],data[1],info).subscribe(data=>{
        console.log(data)
        if(data['status'])
        {
          this.add_status=false;
          this.delete_status=true;
        }
        else{

          this.add_status=true;
          this.delete_status=false;

        }
      });
    })
  }


 

 
}
