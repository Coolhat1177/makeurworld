import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { SuggestionServices } from '../../services/SuggestionServices';



@IonicPage()
@Component({
  selector: 'page-videosuggestion',
  templateUrl: 'videosuggestion.html',
})
export class VideosuggestionPage {

  suggestionList:any=[];
  video_id:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private credit:CreditService,
              private vCtrl:ViewController,
              private sServices:SuggestionServices,) {

                this.video_id=this.navParams.data['video_id'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosuggestionPage');
    this.loadSuggestion();
  }

  loadSuggestion(){
    this.credit.check().then(data=>{

    
      let info={'video_id':this.video_id,
                'text':''
 
      }

      console.log(info);
      
       this.sServices.vidSuggetion(data[0],data[1],info).subscribe(data=>{
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
        let info={'video_id':this.video_id,
        'text':text

            }

            this.suggestionList=[];

            this.sServices.vidSuggetion(data[0],data[1],info).subscribe(data=>{
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

      
      let info={'video':this.video_id,
                'frnd_id':this.suggestionList[i]['frnd_id']
 
      }
      
       this.sServices.vidSugget(data[0],data[1],info).subscribe(data=>{
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
      console.log("ok");
  }




  dismissView(){
    this.vCtrl.dismiss();

  }


}
