import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FavService } from '../../services/FavServices';
import { CreditService } from '../../services/CreditService';



@IonicPage()
@Component({
  selector: 'page-favsuggestion',
  templateUrl: 'favsuggestion.html',
})
export class FavsuggestionPage {
  fav_id:any={};
  favSuggestion:any=[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl:ViewController,
              private fService:FavService,
              private credit:CreditService
            ) {
              this.fav_id=this.navParams.data['fav_id'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavsuggestionPage');
    this.loadSuggestion();
  }


  dismissView(){

    this.viewCtrl.dismiss();

  }

  loadSuggestion(){
    this.credit.check().then(data=>{

    
      let info={'fav_id':this.fav_id,
                'text':''
 
      }
      
       this.fService.favSuggestion(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              
                for(let key in data[0]){
                  data[0][key]['status']=false;
                  this.favSuggestion.push(data[0][key]);

                }
               console.log(this.favSuggestion);
 
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
        let info={'fav_id':this.fav_id,
        'text':text

            }

            this.favSuggestion=[];

            this.fService.favSuggestion(data[0],data[1],info).subscribe(data=>{
                if(data['status'])
                {
                  
                    for(let key in data[0]){
                      data[0][key]['status']=false;
                      this.favSuggestion.push(data[0][key]);

                    }
                  

                }

                
            });
       });

     
  }


  onCancel(event)
  {
    this.onInput(event)
  }


  suggestFav(i){

    

    this.credit.check().then(data=>{

      
      let info={'fav_id':this.fav_id,
                'frnd_id':this.favSuggestion[i]['frnd_id']
 
      }
      
       this.fService.suggestFav(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              
                
                this.favSuggestion[i]['status']=true;
              }
              
 
             
 
            
       });
     
     });
 
     this.favSuggestion[i]['status']=true;

  }


}
