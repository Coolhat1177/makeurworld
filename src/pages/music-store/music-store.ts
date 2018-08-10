
import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavController,IonicPage,Slides, ModalController, PopoverController } from 'ionic-angular';
import { ImageStoreService } from '../../services/ImageStoreService';
import { CreditService } from '../../services/CreditService';
import { MusicplayerPage } from '../musicplayer/musicplayer';
import { StoreHeaderPage } from '../../component/header/storeheader';
import { HeaderPage } from '../../component/header/header';
import { ImageOptionPop } from '../popover/imagePopover';
import { ViralServices } from '../../services/ViralServices';
import { MusicsuggestionPage } from '../musicsuggestion/musicsuggestion';
import { MusicplaylistPage } from '../musicplaylist/musicplaylist';
import { PlaylistPage } from '../playlist/playlist';
@IonicPage()
@Component({
  selector: 'page-music-store',
  templateUrl: 'music-store.html'
})
export class MusicStorePage {
  @ViewChild("bgselector") bgselector:ElementRef;
  selecEle:any;
 
  musicArray:any=[];


 

 
  constructor(public navCtrl: NavController,
              private storeS:ImageStoreService,
              private credit:CreditService,
              private modalCtrl:ModalController,
              private popCtrl:PopoverController,
              private iServices:ViralServices,) {
  
    
  }
    ionViewDidLoad() {
    this.loadMusic();
   
  }


  loadMusic(){


    this.credit.check().then(data=>{

      // console.log(data);

      this.storeS.firstLoadM(data[0],data[1]).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {

                data[0][key]['thmb_src']="http://media.makeurworld.com/store/music_th/81652736758ecda33a6116.jpg";
                this.musicArray.push(data[0][key]);
              
              }
            //  console.log(this.musicArray);
            //  this.musicArray=this.storeS.getList();

            }
      });
    
    });

  }


  loadMusicP(){
    this.navCtrl.setRoot(MusicStorePage);
  }

  loadPlaylistP()
  {
    this.navCtrl.setRoot(PlaylistPage);
  }


  doInfinite(event){
    this.loadStorMore(event);
  }

  loadStorMore(event?)
  {
    console.log(this.storeS.getList());
    this.credit.check().then(data=>{

    
      let info={'l_t':this.storeS.last_timeM()}
      this.storeS.moreLoadM(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.musicArray.push(data[0][key]);
              }
              // this.musicArray=this.imgStore.getList();

            }

            if(event)
            {
              event.complete();
            }
      });
    
    });
    
  }


  playMusic(i){

    
    let muscArry:any=[];
    this.credit.check().then(data=>{

    
    
      this.storeS.ownMusicCollection(data[0],data[1]).subscribe(data=>{
          console.log(data);
            if(data['status'])
            {
              
              muscArry=data[0];
              const profilePick=this.modalCtrl.create(MusicplayerPage,{musArry:muscArry,music:this.musicArray[i]});
              profilePick.present();
              profilePick.onDidDismiss((data)=>{
                if(data!=null && data!=undefined && data['data']){
                  this.musicArray.splice(i,i+1);

                }

              });

            }

           
      });
    
    });


    

    

  }


 


   // press code ........................................................................................



   selectMe(event,i){
    console.log(this.musicArray[i]);
    let bgS=this.bgselector.nativeElement;
    bgS.classList.add("selectorBg");
   this.selecEle=event.target || event.srcElement || event.currentTarget;
   this.selecEle.classList.add("selectElem");


      this.credit.check().then(data=>{
               
                let info={
                  'music_id':this.musicArray[i]['music_id'],
                
                }
              
                this.iServices.checkStatusM(data[0],data[1],info).subscribe(data=>{
                  if(data['status'])
                  {
                    
                        const pop=this.popCtrl.create(ImageOptionPop,{
                          media_id:this.musicArray[i]['music_id'],
                          add_status:false,
                          delete_status:true,
                          'activity_id':this.musicArray[i]['activity_id'],
                          suggestStatus:this.vrialMusSug,
                          // addStatus:this.viralAddType,
                          moreOption:this.viralMoreOption,
                          full_name:this.musicArray[i]['full_name'],
                          pic_url:this.musicArray[i]['pic_url'],
                          user_id:this.musicArray[i]['user_id'],
                         
                          deleteFn:this.DeleteFromStore,
                        });
                        pop.present({ev:event});
                        pop.onDidDismiss((data)=>{
                          console.log()
                            if (data !=null && data['data'] ){
                              this.musicArray.splice(i,i+1);
                              
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




    
    
 

}
