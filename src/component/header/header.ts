import { Component, Injectable} from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { SearchPage } from '../../pages/search/search';
import { MessagePage } from '../../pages/message/message';
import { RequestPage } from '../../pages/request/request';
import { NotificationPage } from '../../pages/notification/notification';


@Component({
  selector: 'header-temp',
  template: `
  <ion-grid>
  <ion-row>

      <ion-col >
      <button ion-button clear menuToggle>MUW
      </button>
      </ion-col>
      <ion-col></ion-col>
    
      <ion-col text-center><ion-icon name="custom-icon6" class='iconHeader' (click)="goToSearch()"></ion-icon></ion-col>
      <ion-col text-center ><ion-icon name="custom-icon9" class='iconHeader' (click)="goToMessage()"></ion-icon></ion-col>
      <ion-col text-center ><ion-icon name="custom-icon8" class='iconHeader' (click)="goToRequest()"></ion-icon></ion-col>
      <ion-col text-center ><ion-icon name="custom-icon7" class='iconHeader' (click)="goToNotification()"></ion-icon></ion-col>

  </ion-row>
</ion-grid>
            `,
 
})

@Injectable()
export class HeaderPage {
   
  
    constructor(public navCtrl: NavController,private menuCtrl:MenuController){
       
    }



  goToSearch(){

    this.navCtrl.push(SearchPage)

  }


  goToMessage(){

    this.navCtrl.push(MessagePage);

  }
  

  goToRequest(){

    this.navCtrl.push(RequestPage);

  }


  goToNotification(){

    this.navCtrl.push(NotificationPage);

  }







}