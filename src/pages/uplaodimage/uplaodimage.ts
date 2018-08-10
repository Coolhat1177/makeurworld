import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, AlertController } from 'ionic-angular';
import { LocationChooserPage } from '../../component/location/location';
import { AddlocationPage } from '../addlocation/addlocation';
import { CloudProvider } from '../../providers/cloud/cloud';
import { CreditService } from '../../services/CreditService';
import { UploadServices } from '../../services/UploadServices';



@IonicPage()
@Component({
  selector: 'page-uplaodimage',
  templateUrl: 'uplaodimage.html',
})
export class UplaodimagePage {
  emoCont:boolean=false;
  locationS:boolean=false;
  loction:string="";
  add:any={};
  upImg:any=['../../assets/imgs/0.jpg','assets/imgs/1.jpg','assets/imgs/2.jpg',
              'assets/imgs/3.jpg','assets/imgs/4.jpg','assets/imgs/5.jpg','assets/imgs/6.jpeg'];
  mode:string="Viral";
  link:string="";
  @ViewChild('describe') mytexttyping:ElementRef;
  emoIcon:any=[];
  icon1:any=[];
  typemode:string="detail";
  info:any={};
  loc:any={'full_add':''};
  loc_status:boolean=false;
  locationEdit:boolean=false;
  aboutEdit:boolean=false;
  removeLoct:boolean=false;
  editAble:boolean=false;
  data:boolean=true;
  modeValue:number=0;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl:ModalController,
              private cloud:CloudProvider,
              private viewCtrl:ViewController,
              private alertBox:AlertController,
              private credit:CreditService,
              private upServices:UploadServices
              ) {
                this.link=this.cloud.link;
                this.emoIcon=this.cloud.emoList[0];
                this.icon1=this.cloud.emo.icon;
                this.typemode=this.navParams.data['mode'];
                if(this.typemode=="detail"){
                  this.info=this.navParams.data['image'];
                 
                  if(this.info['pub_s']==0){
                    this.mode="Viral";
                    this.data=true;
                    this.modeValue=0;

                  }else{
                    this.mode="Private";
                    this.data=false;
                    this.modeValue=1;
                  }
                 

                }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UplaodimagePage');
  }

  removeImg(i){
    this.upImg.splice(i,1);

  }


  onToggle(ev){
    if(ev._value){
      this.mode="Viral";
      this.modeValue=0;

    }
    else{
      this.mode="Private";
      this.modeValue=1;
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

// new code-----------------------------------------------------------------------------------------------------------------------------------------------

  openLocation(){
    if(this.locationEdit)
    {
      this.locationEdit=false;
      this.removeLoct=false;
      this.loc_status=false;
    }
    else{

      this.locationEdit=true;
      // console.log(this.info['full_add']);

      if(this.info['full_add']!=''){
        console.log(15);
        this.removeLoct=true;

      }

    }
  }


  openAbout(){

    if(this.aboutEdit)
    {
      this.aboutEdit=false;
    }
    else{

      this.aboutEdit=true;

    }
    
  }

  CloseView(){
    this.viewCtrl.dismiss();
  }


  openEdit(){

    if(this.editAble)
    {
      this.editAble=false;
    }
    else{
      this.editAble=true;
    }

  }


  changeMode(){
    this.typemode="change";
  }




  saveLocation(loc){
    // console.log(15);
    this.loc=loc;
    
    console.log(this.loc);
    this.loc_status=true;

  }


  saveChange(){
    let c:string=this.info['about'];
    if(this.mytexttyping!== undefined){
      c=this.mytexttyping.nativeElement.innerHTML;
    
    }


    let info={};
			info['image_id']=this.info.image_id;
			info['image_about']=c;
			if(this.loc_status)
			{
        info['loc']=this.loc;
        info['loc']['address']=info['loc']['full_add']
      }
      else{
        let loc={};
        loc['lat']=this.info['lat'];
        loc['lng']=this.info['lng'];
        loc['town']=this.info['town'];
        loc['state']=this.info['state'];
        loc['country']=this.info['country'];
        loc['address']=this.info['full_add'];
        info['loc']=loc;
      }
      
      info['val']= this.modeValue;

      let alert = this.alertBox.create({
        title: 'Delete',
        message: 'Do you want to Change detail of image',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
           
          },
          {
            text: 'Ok',
            handler: () => {
              console.log(info);
              this.credit.check().then(data=>{

                this.upServices.detailImageCh(data[0],data[1],info).subscribe(data=>{
                  if(data['status'])
                  {
                    this.info['about']=data[0][0]['image_about'];
                    this.info['pub_s']=data[0][0]['pub_s'];
                    this.info['lat']=data[0][0]['lat'];
                    this.info['lng']=data[0][0]['lng'];
                    this.info['full_add']=data[0][0]['full_add'];
                    this.info['country']=info['loc']['country'];
                    this.info['state']=info['loc']['state'];
                    this.info['town']=info['loc']['town'];;
                    if(this.info['pub_s']==0){
                      this.mode="Viral";
                      this.data=true;
                      this.modeValue=0;
  
                    }else{
                      this.mode="Private";
                      this.data=false;
                      this.modeValue=1;
                    }


                    this.removeLoct=false;
                    this.editAble=false;
                    this.aboutEdit=false;
                    this.locationEdit=false;
                  }
                });
  
              
            });
              
            }
          }
        ]
      });
      alert.present();

      
    

  }

  removeLoction(){

    this.info['lat']="";
    this.info['lng']="";
    this.info['town']="";
    this.info['state']="";
    this.info['country']="";
    this.info['full_add']="";
    this.removeLoct=false;

  }



}
