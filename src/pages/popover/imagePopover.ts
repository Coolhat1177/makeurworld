import { Component, Injectable, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommentPage } from '../../pages/comment/comment';
import { ReactionPage } from '../../pages/reaction/reaction';
import { ModalController, PopoverController, NavParams, ActionSheetController, AlertController, ViewController } from 'ionic-angular';
import { ReactPage } from '../../pages/react/react';
import { CreditService } from '../../services/CreditService';
import { ReactionServices } from '../../services/InteractionServices';
import { ViralServices } from '../../services/ViralServices';
import { AlertServices } from '../../services/AlertServices';

@Component({
  selector: 'imgpop-temp',
  styles:[`
            .popOption
            {
                
                font-size: 1.5em;
                white-space: nowrap;
                padding: 15px 20px;;
                text-align: center;
            
            }

           
            .list-md
            {
                margin:0px;
            }
            .list-md > .item-block:last-child .item-inner
            {
                border:0px;
            }

            .item-md h3, .item-md h4, .item-md h5, .item-md h6
            {
                color:black;
            }

            .popOvB
            {
                font-size:1.4em;
                font-weight:bolder;
                color:black;
                

            }

            .item-md
            {
                padding:0px;
            }

            .item-md .item-button
            {
                padding:0px;
            }

            .item-md [item-left], .item-md [item-right], .item-md [item-start], .item-md [item-end]
            {
                margin:0px;
            }

            .item-inner
            {
                padding:5px;
                width:150px;
            }
            .popOverUR
            {
                border-bottom:1px solid  #eee;
                padding:5px;
            }

            .popOvB
            {
                width:40px;
                height:45px;
                padding:5px !important;
                text-align:center;
            }

            .ownreaction img
            {
                width:25px;
                height:25px;
            }
            
           
  
  `],
  template: `
<ion-grid >
  <ion-row class='popOverUR'>
        <ion-list no-lines>
            <ion-item >
              <ion-avatar item-start>
              <img [src]="pic_url"/>
              </ion-avatar>
              <h3>{{full_name }}</h3>
              <button ion-button clear item-end (tap)="moreOption()" class='popOvB'>
              <ion-icon ios="ios-more" md="md-more"></ion-icon>
              </button>
            </ion-item>
          </ion-list>
    </ion-row>
  <ion-row>
     
       
        <ion-col  class='popOption'  (tap)="suggestFriend()">

            <ion-icon name="paper-plane"></ion-icon>
        </ion-col>

        <ion-col  class='popOption' *ngIf="delete_status"  (tap)="deleteFromStore()">
            <ion-icon ios="ios-trash" md="md-trash"></ion-icon>
        </ion-col>
        <ion-col  class='popOption' *ngIf="add_status" (tap)="addStore()">
            <ion-icon name="add"></ion-icon>
        </ion-col>
        <ion-col  class='popOption' (tap)="reactPop($event)">
        <div [innerHTML]="reaction" class='ownreaction'>
        </div>
            

        </ion-col>
        <ion-col  class='popOption' (tap)="reactionList()">
            <ion-icon name='custom-icon23'></ion-icon>
        </ion-col>
        <ion-col  class='popOption' (tap)="commentView()">
            <ion-icon name='custom-icon12'></ion-icon>
        </ion-col>
               
                
               
                
                
               
   

    </ion-row>
</ion-grid>
            `,
  inputs:['activity']
})

@Injectable()
export class ImageOptionPop implements OnInit {
  
