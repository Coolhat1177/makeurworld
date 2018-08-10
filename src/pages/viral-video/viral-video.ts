import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { ViralServices } from '../../services/ViralServices';
import { VideoplayerPage } from '../videoplayer/videoplayer';
import { HeaderPage } from '../../component/header/header';
import { ViralHeaderPage } from '../../component/header/viralHeader';
import { VideofavPage } from '../videofav/videofav';
import { VideosuggestionPage } from '../videosuggestion/videosuggestion';
import { ImageOptionPop } from '../popover/imagePopover';



@IonicPage()
@Component({
  selector: 'page-viral-video',
  templateUrl: 'viral-video.html',
})
export class ViralVideoPage {
  @ViewChild("bgselector") bgselector:ElementRef;
  selecEle:any;
  viralVideoArray:any=[];
  search:boolean=false;
  text:string="";

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
              private credit:CreditService,
              private vServices:ViralServices,
              private modelCtrl:ModalController,
              private popCtrl:PopoverController,
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViralVideoPage');
    this.laodViral();
  }


  laodViral(){

    this.credit.check().then(data=>{
      this.viralVideoArray=[];

      let info={
        'srch':'',
        'rnk':0

      }
     
      this.vServices.vidSug(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                  this.viralVideoArray.push(data[0][key]);
              }
              console.log(this.viralVideoArray);
          
             
              

            }

           
      });
    
    });


  }


  doInfiniteViralVideo(event)
  {
   
    this.credit.check().then(data=>{

      let info={
        'srch':'',
        'rnk':this.viralVideoArray.length -1

      }
     
      this.vServices.vidSug(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                  this.viralVideoArray.push(data[0][key]);
              }
              console.log(this.viralVideoArray);
          
             
              if(event)
              {
                event.complete();
              }

            }

           
      });
    
    });
    
  }





  playVideoViral(i){

    // console.log(this.viralVideoArray[i]);
    let video=[];
    this.credit.check().then(data=>{

      let info={
        'rnk':0,
        'srch':this.text

      };
     
      this.vServices.viralList(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                video.push(data[0][key]);
              }

              const profilePick=this.modelCtrl.create(VideoplayerPage,{vidArr:video,
                video:this.viralVideoArray[i],add_status:true,delet_status:false});
             profilePick.present();
             
              

            }

           
      });
    
    });



  }



  onInput(event)
  {
   

    this.credit.check().then(data=>{
      this.viralVideoArray=[];
      let text=event.target.value;
      this.text=text;
      let info={
        'srch':text,
        'rnk':0

      }
     
      this.vServices.vidSug(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                  this.viralVideoArray.push(data[0][key]);
              }
              console.log(this.viralVideoArray);
          
             
              

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
    console.log(this.viralVideoArray[i]);
    let bgS=this.bgselector.nativeElement;
    bgS.classList.add("selectorBg");
   this.selecEle=event.target || event.srcElement || event.currentTarget;
   this.selecEle.classList.add("selectElem");

    console.log(this.viralVideoArray[i]);

      this.credit.check().then(data=>{
               
                let info={
                  'video_id':this.viralVideoArray[i]['video_id'],
                
                }
              
                this.vServices.checkStatusV(data[0],data[1],info).subscribe(data=>{
                  if(data['status'])
                  {
                    
                        const pop=this.popCtrl.create(ImageOptionPop,{
                          media_id:this.viralVideoArray[i]['video_id'],
                          add_status:false,
                          delete_status:false,
                          'activity_id':this.viralVideoArray[i]['activity_id'],
                          suggestStatus:this.vrialVidSug,
                          addStatus:this.viralAddType,
                          moreOption:this.viralMoreOption,
                          full_name:this.viralVideoArray[i]['full_name'],
                          pic_url:this.viralVideoArray[i]['pic_url'],
                          user_id:this.viralVideoArray[i]['user_id'],
                         
                          deleteFn:this.DeleteFromStore,
                        });
                        pop.present({ev:event});
                        pop.onDidDismiss((data)=>{
                          console.log()
                            if (data !=null && data['data'] ){
                              this.viralVideoArray.splice(i,i+1);
                              
                            }
                            this.removeSelect();
                               
                        });
                    

                  }
                  else{

                    const pop=this.popCtrl.create(ImageOptionPop,{
                      media_id:this.viralVideoArray[i]['video_id'],
                      add_status:true,
                      delete_status:false,
                      'activity_id':this.viralVideoArray[i]['activity_id'],
                      suggestStatus:this.vrialVidSug,
                      addStatus:this.viralAddType,
                      moreOption:this.viralMoreOption,
                      full_name:this.viralVideoArray[i]['full_name'],
                      pic_url:this.viralVideoArray[i]['pic_url'],
                      user_id:this.viralVideoArray[i]['user_id'],
                     
                      deleteFn:this.DeleteFromStore,
                    });
                    pop.present({ev:event});
                    pop.onDidDismiss((data)=>{
                      console.log()
                        if (data !=null && data['data'] ){
                          this.viralVideoArray.splice(i,i+1);
                          
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

  viralAddType(video_id,actionSheet,credit,iServices):Promise<boolean>
  {

    return new Promise(resolve=>{
    

    const actSheet=actionSheet.create({
   
      buttons:[
        {
          text:"Viral",
          handler:()=>{
                       credit.check().then(data=>{
                         
                    
                                  let info={
                                  video_id:video_id,
                                  pub_s:0
                            
                                  }
                                
                                 iServices.addVideo(data[0],data[1],info).subscribe(data=>{
                                  


                                    resolve(true);
                                    
                            
                                  
                                });
                    
                          
                      });

          }
        },
        {
          text:'Private',
          handler:()=>{
                       credit.check().then(data=>{
                                    
                                
                                let info={
                                video_id:video_id,
                                pub_s:1
                          
                                }
                              
                                iServices.addVideo(data[0],data[1],info).subscribe(data=>{
                                


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



}
