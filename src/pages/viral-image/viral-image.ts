import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController, ActionSheetController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { ViralServices } from '../../services/ViralServices';
import { ImageviewerPage } from '../imageviewer/imageviewer';
import { ImageOptionPop } from '../popover/imagePopover';
import { ImagesuggestPage } from '../imagesuggest/imagesuggest';
import { AddCnavasPage } from '../add-cnavas/add-cnavas';
import { HeaderPage } from '../../component/header/header';
import { ViralHeaderPage } from '../../component/header/viralHeader';


@Component({
  selector: 'page-viral-image',
  templateUrl: 'viral-image.html',
})
export class ViralImagePage {

  viralImageArray:any=[];
  search:boolean=false;
  @ViewChild("bgselector") bgselector:ElementRef;
  selecEle:any;
  text:string="";


  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            private credit:CreditService,
            private iServices:ViralServices,
            private modelCtrl:ModalController,
            private popCtrl:PopoverController,
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViralImagePage');
    this.laodViral();
  }


  laodViral(){

    this.credit.check().then(data=>{

      let info={
        'srch':'',
        'rnk':0

      }
     
      this.iServices.imgSug(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                  this.viralImageArray.push(data[0][key]);
              }
              console.log(this.viralImageArray);
          
             
              

            }

           
      });
    
    });


  }



  doInfiniteViralImg(event)    //scroll
  {
   
    this.credit.check().then(data=>{
      
      let info={
        'srch':this.text,
        'rnk':this.viralImageArray.length -1

      }
     
      this.iServices.imgSug(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                  this.viralImageArray.push(data[0][key]);
              }
              console.log(this.viralImageArray);
          
             
              if(event)
              {
                event.complete();
              }

            }

           
      });
    
    });
    
  }



  


  onInput(event)
  {
   

            this.credit.check().then(data=>{
              this.viralImageArray=[];
              this.text=event.target.value;

              let info={
                'srch':this.text,
                'rnk':0

              }
            
              this.iServices.imgSug(data[0],data[1],info).subscribe(data=>{
                if(data['status'])
                {
                  for(let key in data[0])
                  {
                      this.viralImageArray.push(data[0][key]);
                  }
                  console.log(this.viralImageArray);
              
                
                  

                }

              
            });

              
          });
    
   


     
  }



  onSearch(){
    if(this.search){
      this.search=false;
    }
    else{
      this.search=true;
    }

    event.stopPropagation();
  }


  closeSearch(event){
    // console.log(event);
   
    this.search=false;
  }


  stopClose(){

    event.stopPropagation();

  }


  selectMe(event,i){
    console.log(i);
    let bgS=this.bgselector.nativeElement;
    bgS.classList.add("selectorBg");
   this.selecEle=event.target || event.srcElement || event.currentTarget;
   this.selecEle.classList.add("selectElem");


      this.credit.check().then(data=>{
               
                let info={
                  'image_id':this.viralImageArray[i]['image_id'],
                
                }
              
                this.iServices.checkStatus(data[0],data[1],info).subscribe(data=>{
                  if(data['status'])
                  {
                    
                        const pop=this.popCtrl.create(ImageOptionPop,{
                          media_id:this.viralImageArray[i]['image_id'],
                          add_status:false,
                          delete_status:true,
                          'activity_id':this.viralImageArray[i]['activity_id'],
                          suggestStatus:this.vrialImgSug,
                          addStatus:this.viralAddType,
                          moreOption:this.viralMoreOption,
                          full_name:this.viralImageArray[i]['full_name'],
                          pic_url:this.viralImageArray[i]['pic_url'],
                          user_id:this.viralImageArray[i]['user_id'],
                          reportFn:this.reportContent,
                          deleteFn:this.DeleteFromStore,
                        });
                        pop.present({ev:event});
                        pop.onDidDismiss((data)=>{
                            if(data['data']){
                              this.viralImageArray.slice(i,i+1);
                              this.removeSelect();
                            }
                               
                        });
                    

                  }
                  else{

                    const pop=this.popCtrl.create(ImageOptionPop,{
                      media_id:this.viralImageArray[i]['image_id'],
                      add_status:true,
                      delete_status:false,
                      'activity_id':this.viralImageArray[i]['activity_id'],
                      suggestStatus:this.vrialImgSug,
                      addStatus:this.viralAddType,
                      moreOption:this.viralMoreOption,
                      full_name:this.viralImageArray[i]['full_name'],
                      pic_url:this.viralImageArray[i]['pic_url'],
                      user_id:this.viralImageArray[i]['user_id'],
                      reportFn:this.reportContent,
                    });
                          pop.present({ev:event});
                          pop.onDidDismiss(()=>{
                            
                              this.removeSelect();
                          });

                  }

                
            });

                
       });
  


  


  }





  imageZoomViral(i){
    let image=[];
    this.credit.check().then(data=>{

      let info={
        'srch':this.text,
        'rnk':0

      }
     
      this.iServices.viraImagelList(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                image.push(data[0][key]);
              }

              const profilePick=this.modelCtrl.create(ImageviewerPage,{
                        image:this.viralImageArray[i],
                      
                        imageNextArray:image
                        
              });
             profilePick.present();
             profilePick.onDidDismiss((data)=>{
              if(data['data']){
                this.viralImageArray.slice(i,i+1);
                this.removeSelect();
              }
                 
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
                                
                                  this.iServices.addImage(data[0],data[1],info).subscribe(data=>{
                                  


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
                              
                                this.iServices.addImage(data[0],data[1],info).subscribe(data=>{
                                


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
          text:'Report',
          handler:()=>{

            fnc(image_id,actionSheet,credit,viralS,alertM);

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





  DeleteFromStore(image_id,credit,service,alertBox){

    let alert = alertBox.create({
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
            credit.check().then(data=>{

                                                
              let info={'image_id': image_id}
              
              service.deleteImage(data[0],data[1],info).subscribe(data=>{
                    if(data['status'])
                    {
                      
                      
                      return true;
                     
                      
                    }
                   
                  
        
                    
              });
          });
            
          }
        }
      ]
    });
    alert.present();






  }



  



}
