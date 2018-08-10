import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SettingServices } from '../../services/SettingService';
import { CreditService } from '../../services/CreditService';



@IonicPage()
@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html',
})
export class PrivacyPage {

  tbl:string="";
  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             private setService:SettingServices,
            private credit:CreditService,
            private viewCtrl:ViewController) {
              this.tbl=this.navParams.data['tbl'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacyPage');
  }

  public(){
    var info={}
    info['visibility']=0;
    info['st']=this.tbl;
    this.credit.check().then(data=>{
  
                
      
      this.setService.privacy(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          
          this.viewCtrl.dismiss({
            val:0
          })
         
          
        }
            
      });
        
    });

  }

  friend(){
    var info={}
    info['visibility']=1;
    info['st']=this.tbl;
    this.credit.check().then(data=>{
  
                
      
      this.setService.privacy(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          
        
         
          this.viewCtrl.dismiss({
            val:1
          })
          
        }
            
      });
        
    });


  }

  private(){
    console.log(15);
    var info={}
    info['visibility']=2;
    info['st']=this.tbl;
    this.credit.check().then(data=>{
  
                
      
      this.setService.privacy(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          
          
          this.viewCtrl.dismiss({
            val:2
          })
         
          
        }
            
      });
        
    });


  }
}
