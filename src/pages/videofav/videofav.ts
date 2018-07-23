import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { SuggestionServices } from '../../services/SuggestionServices';




@IonicPage()
@Component({
  selector: 'page-videofav',
  templateUrl: 'videofav.html',
})
export class VideofavPage {


  favList:any=[];
  video_id:string;

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             private viewCtrl:ViewController,
             private credit:CreditService,
             private sugServices:SuggestionServices) {
               this.video_id=this.navParams.data['video_id'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideofavPage');
    this.loadFav();
  }

  dismissView(){

    this.viewCtrl.dismiss();

  }


  loadFav(){

    this.credit.check().then(data=>{

    
      let info={'video_id':this.video_id,
                'text':''
 
      }

      console.log(info);
      
       this.sugServices.vidFav(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              
                for(let key in data[0]){
                  data[0][key]['status']=false;
                  this.favList.push(data[0][key]);

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

            this.favList=[];

            this.sugServices.vidFav(data[0],data[1],info).subscribe(data=>{
                if(data['status'])
                {
                  
                    for(let key in data[0]){
                      data[0][key]['status']=false;
                      this.favList.push(data[0][key]);

                    }
                  

                }

                
            });
       });

     
  }


  addToVid(i)
  {
    this.favList[i]['status']=true;

    this.credit.check().then(data=>{

      
      let info={'video_id':this.video_id,
                'fav_id': this.favList[i]['fav_id']
 
      }
      
       this.sugServices.vidAddFav(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
                  this.favList[i]['status']=true;

                
               
              }
              
 
             
 
            
       });
     
     });
 


  }




}
