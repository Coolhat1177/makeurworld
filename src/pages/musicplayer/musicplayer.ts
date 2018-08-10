import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,Navbar, NavParams, ViewController, Platform, ModalController, ActionSheetController,Content, LoadingController, AlertController } from 'ionic-angular';

import { MusicsuggestionPage } from '../musicsuggestion/musicsuggestion';
import { MusicplaylistPage } from '../musicplaylist/musicplaylist';
import { CreditService } from '../../services/CreditService';
import { Storage } from '@ionic/storage';
import { ReactionServices } from '../../services/InteractionServices';
import {AudioProvider} from '../../providers/audio/audio';
import {FormControl} from '@angular/forms';
import {CANPLAY, LOADEDMETADATA, PLAYING, TIMEUPDATE, LOADSTART, RESET} from '../../providers/store/store';
import {Store} from '@ngrx/store';
import {CloudProvider} from '../../providers/cloud/cloud';

import {pluck, filter, map, distinctUntilChanged} from 'rxjs/operators';

import { MusicplayerServices } from '../../services/MusicplayServices';
import { ViralServices } from '../../services/ViralServices';
import { AlertServices } from '../../services/AlertServices';
import { UplaodmusicPage } from '../uplaodmusic/uplaodmusic';


@IonicPage()
@Component({
  selector: 'page-musicplayer',
  templateUrl: 'musicplayer.html',
})
export class MusicplayerPage {

  files: any = [];
  seekbar: FormControl = new FormControl("seekbar");
  state: any = {};
  onSeekState: boolean;
  currentFile: any = {};
  displayFooter: string = "inactive";
  loggedIn: Boolean=true;
  repeatS:boolean=false;
  shuffleS:boolean=false;
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild(Content) content: Content;
  delete_status:boolean=false;
  add_status:boolean=false;

 


