import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { CommentPage } from '../../pages/comment/comment';
import { ReactionPage } from '../../pages/reaction/reaction';
import { ModalController, PopoverController } from 'ionic-angular';
import { ReactPage } from '../../pages/react/react';

@Component({
  selector: 'reaction-temp',
  template: `
  <ion-row class="padding5 lwBorder">
            <ion-col class='viewerFooteropt1'>
            <button ion-button clear  (click)="reactPop($event)" class='viewClose'>
                <ion-icon name="paper-plane"></ion-icon>
                </button>
            </ion-col>
            <ion-col class='viewerFooteropt1'>
            <button ion-button clear  (click)="reactionList()" class='viewClose'>
               {{activity['rate_by']}}<ion-icon name="add"></ion-icon>
                </button>
              
            </ion-col>
            <ion-col class='viewerFooteropt1'>
            <button ion-button clear  (click)="commentView($event)" class='viewClose'>
            {{activity['t_rev']}}<ion-icon name='custom-icon12'></ion-icon>

            </button>
            </ion-col>
            </ion-row>
            `,
  inputs:['activity']
})

@Injectable()
export class ReactionCenterPage {
    @Input() activity ;
    @Output() reactEmiiter= new EventEmitter();

  
    constructor(private modelCtr:ModalController,private popCtrl:PopoverController){
       
    }


    commentView()
  {
    
   
    const profilePick=this.modelCtr.create(CommentPage,{'activity_id':this.activity['activity_id']});
    profilePick.present();
    profilePick.onDidDismiss(()=>{
      
    });

  }

  reactionList()
  {
    // console.log(this.activity)
    const profilePick=this.modelCtr.create(ReactionPage,{'activity_id':this.activity['activity_id']});
    profilePick.present();
    profilePick.onDidDismiss(()=>{

      this.reactEmiiter.emit();
      
    });
  }


  reactPop(ev)
  {

    const pop=this.popCtrl.create(ReactPage,{'activity_id':this.activity['activity_id']});
    pop.present({ev:ev});
    pop.onDidDismiss(()=>{

      

      this.reactEmiiter.emit();

    });

  }
}