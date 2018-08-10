import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ActionSheetController, AlertController, PopoverController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { CanvasService } from '../../services/CanvasService';
import { CanvassuggestionPage } from '../canvassuggestion/canvassuggestion';
import { AddCnavasPage } from '../add-cnavas/add-cnavas';
import { ViralServices } from '../../services/ViralServices';
import { ImageviewerPage } from '../imageviewer/imageviewer';
import { ImageOptionPop } from '../popover/imagePopover';
import { ImagesuggestPage } from '../imagesuggest/imagesuggest';



@IonicPage()
@Component({
  selector: 'page-canvasviewer',
  templateUrl: 'canvasviewer.html',
})
export class CanvasviewerPage {
  canvas:any={};
  media_id:string="";
  reactStatus:any={ov_rate:0,
  rate_by:0,
  activity_id:'',
   t_rev:0 };
  cnvImg:any=[];
  fix:boolean=false;
  add_status:boolean=false;
  delete_status=false;
   data:any={};
   @ViewChild("bgselector") bgselector:ElementRef;
   selecEle:any;
   allowUpload:boolean=false;
   cnvImgDelete:boolean=false;
   cnvImgAdd:boolean=false;

  @ViewChild('canvasHeader') canvasHeader:ElementRef;
  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             private credit:CreditService,
             private cnvService:CanvasService,
              private viewCtrl:ViewController,
              private modelCtrl:ModalController,
              private viralS:ViralServices,
              private alertBox:AlertController,
              private popCtrl:PopoverController,
              private actionSheet:ActionSheetController,
          ) {

              this.canvas=this.navParams.data['canvas'];
              
              this.reactStatus['activity_id']=this.canvas['activity_id'];
              this.data=this.navParams.data;
              console.log(this.data);
              this.add_status=this.data['add_status'];
              this.delete_status=this.data['delete_status'];
              this.media_id=this.navParams.data['media_id'];
              
              if(parseInt(this.canvas['type'])==0){
                this.allowUpload=true;
                this.cnvImgAdd=false;
                this.cnvImgDelete=true;

              }
             
             
  }

  ionViewDidLoad() {
   
    this.loadCanvasImage();
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


 
  deleteFromStore(){

    this.navParams.data['deleteFn'](this.media_id,this.credit,this.viralS,this.alertBox).then((data)=>{
         console.log(15);
      
      this.viewCtrl.dismiss({data:data});
      
    });
   

    


  }

  suggestFriend(){

    this.navParams.data['suggestStatus'](this.media_id,this.modelCtrl);

  }


  addType()
  {
    


    this.add_status=this.navParams.data['addStatus'](this.media_id,this.actionSheet);
    
    


  }

  moreOption(){

    if(this.navParams.data['reportFn']== undefined){

      this.navParams.data['moreOption'](this.media_id,this.actionSheet,this.modelCtrl);

  }
  else{

      this.navParams.data['moreOption'](this.media_id,this.actionSheet,this.modelCtrl,this.navParams.data['reportFn'],this.credit,this.viralS,this.alertBox);

  }


  }

  dismisView(){
    this.viewCtrl.dismiss();

  }


  loadCanvasImage(){

    this.credit.check().then(data=>{

    
      let info={'board_id':this.canvas['image_board_id']}
      this.cnvService.canvasImgLoad(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.cnvImg.push(data[0][key]);
              }

              console.log(this.cnvImg);
             

            }

            
      });
    
    });

  }


  doInfinite(event){
    this.credit.check().then(data=>{

    
      let info={'board_id':this.canvas['image_board_id'],
                'l_t':this.cnvImg[this.cnvImg.length-1]['o_t']}
      this.cnvService.canvasImgLoadMr(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.cnvImg.push(data[0][key]);
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


  imageZoomCnv(i){

    let image=[];
    this.credit.check().then(data=>{

    
     var info={'board_id':this.media_id};
      this.cnvService.canvasImgList(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                image.push(data[0][key]);
              }

              const profilePick=this.modelCtrl.create(ImageviewerPage,{
                image:this.cnvImg[i],
               
                imageNextArray:image
                
            });
            profilePick.present();
            profilePick.onDidDismiss((data)=>{
                    
            

            });
          }

           
      });
    
    });

    

  }


  



  selectMe(event,i){
    console.log(this.cnvImg[i]['image_id']);
    let bgS=this.bgselector.nativeElement;
    bgS.classList.add("selectorBg");
   this.selecEle=event.target || event.srcElement || event.currentTarget;
   this.selecEle.classList.add("selectElem");


      this.credit.check().then(data=>{
               
                let info={
                  'image_id':this.cnvImg[i]['image_id'],
                
                }
              
                this.viralS.checkStatus(data[0],data[1],info).subscribe(data=>{
                  if(data['status'])
                  {
                    
                        const pop=this.popCtrl.create(ImageOptionPop,{
                          media_id:this.cnvImg[i]['image_id'],
                          media_cont:this.media_id,
                          add_status:this.cnvImgAdd,
                          delete_status:this.cnvImgDelete,
                          'activity_id':this.cnvImg[i]['activity_id'],
                          suggestStatus:this.vrialImgSug,
                          addStatus:this.viralAddType,
                          moreOption:this.viralMoreOption,
                          full_name:this.cnvImg[i]['full_name'],
                          pic_url:this.cnvImg[i]['pic_url'],
                          user_id:this.cnvImg[i]['user_id'],
                         
                          deleteFn:this.DeleteFromCnv,
                        });
                        pop.present({ev:event});
                        pop.onDidDismiss((data)=>{
                          console.log()
                            if (data !=null && data['data'] ){
                              this.cnvImg.splice(i,i+1);
                              
                            }
                            this.removeSelect();
                               
                        });
                    

                  }else{

                    const pop=this.popCtrl.create(ImageOptionPop,{
                      media_id:this.cnvImg[i]['image_id'],
                      media_cont:this.cnvImg[i],
                      add_status:this.cnvImgAdd,
                      delete_status:this.cnvImgDelete,
                      'activity_id':this.cnvImg[i]['activity_id'],
                      suggestStatus:this.vrialImgSug,
                      addStatus:this.viralAddType,
                      moreOption:this.viralMoreOption,
                      full_name:this.cnvImg[i]['full_name'],
                      pic_url:this.cnvImg[i]['pic_url'],
                      user_id:this.cnvImg[i]['user_id'],
                      reportFn:this.reportContent,
                      deleteFn:this.DeleteFromCnv,
                    });
                          pop.present({ev:event});
                          pop.onDidDismiss((data)=>{
                            
                            if (data !=null && data['data'] ){
                              this.cnvImg.splice(i,i+1);
                              
                            }
                            this.removeSelect();
                          });

                  }
                  

                
            });

                
       });
  


  


  }


  removeSelect(){
    let bgS=this.bgselector.nativeElement;
    bgS.classList.remove("selectorBg");
    this.selecEle.classList.remove("selectElem");
  }



  vrialImgSug(image_id,modelCtrl){
    console.log(image_id);
    const load=modelCtrl.create(ImagesuggestPage,{image_id:image_id});
    load.present();
    
  }

  viralAddType(image_id,actionSheet):Promise<boolean>
  {
    return new Promise(resolve=>{

      const actSheet=actionSheet.create({
   
        buttons:[
          {
            text:"Viral",
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    image_id:image_id,
                                    pub_s:0
                              
                                    }
                                  
                                    this.viralS.addImage(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      resolve(true);
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Private',
            handler:()=>{
                          this.credit.check().then(data=>{
                                      
                                  
                                  let info={
                                  image_id:image_id,
                                  pub_s:1
                            
                                  }
                                
                                  this.viralS.addImage(data[0],data[1],info).subscribe(data=>{
                                  
  
  
                                    resolve(true);
                                    
                            
                                  
                                });
  
        
                   });
  
            }
          },
          {
            text:'Cancel',
            role:'cancel',
            handler:()=>{
              resolve(false);
            }
          }
        ]
      });
  
      actSheet.present();
  
  
  

    });
    
  }


  viralMoreOption(image_id,actionSheet,modelCtrl,fnc,credit,viralS,alertM){

    const actSheet=actionSheet.create({
     
      buttons:[
        {
          text:"Add to Canvas",
          handler:()=>{

            const profilePick=modelCtrl.create(AddCnavasPage,{'image_id':image_id});
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










  DeleteFromCnv(image_id,credit,service,alertBox,detail):Promise<boolean>{
  
    

    return new Promise(resolve=>{
      
      
     
      let alert = alertBox.create({
        title: 'Delete',
        message: 'Do you want to delete this image from Canvas',
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
  
                                                  
                let info={'image_id': image_id,
                          'board_id':detail['board_id'],
                          bimg_id:detail['bimg_id']}
                
                service.deleteImgCanvas(data[0],data[1],info).subscribe(data=>{
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



  reportContent(image_id,actionSheet,credit,viralS,alertM)
  {
  

    const actSheet=actionSheet.create({
      title: 'This content contain',
      buttons:[
        {
          text:"Adult Content",
          handler:()=>{
                        credit.check().then(data=>{

                    
                              let info={'content_id': image_id,
                                        'r_type':0,
                                        'c_type':0
                        
                              }
                              
                              viralS.containReport(data[0],data[1],info).subscribe(data=>{
                                    if(data['status'])
                                    {
                                      
                                      
                                       alertM.errorALert("Content Reported for being adult content");
                                      
                                      
                                    }
                                    else{
                                      alertM.errorALert("Failed Reported. Sorry for trouble");
                                    }
                        
                                  
                        
                                    
                              });
                              });

          
            
          }
        },
        {
          text:'too violent content',
          handler:()=>{

                            credit.check().then(data=>{

                                    
                              let info={'content_id': image_id,
                                        'r_type':1,
                                        'c_type':0
                        
                              }
                              
                              viralS.containReport(data[0],data[1],info).subscribe(data=>{
                                    if(data['status'])
                                    {
                                      
                                      
                                      alertM.errorALert("Content Reported for being too voilent");
                                      
                                      
                                    }
                                    else{
                                      alertM.errorALert("Failed Reported. Sorry for trouble");
                                    }
                        
                                  
                        
                                    
                              });
                          });

          }
        },
        {
          text:'span',
          handler:()=>{


                        credit.check().then(data=>{

                                                
                          let info={'content_id': image_id,
                                    'r_type':2,
                                    'c_type':0
                    
                          }
                          
                          viralS.containReport(data[0],data[1],info).subscribe(data=>{
                                if(data['status'])
                                {
                                  
                                  
                                
                                  alertM.errorALert("Content Reported for being span");
                                  
                                }
                                else{
                                  alertM.errorALert("Failed Reported. Sorry for trouble");
                                }
                    
                              
                    
                                
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



  DeleteFromStore(image_id,credit,service,alertBox):Promise<boolean>{
  
    console.log(image_id);

    return new Promise(resolve=>{
      
      
     
      let alert = alertBox.create({
        title: 'Delete',
        message: 'Do you want to delete this image from Store',
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
  
                                                  
                let info={'image_id': image_id}
                
                service.deleteImage(data[0],data[1],info).subscribe(data=>{
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






}