    add_status:boolean=false;
    delete_status=false;
    reactStatus:any={ov_rate:0,
        rate_by:0,
        activity_id:'',
        t_rev:0 };
    media_id:string='';
    full_name:string='';
    pic_url:string='';
    user_id:string='';
    reaction:string="<img src='../../assets/icon/express.svg'>";
    iconArray=['../../assets/icon/1f60d.svg','../../assets/icon/1f632.svg','../../assets/icon/1f600.svg','../../assets/icon/1f622.svg','../../assets/icon/1f621.svg'];
    media_cont:string="";

  
    constructor(private navParams: NavParams,
                private modelCtr:ModalController,
                private popCtrl:PopoverController,
                private credit:CreditService,
                private intrService:ReactionServices,
                private actioSheet:ActionSheetController,
                private viralS:ViralServices,
                private alertM:AlertServices,
                private alertBox:AlertController,
                private viewCtrl:ViewController){

                            this.add_status=this.navParams.data['add_status'];
                            this.delete_status=this.navParams.data['delete_status'];
                            this.reactStatus.activity_id=this.navParams.data['activity_id'];
                            this.media_id=this.navParams.data['media_id'];
                            this.full_name=this.navParams.data['full_name'];
                            this.pic_url=this.navParams.data['pic_url'];
                            this.user_id=this.navParams.data['user_id'];
                            this.media_cont=this.navParams.data['media_cont'];
                            console.log( this.reactStatus.activity_id)
                        

    }


    moreOption(){


        if(this.navParams.data['reportFn']== undefined){

            this.navParams.data['moreOption'](this.media_id,this.actioSheet,this.modelCtr);

        }
        else{

            this.navParams.data['moreOption'](this.media_id,this.actioSheet,this.modelCtr,this.navParams.data['reportFn'],this.credit,this.viralS,this.alertM);

        }

        

    }


    deleteFromStore(){
        // console.log(this.media_cont);

        if(this.media_cont=="" || this.media_cont==undefined){
            this.navParams.data['deleteFn'](this.media_id,this.credit,this.viralS,this.alertBox).then((data)=>{
      
        
                this.viewCtrl.dismiss({data:data});
                
              });
           
             

        }else{
            this.navParams.data['deleteFn'](this.media_id,this.credit,this.viralS,this.alertBox,this.media_cont).then((data)=>{
      
        
                this.viewCtrl.dismiss({data:data});
                
              });
             
        }

     
  
      
  

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Pop');
       
      }

      ngOnInit(){
        this.loadInitialReactionV();
      }


    addStore(){
            this.add_status=this.navParams.data['addStatus'](this.media_id,this.actioSheet,this.credit,this.viralS).then((data)=>{
               
                    this.viewCtrl.dismiss({data:false})


            });
    }


    suggestFriend(){

        this.navParams.data['suggestStatus'](this.media_id,this.modelCtr);

    }


    commentView()
  {
    
   
    const profilePick=this.modelCtr.create(CommentPage,{'activity_id':this.reactStatus.activity_id});
    profilePick.present();
    profilePick.onDidDismiss(()=>{
      
    });

  }

  reactionList()
  {
    // console.log(this.activity)
    const profilePick=this.modelCtr.create(ReactionPage,{'activity_id':this.reactStatus.activity_id});
    profilePick.present();
    profilePick.onDidDismiss(()=>{

      
      
    });
  }


  reactPop(ev)
  {

    const pop=this.popCtrl.create(ReactPage,{'activity_id':this.reactStatus.activity_id});
    pop.present({ev:ev});
    pop.onDidDismiss(()=>{

      this.loadInitialReactionV();

    //   this.reactEmiiter.emit();

    });

  }


  loadInitialReactionV(){

    // console.log(22);

    this.credit.check().then(data=>{

    
      let info={'activity_id':this.reactStatus.activity_id
 
      }
      
       this.intrService.loadCurReaction(data[0],data[1],info).subscribe(data=>{
        //    console.log(data);
             if(data['status'])
             {
               
               
                this.reactStatus['rate_by']=data[0][0]['rate_by'];
                this.reactStatus['ov_rate']=data[0][0]['own_rate'];
                if(this.reactStatus['ov_rate']!=""){
                    this.reaction="<img src='"+this.iconArray[this.reactStatus['ov_rate']]+"'>";

                }
               
              
             }

             console.log(data);
 
            
       });
     
     });

  }
}