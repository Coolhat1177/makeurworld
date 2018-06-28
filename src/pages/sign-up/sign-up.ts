import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,Navbar } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { SignUpServices } from '../../services/SignUpServices';
import { OtpPage } from '../otp/otp';
import { AlertServices } from '../../services/AlertServices';
import { Storage } from '@ionic/storage';
import { CreditService } from '../../services/CreditService';
import { SignInServices } from '../../services/SignInServices';
import { LandingPage } from '../landing/landing';


@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  email:boolean=false;

  @ViewChild(Navbar) navbar:Navbar;

  selectOptions = ['Male', 'Female'];

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private signUpService:SignUpServices,
    private alertCtrl:AlertServices,
    private storage:Storage,
    private credit:CreditService,
    private signInService:SignInServices) {
  }


  ionViewWillEnter()
  {

    this.navbar.hideBackButton=true;
    this.email=false;

  }
  


  signUp(form:NgForm)
  {
    
    
    if(this.email)
    {
     
      this. signUpEmail(form);
    }
    else{
    
      this.signUpPhone(form);
    }

  }


  signUpEmail(form:NgForm)
  {
    this.signUpService.submitWithEmail(form.value.signUpFirstName,
      form.value.signUpLastName,
      form.value.signUpEmail.toLowerCase(),
      form.value.signUpPassword,
      form.value.signUpBirthDay,
      form.value.signUpGender).subscribe(data=>{
        console.log(data);
        if(data['status'])
        {
            this.storage.set('user',data['user']);
            this.storage.set('loged',data['loged']);
            this.navCtrl.push(LandingPage);

        }
        else{

            this.alertCtrl.errorALert(data['error']);
        }

       
    },
    error=>{

        this.alertCtrl.errorALert("Could not connect to server.");


    }
);
;
  }


  signUpPhone(form:NgForm)
  {
    
    let status=this.signUpService.submitWithPhone(form.value.signUpFirstName,
      form.value.signUpLastName,
      form.value.signUpPhoneNumber,
      form.value.signUpPassword,
      form.value.signUpBirthDay,
      form.value.signUpGender).subscribe(data=>{
                          console.log(data);
                          if(data['status'])
                          {
                             
                              this.storage.set('loged',0) 
                            
                            
                              this.storage.remove('user');
                              this.storage.ready().then(()=>{
                                this.storage.set('user',data['user'])
                                this.storage.ready().then(()=>{
                                  this.otpCheckVerification();
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
          
                      this.alertCtrl.errorALert("Could not connect to server.1");
          
                  }
          
          
          
              },
              error=>{
          
                console.log(error);
          
                  this.alertCtrl.errorALert("Could not connect to server.2");
          
          
              });
          ;



    });
    



}



  goToBack()
  {
    this.navCtrl.pop();
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
