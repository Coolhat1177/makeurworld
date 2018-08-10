import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { PlaylistService } from '../../services/PlaylistService';



@IonicPage()
@Component({
  selector: 'page-playlistsuggestion',
  templateUrl: 'playlistsuggestion.html',
})
export class PlaylistsuggestionPage {
  playlistSuggestion:any=[];
  playlist_id:string='';

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private viewCtrl:ViewController,
               private pService:PlaylistService,
               private credit:CreditService) {
                 this.playlist_id=this.navParams.data['playlist_id']

  }

  ionViewDidLoad() {
    this.loadSuggestion();
  }

  loadSuggestion(){
    this.credit.check().then(data=>{

    
      let info={'playlist_id':this.playlist_id,
                'text':''
 
      }
      
       this.pService.plySuggestion(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              
                for(let key in data[0]){
                  data[0][key]['status']=false;
                  this.playlistSuggestion.push(data[0][key]);

                }
               console.log(this.playlistSuggestion);
 
             }
 
            
       });
     
     });
 

  }

  onInput(event)
  {


      this.credit.check().then(data=>{

        let text=event.target.value;
        if(text==undefined){
          text="";
        }
        let info={'playlist_id':this.playlist_id,
        'text':text

            }

            this.playlistSuggestion=[];

            this.pService.plySuggestion(data[0],data[1],info).subscribe(data=>{
                if(data['status'])
                {
                  
                    for(let key in data[0]){
                      data[0][key]['status']=false;
                      this.playlistSuggestion.push(data[0][key]);

                    }
                  

                }

                
            });
       });

     
  }


  onCancel(event)
  {
    this.onInput(event)
  }


  suggestPly(i){

    

    this.credit.check().then(data=>{

      
      let info={'playlist_id':this.playlist_id,
                'frnd_id':this.playlistSuggestion[i]['frnd_id']
 
      }
      
       this.pService.suggestPly(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              
                
                this.playlistSuggestion[i]['status']=true;
              }
              
 
             
 
            
       });
     
     });
 
     this.playlistSuggestion[i]['status']=true;

  }


  dismissView(){
    this.viewCtrl.dismiss();
  }
}
