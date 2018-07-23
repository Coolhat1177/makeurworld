import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { TopHeaderServices } from '../../services/TopHeaderService';
import { MessageService } from '../../services/MessageService';
import { ChatboxPage } from '../chatbox/chatbox';


@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  MessageArray:any=[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private credit:CreditService,
     private topHeader:TopHeaderServices,
     private messService:MessageService) {
   
  }



  ionViewDidLoad() {
    
    this.messageLoad();
  }

  messageLoad()
  {
      this.credit.check().then(data=>{
      
        this.topHeader.messageLaod(data[0],data[1]).subscribe(data=>{

          if(data['status'])
          {
            for( let key in data[0] )
            {
              this.messService.addMessage(data[0][key]);
            }

            this.MessageArray=this.messService.getMessage();

          }
          
        });
          
      })
  }




  openChat(i){

      this.navCtrl.push(ChatboxPage,
                        {chatWith_id:this.MessageArray[i]['from_id'],
                          });




  }

  




}
