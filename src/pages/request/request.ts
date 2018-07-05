import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { TopHeaderServices } from '../../services/TopHeaderService';
import { RequestService } from '../../services/RequestService';


@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private credit:CreditService,
    private topHeader:TopHeaderServices,
    private reqservice:RequestService) {
  }

  ionViewDidLoad() {
    this.requestLoad();
  }

  requestLoad()
  {
      this.credit.check().then(data=>{
      
        this.topHeader.requestLoad(data[0],data[1]).subscribe(data=>{

          if(data['status'])
          {
            for(let key in data[0])
              {
                this.reqservice.addRequest(data[0][key]);
              }
          }
              
        });
          
      })
  }

}
