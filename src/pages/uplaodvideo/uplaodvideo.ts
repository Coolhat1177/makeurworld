import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CloudProvider } from '../../providers/cloud/cloud';
import { AddlocationPage } from '../addlocation/addlocation';


@IonicPage()
@Component({
  selector: 'page-uplaodvideo',
  templateUrl: 'uplaodvideo.html',
})
export class UplaodvideoPage {

  emoCont:boolean=false;
  locationS:boolean=false;
  loction:string="";
  add:any={};
  mode:string="Viral";
  link:string="";
  @ViewChild('describe') mytexttyping:ElementRef;
  emoIcon:any=[];
  icon1:any=[];

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             private modalCtrl:ModalController,
              private cloud:CloudProvider) {
                this.link=this.cloud.link;
                this.emoIcon=this.cloud.emoList[0];
                this.icon1=this.cloud.emo.icon;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UplaodmusicPage');
  }

  onToggle(ev){
    if(ev._value){
      this.mode="Viral";

    }
    else{
      this.mode="Private";
    }
  }


  addLocation(){
    console.log(15);
    const map=this.modalCtrl.create(AddlocationPage);
    map.present();
    map.onDidDismiss((data)=>{
       this.locationS=data['status'];
       console.log( this.locationS)
       if(this.locationS){
          this.add=data['loc'];
            this.loction=this.add['town']+" "+this.add['state']+" "+this.add['country'];
        // console.log( this.loction);
          }
     
    });
    
  }


  removLocation(){
    this.locationS=false;
    this.loction="";
    this.add={};

  }

  openEmo(){
    if(!this.emoCont)
    {
      this.emoCont=true;
    }
    else{
      this.emoCont=false;
    }
    

  }

  closeEmoBox(){
    this.emoCont=false;

  }


  addEmojs(i){

    let c=this.mytexttyping.nativeElement;; 
   
    let text = c.innerHTML;
    
    let imgStr = "<span><img src='"+this.link+this.emoIcon[i]+"'></span>"
  
    c.innerHTML = text+imgStr;
    // this.myFunction(i);

    
  }


  setEmoDisplay(i){
    // console.log(i)
    this.emoIcon=this.cloud.emoList[i];
    // console.log(this.cloud.emoList)

  }

}
