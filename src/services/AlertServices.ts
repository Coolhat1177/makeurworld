import { Injectable } from "@angular/core";
import { AlertController } from "ionic-angular";



@Injectable()
export class AlertServices{
            constructor(private alertBox:AlertController){ }


        errorALert(mess:string){

            const alert = this.alertBox.create({
                title: 'Error',
              
                message: mess,
                buttons: [
                 
                  {
                    text: 'Cancel',
                    role: 'cancel',
                   
                  }
                ]
              });
          
              alert.present();
            

        }


}