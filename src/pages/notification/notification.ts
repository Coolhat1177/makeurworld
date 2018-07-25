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

  NotifiArray:any=[];
  last_time:string='';

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

        console.log(data)
      
        this.topHeader.notificationLoad(data[0],data[1]).subscribe(data=>{
          if(data['status'])
          {
            for(let key in data[0])
            {

              this.nservice.addNotifi(data[0][key]);
            }
           
            this.NotifiArray=this.nservice.getNotifi();
            this.last_time=this.NotifiArray[this.NotifiArray.length -1]['l_t']
            console.log(this.NotifiArray);
          }
           
        });
          
      })
  }


  doInfinite(event)
  {
    this.credit.check().then(data=>{

      var info={
        'l_t':this.last_time
      }
      
      this.topHeader.notificationLoadMore(data[0],data[1],info).subscribe(data=>{
        if(data['status'])
        {
          for(let key in data[0])
          {

            this.nservice.addNotifi(data[0][key]);
          }
         
          this.NotifiArray=this.nservice.getNotifi();
          this.last_time=this.NotifiArray[this.NotifiArray.length -1]['l_t']
          
        }

        if(event)
        {
          event.complete();
        }
         
      });
        
    })
  }

}
