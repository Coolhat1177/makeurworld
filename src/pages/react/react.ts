import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ReactionServices } from '../../services/InteractionServices';
import { CreditService } from '../../services/CreditService';



@IonicPage()
@Component({
  selector: 'page-react',
  templateUrl: 'react.html',
})
export class ReactPage {

  reactIcon:any;
  activity_id:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private reactS:ReactionServices,
              private credit:CreditService,
              private viewCtrl:ViewController
             ) {

                this.reactIcon=this.reactS.getEmo();
               this.activity_id=this.navParams.data['activity_id']

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReactPage');
  }


  reactOn(i){


    this.credit.check().then(data=>{

    
      let info={'activity_id':  this.activity_id,
                'rate_val':i
 
      }
      
       this.reactS.submitReact(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
               
               
               
            
               this.viewCtrl.dismiss();
              
             }

            //  console.log(this.reactStatus);
 
            
       });
     
     });

    

  }

}
