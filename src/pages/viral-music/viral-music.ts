import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { ViralServices } from '../../services/ViralServices';
import { CreditService } from '../../services/CreditService';
import { MusicplayerPage } from '../musicplayer/musicplayer';
import { HeaderPage } from '../../component/header/header';
import { ViralHeaderPage } from '../../component/header/viralHeader';
import { MusicplaylistPage } from '../musicplaylist/musicplaylist';
import { MusicsuggestionPage } from '../musicsuggestion/musicsuggestion';
import { ImageOptionPop } from '../popover/imagePopover';

/**
 * Generated class for the ViralMusicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viral-music',
  templateUrl: 'viral-music.html',
})
export class ViralMusicPage {
  viralMusicArray:any=[];
  search:boolean=false;
  @ViewChild("bgselector") bgselector:ElementRef;
  selecEle:any;
  text:string="";
  constructor(public navCtrl: NavController,
               public navParams: NavParams,
              private mServices:ViralServices,
              private credit:CreditService,
              private modelCtrl:ModalController,
              private popCtrl:PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViralMusicPage');
    this.laodViral();
  }


  laodViral(){

    this.credit.check().then(data=>{

      let info={
        'srch':'',
        'rnk':0

      }
     
      this.mServices.musSug(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                  this.viralMusicArray.push(data[0][key]);
              }
              console.log(this.viralMusicArray);
          
             
              

            }

           
      });
    
    });


  }


  doInfiniteViralMusic(event)
  {
   
    this.credit.check().then(data=>{

      let info={
        'srch':'',
        'rnk':this.viralMusicArray.length -1

      }
      this.viralMusicArray=[];
      this.mServices.musSug(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                  this.viralMusicArray.push(data[0][key]);
              }
              console.log(this.viralMusicArray);
          
             
              if(event)
              {
                event.complete();
              }

            }

           
      });
    
    });
    
  }

  playMusicViral(i){

    let muscArry=[];

    this.credit.check().then(data=>{

      let info={
        'srch':this.text,
        'rnk':0

      }
    
      this.mServices.viralMusicList(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              
              muscArry=data[0][0];
              const profilePick=this.modelCtrl.create(MusicplayerPage,{musArry:muscArry,music:this.viralMusicArray[i],add_status:true,delete_status:false});
              profilePick.present();

            }

           
      });
    
    });


    

    

  }



  onInput(event)
  {
   

    this.credit.check().then(data=>{
      this.viralMusicArray=[];
      let text=event.target.value;
      this.text=text;
      let info={
        'srch':text,
        'rnk':0

      }
     
      this.mServices.musSug(data[0],data[1],info).subscribe(data=>{
        if(data['status'])
        {
          for(let key in data[0])
          {
              this.viralMusicArray.push(data[0][key]);
          }
          console.log(this.viralMusicArray);
      
         
   
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
    console.log(this.viralMusicArray[i]);
    let bgS=this.bgselector.nativeElement;
    bgS.classList.add("selectorBg");
   this.selecEle=event.target || event.srcElement || event.currentTarget;
   this.selecEle.classList.add("selectElem");


      this.credit.check().then(data=>{
               
                let info={
                  'music_id':this.viralMusicArray[i]['music_id'],
                
                }
              
                this.mServices.checkStatusM(data[0],data[1],info).subscribe(data=>{
                  if(data['status'])
                  {
                    
                        const pop=this.popCtrl.create(ImageOptionPop,{
                          media_id:this.viralMusicArray[i]['music_id'],
                          add_status:false,
                          delete_status:false,
                          'activity_id':this.viralMusicArray[i]['activity_id'],
                          suggestStatus:this.vrialMusSug,
                          // addStatus:this.viralAddType,
                          moreOption:this.viralMoreOption,
                          full_name:this.viralMusicArray[i]['full_name'],
                          pic_url:this.viralMusicArray[i]['pic_url'],
                          user_id:this.viralMusicArray[i]['user_id'],
                         
                          deleteFn:this.DeleteFromStore,
                        });
                        pop.present({ev:event});
                        pop.onDidDismiss((data)=>{
                          console.log()
                            if (data !=null && data['data'] ){
                              this.viralMusicArray.splice(i,i+1);
                              
                            }
                            this.removeSelect();
                               
                        });
                    

                  }else{

                    const pop=this.popCtrl.create(ImageOptionPop,{
                      media_id:this.viralMusicArray[i]['music_id'],
                      add_status:true,
                      delete_status:false,
                      'activity_id':this.viralMusicArray[i]['activity_id'],
                      suggestStatus:this.vrialMusSug,
                      // addStatus:this.viralAddType,
                      moreOption:this.viralMoreOption,
                      full_name:this.viralMusicArray[i]['full_name'],
                      pic_url:this.viralMusicArray[i]['pic_url'],
                      user_id:this.viralMusicArray[i]['user_id'],
                     
                      deleteFn:this.DeleteFromStore,
                    });
                    pop.present({ev:event});
                    pop.onDidDismiss((data)=>{
                      console.log()
                        if (data !=null && data['data'] ){
                          this.viralMusicArray.splice(i,i+1);
                          
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


      vrialMusSug(music_id,modelCtrl){
        console.log(music_id);
        const load=modelCtrl.create(MusicsuggestionPage,{'music_id':music_id});
        load.present();
        
      }


  DeleteFromStore(music_id,credit,service,alertBox):Promise<boolean>{
  
    console.log(music_id);

    return new Promise(resolve=>{
      
      
     
      let alert = alertBox.create({
        title: 'Delete',
        message: 'Do you want to delete this music from Store',
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
  
                                                  
                let info={'music_id': music_id}
                
                service.deleteMusic(data[0],data[1],info).subscribe(data=>{
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

    

  viralMoreOption(music_id,actionSheet,modelCtrl,fnc,credit,viralS,alertM){

    const actSheet=actionSheet.create({
     
      buttons:[
        {
          text:"Add to Playlist",
          handler:()=>{

            const profilePick=modelCtrl.create(MusicplaylistPage,{'music_id':music_id});
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


  viralAddType(music_id,actionSheet,credit,iServices):Promise<boolean>
  {

    return new Promise(resolve=>{
    

    const actSheet=actionSheet.create({
   
      buttons:[
        {
          text:"Viral",
          handler:()=>{
                       credit.check().then(data=>{
                         
                    
                                  let info={
                                  music_id:music_id,
                                  pub_s:0
                            
                                  }
                                
                                 iServices.addMusic(data[0],data[1],info).subscribe(data=>{
                                  


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
                                music_id:music_id,
                                pub_s:1
                          
                                }
                              
                                iServices.addMusic(data[0],data[1],info).subscribe(data=>{
                                


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
