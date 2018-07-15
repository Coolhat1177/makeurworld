import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { ReactionServices } from '../../services/InteractionServices';



@IonicPage()
@Component({
  selector: 'page-reaction',
  templateUrl: 'reaction.html',
})
export class ReactionPage {

  activity_id:string;
  reactionArry:any=[];
  iconArray=['custom-icon13','custom-icon14','custom-icon15','custom-icon16','custom-icon17'];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    private viewCtrl:ViewController,
    private credit:CreditService,
          private commentS:ReactionServices) {
      this.activity_id=this.navParams.data['activity_id'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReactionPage');
    this.loadReaction();
  }


  loadReaction(){

                this.credit.check().then(data=>{

                
                  var info={
                    'activity_id':this.activity_id,
                   
                  }
                  this.commentS.loadReact(data[0],data[1],info).subscribe(data=>{
                        if(data['status'])
                        {
                          for(let key in data[0])
                          {
                            this.reactionArry.push(data[0][key]);
                          }


                         

                            console.log(this.reactionArry);

                        
                        

                        }

                       
                      
                  });
                
                });

  }


  dismissView()
  {
      this.viewCtrl.dismiss();
  }

}
