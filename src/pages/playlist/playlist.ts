import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { ImageStoreService } from '../../services/ImageStoreService';
import { CreditService } from '../../services/CreditService';
import { ViralServices } from '../../services/ViralServices';
import { HeaderPage } from '../../component/header/header';
import { StoreHeaderPage } from '../../component/header/storeheader';
import { PlaylistviewerPage } from '../playlistviewer/playlistviewer';
import { MusicStorePage } from '../music-store/music-store';
import { ImageOptionPop } from '../popover/imagePopover';
import { PlaylistsuggestionPage } from '../playlistsuggestion/playlistsuggestion';
import { PlaylistService } from '../../services/PlaylistService';


@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
  @ViewChild("bgselector") bgselector:ElementRef;
  selecEle:any;
 
  plyArray:any=[];
 

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             private storeS:ImageStoreService,
              private credit:CreditService,
              private modalCtrl:ModalController,
              private popCtrl:PopoverController,
              private iServices:ViralServices,
              private pServices:PlaylistService) {
  }

  loadMusicP(){
    this.navCtrl.setRoot(MusicStorePage);
  }

  loadPlaylistP()
  {
    this.navCtrl.setRoot(PlaylistPage);
  }

  ionViewDidLoad() {
    this.loadPlaylist();
  }

  loadPlaylist(){

    this.credit.check().then(data=>{

      // console.log(data);

      this.storeS.playlistLoad(data[0],data[1]).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {

                data[0][key]['thmb_src']="http://media.makeurworld.com/store/music_th/81652736758ecda33a6116.jpg";
                this.plyArray.push(data[0][key]);
              
              }
            //  console.log(this.musicArray);
            

            }
      });
    
    });

    

    

  }

  doInfinitePlaylist(event){
    this.credit.check().then(data=>{

    
      let info={'l_t':this.plyArray[this.plyArray.length - 1]['playlist_time']}
      this.storeS.playlistLoadM(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.plyArray.push(data[0][key]);
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


  openPlaylist(i){

    this.credit.check().then(data=>{
               
      let info={
        'playlist_id':this.plyArray[i]['playlist_id'],
      
      }
    
      this.pServices.openPlaylist(data[0],data[1],info).subscribe(data=>{
        if(data['status'])
        {
          const profilePick=this.modalCtrl.create(PlaylistviewerPage,{
            playlist:data[0][0]});
            profilePick.present();
            profilePick.onDidDismiss((data)=>{
              console.log()
                if (data !=null && data['data'] ){
                  this.plyArray.splice(i,i+1);
                  
                }
               
                   
            });
        }
      });
    });

   
   

  }


  selectMe(event,i){
    console.log(this.plyArray[i]);
    let bgS=this.bgselector.nativeElement;
    bgS.classList.add("selectorBg");
   this.selecEle=event.target || event.srcElement || event.currentTarget;
   this.selecEle.classList.add("selectElem");


      this.credit.check().then(data=>{
               
                let info={
                  'playlist_id':this.plyArray[i]['playlist_id'],
                
                }
              
                this.iServices.checkStatusP(data[0],data[1],info).subscribe(data=>{
                  if(data['status'])
                  {
                    
                        const pop=this.popCtrl.create(ImageOptionPop,{
                          media_id:this.plyArray[i]['playlist_id'],
                          add_status:false,
                          delete_status:true,
                          'activity_id':this.plyArray[i]['activity_id'],
                          suggestStatus:this.suggestFriend,
                          // addStatus:this.viralAddType,
                          moreOption:this.viralMoreOption,
                          full_name:this.plyArray[i]['full_name'],
                          pic_url:this.plyArray[i]['pic_url'],
                          user_id:this.plyArray[i]['user_id'],
                         
                          deleteFn:this.DeleteFromStore,
                        });
                        pop.present({ev:event});
                        pop.onDidDismiss((data)=>{
                          console.log()
                            if (data !=null && data['data'] ){
                              this.plyArray.splice(i,i+1);
                              
                            }
                            this.removeSelect();
                               
                        });
                    

                  }
                  

                
            });

                
       });
  


  


  }


  suggestFriend(playlist_id,modelCtrl){

    const load=modelCtrl.create(PlaylistsuggestionPage,{'playlist_id':playlist_id});
    load.present();

  }



  removeSelect(){
    let bgS=this.bgselector.nativeElement;
    bgS.classList.remove("selectorBg");
    this.selecEle.classList.remove("selectElem");
  }



  DeleteFromStore(playlist_id,credit,service,alertBox):Promise<boolean>{
  
    console.log(playlist_id);

    return new Promise(resolve=>{
      
      
     
      let alert = alertBox.create({
        title: 'Delete',
        message: 'Do you want to delete this playlist from Store',
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
  
                                                  
                let info={'playlist_id': playlist_id}
                
                service.deletePlaylist(data[0],data[1],info).subscribe(data=>{
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



  viralMoreOption(playlist_id,actionSheet,modelCtrl,fnc,credit,viralS,alertM){

    const actSheet=actionSheet.create({
     
      buttons:[
        {
          text:"Detail",
          handler:()=>{

            // const profilePick=modelCtrl.create(VideofavPage,{'playlist_id':playlist_id});
            // profilePick.present();
            // profilePick.onDidDismiss(()=>{
        
             
              
            // });
            
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
