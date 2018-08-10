import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { ProfileServices } from '../../services/ProfileService';
import { ProfilefriendsPage } from '../profilefriends/profilefriends';
import { ProfileimagePage } from '../profileimage/profileimage';
import { RequestService } from '../../services/RequestService';
import { ProfilmusicPage } from '../profilmusic/profilmusic';
import { ProfilevideoPage } from '../profilevideo/profilevideo';



@IonicPage()
@Component({
  selector: 'page-profileview',
  templateUrl: 'profileview.html',
})
export class ProfileviewPage {

  @ViewChildren(Content) content: Content;

  user_id:string="594047ebe100a";
  basicInfo:any=[];
  photoArray:any=[];
  cnavasArray:any=[];
  musicArray:any=[];
  playlistArray:any=[];
  videoArray:any=[];
  favArray:any=[];
  friendArray:any=[];
  addaArray:any=[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private credit:CreditService,
              private proService:ProfileServices,
              private reqservice:RequestService
              ) {
  }


  loadProfileFriend(){
    this.navCtrl.push(ProfilefriendsPage);
  }

  loadStoreFriend(){

    this.navCtrl.push(ProfileimagePage);
  }


  loadRecentProfile(){
    this.content.scrollToTop();

  }

  loadMusicProfile(){
    this.navCtrl.push(ProfilmusicPage);
  }

  loadVideoProfile(){
    this.navCtrl.push(ProfilevideoPage);

  }

  loadPhotoProfile(){
    this.navCtrl.push(ProfileimagePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileviewPage');
    this.loadBasicInfo();
    this.loadPhoto();
    this.loadMusic();
    this.loadVideo();
    this.loadCanvas();
    this.loadPlaylist();
    this.loadFav();
    this.loadFriend();
  }

  loadBasicInfo(){

    this.credit.check().then(data=>{
      

      let info={
        'frnd_id':this.user_id,
      

      }
     
      this.proService.loadBasic(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              
              this.basicInfo=data[0][0];
          
             
              

            }

           
      });
    
    });

  }


  loadPhoto(){

    this.credit.check().then(data=>{
      

      let info={
        'frnd_id':this.user_id,
      

      }
     
      this.proService.loadPhoto(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              
                for(let key in data[0]){
                  this.photoArray.push(data[0][key]);

                }


                // console.log()
          
             
              

            }

           
      });
    
    });

  }

  loadMusic(){

    this.credit.check().then(data=>{
      

      let info={
        'frnd_id':this.user_id,
      

      }
     
      this.proService.loadMusic(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              
                for(let key in data[0]){
                  this.musicArray.push(data[0][key]);

                }


                // console.log()
          
             
              

            }

           
      });
    
    });

  }


  loadVideo(){

    this.credit.check().then(data=>{
      

      let info={
        'frnd_id':this.user_id,
      

      }
     
      this.proService.loadVideo(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              
                for(let key in data[0]){
                  this.videoArray.push(data[0][key]);

                }


                // console.log()
          
             
              

            }

           
      });
    
    });

  }


  loadCanvas(){

    this.credit.check().then(data=>{
      

      let info={
        'frnd_id':this.user_id,
      

      }
     
      this.proService.loadCanvas(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              
                for(let key in data[0]){
                  this.cnavasArray.push(data[0][key]);

                }


                // console.log()
          
             
              

            }

           
      });
    
    });

  }

  loadPlaylist(){

    this.credit.check().then(data=>{
      

      let info={
        'frnd_id':this.user_id,
      

      }
     
      this.proService.loadPlaylist(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              
                for(let key in data[0]){
                  this.playlistArray.push(data[0][key]);

                }


                console.log(this.playlistArray)
          
             
              

            }

           
      });
    
    });

  }


  loadFav(){

    this.credit.check().then(data=>{
      

      let info={
        'frnd_id':this.user_id,
      

      }
     
      this.proService.loadFav(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              
                for(let key in data[0]){
                  this.favArray.push(data[0][key]);

                }


                // console.log()
          
             
              

            }

           
      });
    
    });

  }



  loadFriend(){
    console.log(15)
    this.credit.check().then(data=>{
      

      let info={
        'frnd_id':this.user_id,
      

      }
     
      this.proService.loadFrnd(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              
                for(let key in data[0]){
                  this.friendArray.push(data[0][key]);

                }


                console.log(this.friendArray)
          
             
              

            }

           
      });
    
    });

  }



  acceptRequest(i){
    this.credit.check().then(data=>{

      var info={
              frnd_id:this.friendArray[i]['user_id']
      }
      
      this.reqservice.acceptRequest(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          this.friendArray[i]['req_s']=1;
           
        }
            
      });
        
    });

    this.friendArray[i]['req_s']=1;
   


  }

 
  cancelRequest(i){

    this.credit.check().then(data=>{

      var info={
              frnd_id:this.friendArray[i]['to_id']
      }
      
      this.reqservice.cancelRequest(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          
          this.friendArray[i]['req_s']=4;
          
        }
            
      });
        
    });

    this.friendArray[i]['req_s']=4;

  }


  addFriend(i){
    this.credit.check().then(data=>{

      var info={
              frnd_id:this.friendArray[i]['to_id']
      }
      
      this.reqservice.AddFriend(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          this.friendArray[i]['req_s']=2;
         
          
        }
            
      });
        
    });

    this.friendArray[i]['req_s']=2;

  }




}
