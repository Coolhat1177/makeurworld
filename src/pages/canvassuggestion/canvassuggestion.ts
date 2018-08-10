import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SuggestionServices } from '../../services/SuggestionServices';
import { CreditService } from '../../services/CreditService';


@IonicPage()
@Component({
  selector: 'page-canvassuggestion',
  templateUrl: 'canvassuggestion.html',
})
export class CanvassuggestionPage {

  board_id:string="";
  suggestionList:any=[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
     private sugServices:SuggestionServices,
     private credit:CreditService,
     private vCtrl:ViewController) {

      this.board_id=this.navParams.data['board_id'];
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CanvassuggestionPage');
    this.loadSuggestion();
  }

  dismissView(){
    this.vCtrl.dismiss();
  }


  loadSuggestion(){
    this.credit.check().then(data=>{

    
      let info={'board_id':this.board_id,
                'text':''
 
      }

      console.log(info);
      
       this.sugServices.cnvSuggetion(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              
                for(let key in data[0]){
                  data[0][key]['status']=false;
                  this.suggestionList.push(data[0][key]);

                }

                console.log(this.suggestionList);
               
 
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
        let info={'board_id':this.board_id,
        'text':text

            }

            this.suggestionList=[];

            this.sugServices.cnvSuggetion(data[0],data[1],info).subscribe(data=>{
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


  onCancel(event)
  {
    console.log(1);
    console.log(event);
    this.onInput(event);
    
  }


  suggestCnv(i){

    

    this.credit.check().then(data=>{

      
      let info={'board_id':this.board_id,
                'frnd_id':this.suggestionList[i]['frnd_id']
 
      }
      // console.log(info);
      
       this.sugServices.cnvSuggest(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              
                // console.log(data);
                this.suggestionList[i]['status']=true;
              }
              
 
             
 
            
       });
     
     });
 
     this.suggestionList[i]['status']=true;

  }




}
