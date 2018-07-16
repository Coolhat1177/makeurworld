import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

/**
 * Generated class for the MusicplayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-musicplayer',
  templateUrl: 'musicplayer.html',
})
export class MusicplayerPage {

  songs = ['http://media.makeurworld.com/store/music_p/35541602555a4691e3d230f.mp3'];
  poster = [];
  file1:MediaObject=null;
  play:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl:ViewController,private media: Media,private platform:Platform  ) {

      this.platform.ready().then(()=>{
        // console.log(this.songs[0]);
      
       
    // this.file1.onStatusUpdate.subscribe(status => {
     
    //     console.log(status);
    // }); // fires when file status changes
    // this.file1.onSuccess.subscribe(() => console.log('Play next song'));
    // this.file1.onError.subscribe(error => console.log('Error!', error));  

    // this.file1.play();

      });


     

   
  }

  ionViewDidLoad() {
    console.log( this.file1);
    
    // this.file1=this.media.create('http://media.makeurworld.com/store/music_p/35541602555a4691e3d230f.mp3');;
    // console.log( this.file1);

    // this.file1.onStatusUpdate.subscribe(status => {
     
    //     console.log(status);
    // }); 
    
  }


  dismissMusicPlayerView()
  {
    this.viewCtrl.dismiss();

  }

}
