import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SuggestionServices } from '../../services/SuggestionServices';
import { CreditService } from '../../services/CreditService';

/**
 * Generated class for the ImagesuggestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imagesuggest',
  templateUrl: 'imagesuggest.html',
})
export class ImagesuggestPage {
  image_id:string;
  suggestionList:any=[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      private sugServices:SuggestionServices,
      private credit:CreditService,
      private vCtrl:ViewController) {
        this.image_id=this.navParams.data['image_id'];
        this.loadSuggestion();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagesuggestPage');
  }

  loadSuggestion(){
    this.credit.check().then(data=>{

    
      let info={'image_id':this.image_id,
                'text':''
 
      }

      console.log(info);
      
       this.sugServices.imgSuggetion(data[0],data[1],info).subscribe(data=>{
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


  dismissView(){
    this.vCtrl.dismiss();

  }

  onInput(event)
  {


      this.credit.check().then(data=>{

        let text=event.target.value;
        if(text==undefined){
          text="";
        }
        let info={'image_id':this.image_id,
        'text':text

            }

            this.suggestionList=[];

            this.sugServices.imgSuggetion(data[0],data[1],info).subscribe(data=>{
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
      this.onInput(event);
  }


  suggestImg(i){

    

    this.credit.check().then(data=>{

      
      let info={'image_id':this.image_id,
                'frnd_id':this.suggestionList[i]['frnd_id']
 
      }
      console.log(info);
      
       this.sugServices.imgSugget(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              
                console.log(data);
                this.suggestionList[i]['status']=true;
              }
              
 
             
 
            
       });
     
     });
 
     this.suggestionList[i]['status']=true;

  }



}
