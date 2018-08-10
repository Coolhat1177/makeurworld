import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SuggestionServices } from '../../services/SuggestionServices';
import { CreditService } from '../../services/CreditService';

/**
 * Generated class for the MusicsuggestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-musicsuggestion',
  templateUrl: 'musicsuggestion.html',
})
export class MusicsuggestionPage {

  suggestionList:any=[];
  music_id:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private vCtrl:ViewController,
              private sServices:SuggestionServices,
              private credit:CreditService) {
                this.music_id=this.navParams.data['music_id'];
  }

  ionViewDidLoad() {
    this.loadSuggestion();
    
  }


  loadSuggestion(){
    this.credit.check().then(data=>{

    
      let info={'music_id':this.music_id,
                'text':''
 
      }

      console.log(info);
      
       this.sServices.musSuggetion(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              
                for(let key in data[0]){
                  data[0][key]['status']=false;
                  this.suggestionList.push(data[0][key]);

                }
               
 
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
        let info={'music_id':this.music_id,
        'text':text

            }

            this.suggestionList=[];

            this.sServices.musSuggetion(data[0],data[1],info).subscribe(data=>{
                if(data['status'])
                {
                  
                    for(let key in data[0]){
                      data[0][key]['status']=false;
                      this.suggestionList.push(data[0][key]);

                    }
                  

                }

                
            });
       });

     
  }




  
  suggestMusic(i){


    this.credit.check().then(data=>{

      
      let info={'music_id':this.music_id,
                'frnd_id':this.suggestionList[i]['frnd_id']
 
      }
      
       this.sServices.musSugget(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              
                
                this.suggestionList[i]['status']=true;
              }
              
 
             
 
            
       });
     
     });
 
     this.suggestionList[i]['status']=true;

  }






  onCancel(event)
  {
      this.onInput(event);
  }






  dismissView(){
    this.vCtrl.dismiss();

  }


}
