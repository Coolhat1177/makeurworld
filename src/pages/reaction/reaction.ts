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
  total:number=0;
  iconArray=['../../assets/icon/1f60d.svg','../../assets/icon/1f632.svg','../../assets/icon/1f600.svg','../../assets/icon/1f622.svg','../../assets/icon/1f621.svg'];

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
    this.loadReactionNo();
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

  loadReactionNo(){

    // console.log(22);

    this.credit.check().then(data=>{

    
      let info={'activity_id': this.activity_id
 
      }
      
      


      this.commentS.loadCurReaction(data[0],data[1],info).subscribe(data=>{
        if(data['status'])
        {
          
          
           this.total=data[0][0]['rate_by'];
          
          
         
        }

       //  console.log(this.reactStatus);

       
  });
     
     });

  }



  dismissView()
  {
      this.viewCtrl.dismiss();
  }

}
