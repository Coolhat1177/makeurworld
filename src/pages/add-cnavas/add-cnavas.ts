import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { SuggestionServices } from '../../services/SuggestionServices';

/**
 * Generated class for the AddCnavasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-cnavas',
  templateUrl: 'add-cnavas.html',
})
export class AddCnavasPage {
  image_id:string;
  cnavsList:any=[];
  constructor(public navCtrl: NavController,
         public navParams: NavParams,
          private viewCtrl:ViewController,
          private credit:CreditService,
          private sugServices:SuggestionServices) {
    this.image_id=this.navParams.data['image_id'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCnavasPage');
    this.loadCanvas();
  }


  loadCanvas(){

    this.credit.check().then(data=>{

    
      let info={'image_id':this.image_id,
                'text':''
 
      }
      
       this.sugServices.imgCanvas(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              
                for(let key in data[0]){
                  data[0][key]['status']=false;
                  this.cnavsList.push(data[0][key]);

                }
               
 
             }
 
            
       });
     
     });

  }

 
  onInput(event)
  {


      this.credit.check().then(data=>{

        let text=event.target.value;
        let info={'image_id':this.image_id,
        'text':text

            }

            this.cnavsList=[];

            this.sugServices.imgCanvas(data[0],data[1],info).subscribe(data=>{
                if(data['status'])
                {
                  
                    for(let key in data[0]){
                      data[0][key]['status']=false;
                      this.cnavsList.push(data[0][key]);

                    }
                  

                }

                
            });
       });

     
  }


  dismissView(){

    this.viewCtrl.dismiss();

  }


  addToCanvas(i)
  {
    this.cnavsList[i]['status']=true;

    this.credit.check().then(data=>{

      
      let info={'image_id':this.image_id,
                'board_id': this.cnavsList[i]['image_board_id']
 
      }
      
       this.sugServices.imgAddCanvas(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              this.cnavsList[i]['status']=true;

                
               
              }
              
 
             
 
            
       });
     
     });
 


  }



}
