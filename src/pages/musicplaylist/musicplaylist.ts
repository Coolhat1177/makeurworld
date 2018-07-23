import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { SuggestionServices } from '../../services/SuggestionServices';


@IonicPage()
@Component({
  selector: 'page-musicplaylist',
  templateUrl: 'musicplaylist.html',
})
export class MusicplaylistPage {

  plyList:any=[];
  music_id:string;

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             private viewCtrl:ViewController,
             private credit:CreditService,
             private sugServices:SuggestionServices) {
               this.music_id=this.navParams.data['music_id'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicplaylistPage');
    this.loadCanvas();
  }

  dismissView(){

    this.viewCtrl.dismiss();

  }


  loadCanvas(){

    this.credit.check().then(data=>{

    
      let info={'music_id':this.music_id,
                'text':''
 
      }

      console.log(info);
      
       this.sugServices.musPlaylist(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              
                for(let key in data[0]){
                  data[0][key]['status']=false;
                  this.plyList.push(data[0][key]);

                }
               
 
             }
 
            
       });
     
     });

  }

 
  onInput(event)
  {


      this.credit.check().then(data=>{

        let text=event.target.value;
        let info={'music_id':this.music_id,
        'text':text

            }

            this.plyList=[];

            this.sugServices.musPlaylist(data[0],data[1],info).subscribe(data=>{
                if(data['status'])
                {
                  
                    for(let key in data[0]){
                      data[0][key]['status']=false;
                      this.plyList.push(data[0][key]);

                    }
                  

                }

                
            });
       });

     
  }


  addToMusic(i)
  {
    this.plyList[i]['status']=true;

    this.credit.check().then(data=>{

      
      let info={'music_id':this.music_id,
                'playlist_id': this.plyList[i]['playlist_id']
 
      }
      
       this.sugServices.musAddPlaylist(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              this.plyList[i]['status']=true;

                
               
              }
              
 
             
 
            
       });
     
     });
 


  }




}
