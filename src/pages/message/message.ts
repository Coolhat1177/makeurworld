import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { TopHeaderServices } from '../../services/TopHeaderService';
import { MessageService } from '../../services/MessageService';


@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

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

          }
          
        });
          
      })
  }

}
