import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { SignUpServices } from '../../services/SignUpServices';
import { CreditService } from '../../services/CreditService';
import { AlertServices } from '../../services/AlertServices';
import { LandingPage } from '../landing/landing';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private signUpServices:SignUpServices,
    private credit:CreditService,
    private alertCtrl:AlertServices,
    private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }

  otp(form:NgForm){


    console.log(form.value.otpNumber);

      this.credit.check().then(data=>{

          this.signUpServices.otpConformation(form.value.otpNumber,data[0]).subscribe(data=>{
              if(data['status'])
              {
                  if(data[0][0]['status'])
                  {
                      this.storage.set('loged',data[0][0]['loged'])
                      this.navCtrl.push(LandingPage);
                  }
                  else{
                    this.alertCtrl.errorALert(data[0][0]['message']);
                  }
              }
              else{
                this.alertCtrl.errorALert("Could not connect to server.");
              }
          });

      });

    

  }


  goToRoot()
  {
    this.navCtrl.popToRoot();
  }

}
