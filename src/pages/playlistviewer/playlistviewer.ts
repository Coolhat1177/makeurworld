import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController, AlertController, ViewController, PopoverController } from 'ionic-angular';
import { PlaylistService } from '../../services/PlaylistService';
import { CreditService } from '../../services/CreditService';
import { PlaylistsuggestionPage } from '../playlistsuggestion/playlistsuggestion';
import { AddCnavasPage } from '../add-cnavas/add-cnavas';
import { ViralServices } from '../../services/ViralServices';
import { MusicplayerPage } from '../musicplayer/musicplayer';
import { ImageOptionPop } from '../popover/imagePopover';
import { MusicsuggestionPage } from '../musicsuggestion/musicsuggestion';
import { MusicplaylistPage } from '../musicplaylist/musicplaylist';



@IonicPage()
@Component({
  selector: 'page-playlistviewer',
  templateUrl: 'playlistviewer.html',
})
export class PlaylistviewerPage {
  @ViewChild('canvasHeader') canvasHeader:ElementRef;
  @ViewChild("bgselector") bgselector:ElementRef;
  selecEle:any;
  playlist:any=[];
  plysong:any=[];
  reactStatus:any={ov_rate:0,
    rate_by:0,
    activity_id:'',
    t_rev:0 };
    fix:boolean=false;
    add_status:boolean=false;
    delete_status:boolean=false;
    allowUpload:boolean=false;

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
            private plyService:PlaylistService,
            private pService:ViralServices,
            private credit:CreditService,
            private modelCtr:ModalController,
            private actionSheet:ActionSheetController,
            private alertBox:AlertController,
            private viewCtrl:ViewController,
            private popCtrl:PopoverController) {

    this.playlist=this.navParams.data['playlist'];
    this.reactStatus['activity_id']=this.playlist['activity_id'];
    if(parseInt(this.playlist['type'])==0 || parseInt(this.playlist['type'])==4){
      this.allowUpload=true;
      this.add_status=false;
      this.delete_status=true;

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaylistviewerPage');
    this.loadPlaylistSong();
  }

  dismisView()
  {
    this.navCtrl.pop();
  }


  loadPlaylistSong(){

    this.credit.check().then(data=>{

    
      let info={'playlist_id':this.playlist['playlist_id']}
      this.plyService.plySongLoad(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.plysong.push(data[0][key]);
              }

              console.log(this.plysong);
             

            }

            
      });
    
    });

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


  doInfinite(event){
    this.credit.check().then(data=>{

    
      let info={'playlist_id':this.playlist['playlist_id'],
                'l_t':this.playlist[this.playlist.length-1]['o_t']}
        this.plyService.plySongLoadMr(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.plysong.push(data[0][key]);
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

  suggestFriend(){

    const load=this.modelCtr.create(PlaylistsuggestionPage,{'playlist_id':this.playlist['playlist_id']});
    load.present();

  }


  addType(){

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
          text:"Detail",
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

  deleteFromStore(){
    let alert = this.alertBox.create({
      title: 'Delete',
      message: 'Do you want to delete this playlist from Store',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
         
         
        },
        {
          text: 'Ok',
          handler: () => {
            this.credit.check().then(data=>{

                                                
              let info={'playlist_id': this.playlist['playlist_id']}
              
              this.pService.deletePlaylist(data[0],data[1],info).subscribe(data=>{
                    if(data['status'])
                    {
                      
                      
                     this.viewCtrl.dismiss({
                       data:true
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



  playMusic(i){

    
    let muscArry:any=[];
    this.credit.check().then(data=>{

    
      let info={
        'playlist_id':this.playlist['playlist_id']
      }
      this.plyService.playlistSong(data[0],data[1],info).subscribe(data=>{
          console.log(data);
            if(data['status'])
            {
              
              muscArry=data[0];
              const profilePick=this.modelCtr.create(MusicplayerPage,{musArry:muscArry,music:this.plysong[i]});
              profilePick.present();
              

            }

           
      });
    
    });


    

    

  }


 


   // press code ........................................................................................



   selectMe(event,i){
    console.log(this.plysong[i]);
    let bgS=this.bgselector.nativeElement;
    bgS.classList.add("selectorBg");
   this.selecEle=event.target || event.srcElement || event.currentTarget;
   this.selecEle.classList.add("selectElem");


            const pop=this.popCtrl.create(ImageOptionPop,{
              media_id:this.plysong[i]['music_id'],
              add_status:false,
              delete_status:this.allowUpload,
              'activity_id':this.plysong[i]['activity_id'],
              suggestStatus:this.vrialMusSug,
              // addStatus:this.viralAddType,
              moreOption:this.viralMoreOption,
              full_name:this.plysong[i]['full_name'],
              pic_url:this.plysong[i]['pic_url'],
              user_id:this.plysong[i]['user_id'],
              media_cont:this.plysong[i],
              deleteFn:this.DeleteFromStore,
            });
            pop.present({ev:event});
            pop.onDidDismiss((data)=>{
              console.log()
                if (data !=null && data['data'] ){
                  this.plysong.splice(i,i+1);
                  
                }
                this.removeSelect();
                  
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


  DeleteFromStore(music_id,credit,service,alertBox,detail):Promise<boolean>{
  
    console.log(music_id);

    return new Promise(resolve=>{
      
      
     
      let alert = alertBox.create({
        title: 'Delete',
        message: 'Do you want to delete this music from playlist',
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
  
                                                  
                let info={'playlist_id': detail['playlist_id'],
                          'p_song_id':detail['p_song_id']}
                
                service.deletePlyMusic(data[0],data[1],info).subscribe(data=>{
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
