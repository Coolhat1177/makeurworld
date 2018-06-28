import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar } from 'ionic-angular';
import { NgForm } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPasswordPage {

  submit={};
  @ViewChild(Navbar) navbar:Navbar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter()
  {

    this.navbar.hideBackButton=true;
    this.submit['email']=true;

  }



  forgetPassword(form:NgForm)
  {
      console.log(form);
  }


  goToBack()
  {
    this.navCtrl.pop();
  }


  changeSubmitWithEmail()
  {
    this.submit['email']=true;
  }


  chanegSubmitWithNumber()
  {
    this.submit['email']=false;
  }


}
