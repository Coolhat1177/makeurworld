import { Component, Injectable} from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { ProfilefriendsPage } from '../../pages/profilefriends/profilefriends';
import { ProfilmusicPage } from '../../pages/profilmusic/profilmusic';
import { ProfilevideoPage } from '../../pages/profilevideo/profilevideo';
import { ProfileimagePage } from '../../pages/profileimage/profileimage';


@Component({
  selector: 'profileheader-temp',
  template: `
  <ion-row>
            <div class='profilrTop'>
                    <div class="coverPic" >
                        
                        <div class='userName'>Sachin</div>
                    </div>
              
                    <div class='profileAr'>
                      <div class='profileArIn'>
                        <div class='profilePic'>
                            <div class='profilePicIn'>
                                <img src="../../assets/imgs/ter2.jpg" />
                            </div>
                        </div>
                      
                        <div class='profileAr1'>
                            <button ion-button clear (tap)="loadPhotoProfile()"> Store</button>
                        </div>
              
                        <div class='profileAr1'>
                            <button ion-button clear (tap)="loadProfileFriend()"> Friends</button>
                        </div>
              
                        <div class='profileAr1'>
                            <button ion-button clear> Adda</button>
                        </div>
              
                      </div>
                    </div>
              
                   
                    <div class='optionPro'>
                        <ion-row>
                            <ion-col text-center>
                                <button ion-button clear (tap)="loadPhotoProfile()">
                                  Photo
                                  </button>
                            </ion-col >
                            <ion-col text-center>
                                <button ion-button clear (tap)="loadMusicProfile()">
                                Music
                                </button>
                            </ion-col>
                           
                            <ion-col text-center>
                                <button ion-button clear (tap)="loadVideoProfile()">
                                  Video
                                </button>
                            </ion-col>
                          
                          </ion-row>
                    </div>
              
                  </div>
              
      </ion-row>
            `,
 
})

@Injectable()
export class ProdileHeaderPage {
   
  
    constructor(public navCtrl: NavController,private menuCtrl:MenuController){
       
    }


    loadProfileFriend(){
        this.navCtrl.push(ProfilefriendsPage);
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




}