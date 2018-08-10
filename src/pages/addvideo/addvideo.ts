import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { FavService } from '../../services/FavServices';


@Component({
  selector: 'page-addvideo',
  templateUrl: 'addvideo.html',
})
export class AddvideoPage {
  fav_id:string;
  videoArray:any=[];

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
            private viewCtrl:ViewController,
            private credit:CreditService,
            private fService:FavService) {
              this.fav_id=this.navParams.data['fav_id'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddvideoPage');

    this.loadVideoAdd();

  }


  dismissView(){
    this.viewCtrl.dismiss();
  }


  loadVideoAdd(){
    this.credit.check().then(data=>{

    
      let info={'fav_id':this.fav_id,
               
 
      }
      
       this.fService.videoForFav(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              
                for(let key in data[0]){
                  data[0][key]['status']=false;
                  this.videoArray.push(data[0][key]);

                }
               console.log(this.videoArray);
 
             }
 
            
       });
     
     });

  }


  addVideoTo(i){

    this.credit.check().then(data=>{

    
      let info={'fav_id':this.fav_id,
                'video_id':this.videoArray[i]['video_id']
               
 
      }
      
       this.fService.videoToFav(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
              
              this.videoArray[i]['status']=true;

                }
              
 
             
 
            
       });
     
     });

     this.videoArray[i]['status']=true;

  }

}
