import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { TopHeaderServices } from '../../services/TopHeaderService';
import { NotifiService } from '../../services/NotifiService';



@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private credit: CreditService,
     private topHeader:TopHeaderServices,
    private nservice:NotifiService) {
  }

  ionViewDidLoad() {
    this.notificationLoad();
  }

  notificationLoad()
  {
      this.credit.check().then(data=>{
      
        this.topHeader.notificationLoad(data[0],data[1]).subscribe(data=>{
          if(data['status'])
          {
            for(let key in data[0])
            {

              this.nservice.addNotifi(data[0][key]);
            }

            console.log(this.nservice.getNotifi());
          }
           
        });
          
      })
  }

}
