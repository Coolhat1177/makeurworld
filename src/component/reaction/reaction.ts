import { Component, Injectable, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommentPage } from '../../pages/comment/comment';
import { ReactionPage } from '../../pages/reaction/reaction';
import { ModalController, PopoverController } from 'ionic-angular';
import { ReactPage } from '../../pages/react/react';
import { ReactionServices } from '../../services/InteractionServices';
import { CreditService } from '../../services/CreditService';

@Component({
  selector: 'reaction-temp',
  styles:[`


  
  
  `],
  template: `
  <ion-row class="padding5 lwBorder">
            <ion-col class='viewerFooteropt1'>
            <button ion-button clear  (click)="reactPop($event)" class='viewClose' innerHTML="{{reaction}}">
                    

                </button>
            </ion-col>
            <ion-col class='viewerFooteropt1'>
            <button ion-button clear  (click)="reactionList()" class='viewClose'>
               {{reactStatus['rate_by']}}<ion-icon name="add"></ion-icon>
                </button>
              
            </ion-col>
            <ion-col class='viewerFooteropt1'>
            <button ion-button clear  (click)="commentView($event)" class='viewClose'>
            {{reactStatus['t_rev']}}<ion-icon name='custom-icon12'></ion-icon>

            </button>
            </ion-col>
            </ion-row>
            `,
  inputs:['activity']
})

@Injectable()
export class ReactionCenterPage implements OnInit{
    @Input() activity ;
    @Output() reactEmiiter= new EventEmitter();
    reaction:string="<img src='../../assets/icon/express.svg'>";
    iconArray=['../../assets/icon/1f60d.svg','../../assets/icon/1f632.svg','../../assets/icon/1f600.svg','../../assets/icon/1f622.svg','../../assets/icon/1f621.svg'];
    reactStatus:any={ov_rate:0,
      rate_by:0,
      activity_id:'',
      t_rev:0 };
  
    constructor(private modelCtr:ModalController,
      private popCtrl:PopoverController,
      private intrService:ReactionServices,
      private credit:CreditService){
       
    }

    ngOnInit(){
      this.loadInitialReactionV();
    }

    commentView()
  {
    
   
    const profilePick=this.modelCtr.create(CommentPage,{'activity_id':this.activity['activity_id']});
    profilePick.present();
    profilePick.onDidDismiss(()=>{
      this.loadInitialReactionV();
      
    });

  }

  reactionList()
  {
    // console.log(this.activity)
    const profilePick=this.modelCtr.create(ReactionPage,{'activity_id':this.activity['activity_id']});
    profilePick.present();
    profilePick.onDidDismiss(()=>{

      this.loadInitialReactionV();
      
    });
  }


  reactPop(ev)
  {

    const pop=this.popCtrl.create(ReactPage,{'activity_id':this.activity['activity_id']});
    pop.present({ev:ev});
    pop.onDidDismiss(()=>{

      

     this.loadInitialReactionV();

    });

  }


  loadInitialReactionV(){

    // console.log(22);

    this.credit.check().then(data=>{

    
      let info={'activity_id': this.activity['activity_id']
 
      }
      
       this.intrService.loadCurReaction(data[0],data[1],info).subscribe(data=>{
             if(data['status'])
             {
               
               
                this.reactStatus['rate_by']=data[0][0]['rate_by'];
                this.reactStatus['ov_rate']=data[0][0]['own_rate'];
            
                if(this.reactStatus['ov_rate']!=""){
                  this.reaction="<img src='"+this.iconArray[this.reactStatus['ov_rate']]+"'>";

              }
              
             }

            //  console.log(this.reactStatus);
 
            
       });


       this.intrService.loadCurComment(data[0],data[1],info).subscribe(data=>{
        if(data['status'])
        {
          
          
           this.reactStatus['t_rev']=data[0][0]['t_rev'];
       
          
         
        }

       //  console.log(this.reactStatus);

       
  });
     
     });

  }


}