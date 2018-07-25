import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar } from 'ionic-angular';
import { ForgetPasswordPage } from '../forget-password/forget-password';
import { SignUpPage } from '../sign-up/sign-up';
import {  NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { ConnectionServices } from '../../services/ServerConnection';
import { SignInServices } from '../../services/SignInServices';
import { Storage } from '@ionic/storage';
import { SignUpServices } from '../../services/SignUpServices';
import { AlertServices } from '../../services/AlertServices';
import { OtpPage } from '../otp/otp';
import { CreditService } from '../../services/CreditService';
import { LandingPage } from '../landing/landing';
import { MainTabPage } from '../main-tab/main-tab';







@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  email:boolean=true;
  
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  @ViewChild(Navbar) navbar:Navbar;

  constructor(private navCtrl: NavController,
    private con:ConnectionServices,
  private signInService:SignInServices,
  private signUpService:SignUpServices,
  private alertCtrl:AlertServices,
  private storage:Storage,
  private credit:CreditService) {
    
   
  }

  ionViewWillEnter()
  {

    this.navbar.hideBackButton=true;
    this.email=true;
    this.storage.remove('user');
   

  }


  signIn(form:NgForm)
  {
    console.log(form);
     if(this.email)
     {
       this.signInEmail(form);

     }
     else{

      this.signUpPhone(form);

     }

  }


  signInEmail(form:NgForm)
  {

    this.signInService.submitWithEmail(
      form.value.signInEmail.toLowerCase(),
      form.value.signInPassword
      ).subscribe(data=>{
        console.log(data);
        if(data['status'])
        {
             this.storage.remove('user'); 
             this.storage.remove('loged');  
             this.storage.ready().then(()=>{
                      this.storage.set('user',data['user']);
                      this.storage.set('loged',data['loged']);
                      this.storage.ready().then(()=>{
                      
                        this.navCtrl.push(MainTabPage);
                      });
              
            });
            

           
           
            
        }
        else{

            this.alertCtrl.errorALert(data['error']);
        }

       
    },
    error=>{

        this.alertCtrl.errorALert("Could not connect to server.");


    }
);

  }

  signUpPhone(form:NgForm)
  {

   

    let status=this.signInService.submitWithPhone(
      form.value.signInPhone,
      form.value.signInPassword
     ).subscribe(data=>{
                          console.log(data);
                          if(data['status'])
                          {

                              this.storage.remove('user');
                              this.storage.ready().then(()=>{
                                this.storage.set('user',data['user'])
                                this.storage.ready().then(()=>{
                                  this.otpCheckVerification();
                                  console.log(22);
                              });
                                
                              });
                              
                                  
                              
                              this.storage.set('loged',0) 
                            
                           
                            

                          }
                          else{

                              this.alertCtrl.errorALert(data['error']);
                          }

                        
                      },
                      error=>{

                          this.alertCtrl.errorALert("Could not connect to server.");


                      }
                    );

  }


  otpCheckVerification(){

    console.log("i m here");

   
    this.credit.check().then(data=>{

          // console.log(data[0]);

            this.signInService.otpCheck(data[0]).subscribe(data=>{

                
                  if(data['status'])
                  {
                      if(parseInt(data[0][0]['verify'])==1)
                      {
                         
                          console.log(data[0][0]['loged']);
                          
                      }
                      else{
          
                        this.storage.set('loged',data[0][0]['loged'])
                        this.navCtrl.push(OtpPage);
                      }
          
                  }
                  else{
          
                      this.alertCtrl.errorALert("Could not connect to server.");
          
                  }
          
          
          
              },
              error=>{
          
                console.log(error);
          
                  this.alertCtrl.errorALert("Could not connect to server.");
          
          
              });
          ;



    });
    



}



  goToRoot()
  {
    this.navCtrl.popToRoot();
  }

  goToSignUp(){

    this.navCtrl.push(SignUpPage);

  }

  goToForgetPassword()
{
  this.navCtrl.push(ForgetPasswordPage);

}


changeSubmitWithEmail()
{
  this.email=true;
}


chanegSubmitWithNumber()
{
  this.email=false;
}


}