  musicArray:any=[];
  music_id:string;
  musicInfo:any={
    'music_name':''
  };
  reactStatus:any={ov_rate:0,
    rate_by:0,
    activity_id:'',
    t_rev:0 };
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl:ViewController,
    private credit:CreditService,
    private modelCtr:ModalController,
    private storeC:MusicplayerServices,
    private actionSheet:ActionSheetController,
    private intrService:ReactionServices,
    public audioProvider: AudioProvider,
    public loadingCtrl: LoadingController,
    public cloudProvider: CloudProvider,
    private store: Store<any>,
    private storage:Storage,
    private iServices:ViralServices,
    private alertBox:AlertController
     ) {


      this.storeC.musicArray=this.navParams.data['musArry'];
      this.music_id=this.navParams.data['music']['music_id'];
      this.reactStatus.activity_id=this.navParams.data['music']['activity_id'];
      this.getDocuments()
      console.log(this.music_id);
      console.log(this.storeC.musicArray);

     

   
  }



  getDocuments() {
    let loader = this.presentLoading();
    this.cloudProvider.getFiles().subscribe(files => {
      this.files = files;
      loader.dismiss();
    });
  }

  presentLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Loading Content. Please Wait...'
    });
    loading.present();
    return loading;
  }


  ionViewDidLoad() {
    this.checkStatus();

    this.credit.musplyStatus().then(data=>{
      this.repeatS=this.storeC.repeat= data[0];
      this.shuffleS=this.storeC.shuffle=data[1];
     

    });
  
    this.load_detail();
    this.store.select('appState').subscribe((value: any) => {
      this.state = value.media;
    });

    // Resize the Content Screen so that Ionic is aware of footer
    this.store
      .select('appState')
      .pipe(pluck('media', 'canplay'), filter(value => value === true))
      .subscribe(() => {
        this.displayFooter = 'active';
        this.content.resize();
      });

    // Updating the Seekbar based on currentTime
    this.store
      .select('appState')
      .pipe(
        pluck('media', 'timeSec'),
        filter(value => value !== undefined),
        map((value: any) => Number.parseInt(value)),
        distinctUntilChanged()
      )
      .subscribe((value: any) => {
        this.seekbar.setValue(value);
      });
  }

  

  resetState() {
    this.audioProvider.stop();
    this.store.dispatch({ type: RESET });
  }

  playStream(url) {
    this.resetState();
    this.audioProvider.playStream(url).subscribe(event => {
      const audioObj = event.target;

      switch (event.type) {
        case 'canplay':
          return this.store.dispatch({ type: CANPLAY, payload: { value: true } });

        case 'loadedmetadata':
          return this.store.dispatch({
            type: LOADEDMETADATA,
            payload: {
              value: true,
              data: {
                time: this.audioProvider.formatTime(
                  audioObj.duration * 1000,
                  'HH:mm:ss'
                ),
                timeSec: audioObj.duration,
                mediaType: 'mp3'
              }
            }
          });

        case 'playing':
          return this.store.dispatch({ type: PLAYING, payload: { value: true } });

        case 'pause':
          return this.store.dispatch({ type: PLAYING, payload: { value: false } });

        case 'timeupdate':
          return this.store.dispatch({
            type: TIMEUPDATE,
            payload: {
              timeSec: audioObj.currentTime,
              time: this.audioProvider.formatTime(
                audioObj.currentTime * 1000,
                'HH:mm:ss'
              )
            }
          });

        case 'loadstart':
          return this.store.dispatch({ type: LOADSTART, payload: { value: true } });
        

        case 'ended':
              this.next();

        }
    });
    
    
  }




  pause() {
    this.audioProvider.pause();
  }

  play() {
    this.audioProvider.play();
  }

  stop() {
    this.audioProvider.stop();
  }

  next() {
    this.music_id=this.storeC.nextMus(this.storeC.getIndex(this.music_id));
    this.load_detail();
  }

  previous() {
    this.music_id=this.storeC.prevMus(this.storeC.getIndex(this.music_id));
    this.load_detail();
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSeekStart() {
    this.onSeekState = this.state.playing;
    if (this.onSeekState) {
      this.pause();
    }
  }

  onSeekEnd(event) {
    if (this.onSeekState) {
      this.audioProvider.seekTo(event.value);
      this.play();
    } else {
      this.audioProvider.seekTo(event.value);
    }
  }



  reset() {
    this.resetState();
    this.currentFile = {};
    this.displayFooter = "inactive";
  }


  shuffle(){
    if(this.storeC.shuffle){
          this.storeC.shuffle=true;
          this.storeC.repeat=false;
    }

    else{
      this.storeC.shuffle=false;
      this.storeC.repeat=false;
    }


    this.storage.ready().then(()=>{
      this.storage.set('repeat',this.storeC.repeat);
      this.storage.set('shuffle',this.storeC.shuffle)
     
    });

  }



  repeat(){
    if(this.storeC.repeat){
          this.storeC.repeat=true;
          this.storeC.shuffle=false;
    }

    else{
      this.storeC.shuffle=false;
      this.storeC.repeat=false;
    }


    this.storage.ready().then(()=>{
      this.storage.set('repeat',this.storeC.repeat);
      this.storage.set('shuffle',this.storeC.shuffle)
     
    });

  }
  
  


  loadInitialReactionV(){

    // console.log(22);

    this.credit.check().then(data=>{

    
      let info={'activity_id': this.musicInfo['activity_id']
 
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




  load_detail(){

    this.credit.check().then(data=>{

    
      let info={'music_id':this.music_id
 
      }
      
       this.storeC.loadDetail(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
               
                this.musicInfo=data[0][0];


                this.playStream(this.musicInfo['music_src']);
            
              //  this.loadInitialReactionV();
 
             }
 
            
       });
     
     });

  }

  musicSuggest(){

    const load=this.modelCtr.create(MusicsuggestionPage,{'music_id':this.music_id});
    load.present();

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
                                  music_id:this.music_id,
                                  pub_s:0
                            
                                  }
                                
                                 this.iServices.addMusic(data[0],data[1],info).subscribe(data=>{
                                  
                                  this.delete_status=true;

                                  this.add_status=false;

                                  
                                    
                            
                                  
                                });
                    
                          
                      });

          }
        },
        {
          text:'Private',
          handler:()=>{
                       this.credit.check().then(data=>{
                                    
                                
                                let info={
                                music_id:this.music_id,
                                pub_s:1
                          
                                }
                              
                                this.iServices.addMusic(data[0],data[1],info).subscribe(data=>{
                                


                                this.delete_status=true;

                                  this.add_status=false;
                          
                                
                              });

      
                 });

          }
        },
        {
          text:'Cancel',
          role:'cancel',
          handler:()=>{
            
          }
        }
      ]
    });

    actSheet.present();





  }

  moreOption(){

    const actSheet=this.actionSheet.create({
     
      buttons:[
        {
          text:"Add to Playlist",
          handler:()=>{

            const profilePick=this.modelCtr.create(MusicplaylistPage,{music_id:this.music_id});
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


  dismissMusicPlayerView()
  {
    this.viewCtrl.dismiss();

  }
  


  swipeEvent(ev)
  {
   
    if(ev.direction==2)
    {
      // console.log(this.imgZoom.imageList);
     this.next();
      // console.log( this.imgZoom.image_id)
      // this.loadImg();
    }

    if(ev.direction==4){

      this.previous();
    }

    // console.log(this.imgZoom.imageList);

  }


  checkStatus(){
    this.credit.check().then(data=>{
               
      let info={
        'music_id':this.music_id,
      
      }
    
      this.iServices.checkStatusM(data[0],data[1],info).subscribe(data=>{
        if(data['status'])
        {
          
              this.delete_status=true;
              this.add_status=false;
          

        }
        else{
          this.delete_status=true;
              this.add_status=false;

        }
        

      
  });

      
});

  }


  deleteFromStore(){
  
   
      
     
      let alert = this.alertBox.create({
        title: 'Delete',
        message: 'Do you want to delete this music from Store',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              this.viewCtrl.dismiss({
                data:false
              });
          
            }
           
          },
          {
            text: 'Ok',
            handler: () => {
              this.credit.check().then(data=>{
  
                                                  
                let info={'music_id': this.music_id}
                
                this.iServices.deleteMusic(data[0],data[1],info).subscribe(data=>{
                    this.stop();
                      if(data['status'])
                      {
                        
                        this.viewCtrl.dismiss({
                          data:true
                        });
                          
                       
                        
                      }
                      else{
                        this.viewCtrl.dismiss({
                          data:false
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


  loadMusicDetail(){
    const detail=this.modelCtr.create(UplaodmusicPage,{
      music:this.musicInfo,
      mode:"detail"

    });
    
    detail.present();
  }

}
