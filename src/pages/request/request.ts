import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { TopHeaderServices } from '../../services/TopHeaderService';
import { RequestService } from '../../services/RequestService';


@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {

  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;

  SwipedTabsIndicator :any= null;
  tabs:any=[];
  reqArray:any=[]
  reqSentArray:any=[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private credit:CreditService,
    private topHeader:TopHeaderServices,
    private reqservice:RequestService) {
      this.tabs=["Request Pending","Request Sent"];
  }


  ionViewWillEnter(){
    this.SwipedTabsSlider.slideTo(0,100);
}
  
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  selectTab(index) {    
  
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
  	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
  	{
  		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  	}
    
    }

  animateIndicator($event) {
  	if(this.SwipedTabsIndicator)
   	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }
 

  ionViewDidLoad() {
    this.requestLoad();
    this.sentRequestLoad();
  }

  requestLoad()
  {
      this.credit.check().then(data=>{
      
        this.topHeader.requestLoad(data[0],data[1]).subscribe(data=>{

          if(data['status'])
          {
            for(let key in data[0])
              {
                data[0][key]['accept']=false;
                data[0][key]['show']=true;
                this.reqservice.addRequest(data[0][key]);
              }
              this.reqArray=this.reqservice.getRequest();

          }
              
        });
          
      })
  }

  sentRequestLoad(){
    this.credit.check().then(data=>{
      
      this.topHeader.sentRequestLoad(data[0],data[1]).subscribe(data=>{

        if(data['status'])
        {
          for(let key in data[0])
            {
              data[0][key]['cancel']=true;
              this.reqservice.addSentRequest(data[0][key]);
            }
            this.reqSentArray=this.reqservice.getSentRequest();
        }
            
      });
        
    })

  }


  acceptRequest(i){
    this.credit.check().then(data=>{

      var info={
              frnd_id:this.reqArray[i]['from_id']
      }
      
      this.reqservice.acceptRequest(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          this.reqArray[i]['show']=false;
          this.reqArray[i]['accept']=true;
           
        }
            
      });
        
    });

    this.reqArray[i]['show']=false;
    this.reqArray[i]['accept']=true;


  }

  ignoreRequest(i){


    this.credit.check().then(data=>{

      var info={
              frnd_id:this.reqArray[i]['from_id']
      }
      
      this.reqservice.IgnoreRequest(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          
          this.reqArray[i]['show']=false;
          this.reqArray[i]['accept']=false;
        }
            
      });
        
    });

    this.reqArray[i]['show']=false;
    this.reqArray[i]['accept']=false;

  }


  cancelRequest(i){

    this.credit.check().then(data=>{

      var info={
              frnd_id:this.reqSentArray[i]['to_id']
      }
      
      this.reqservice.cancelRequest(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          
          this.reqSentArray[i]['cancel']=true;
          
        }
            
      });
        
    });

    this.reqSentArray[i]['cancel']=true;

  }


  addFriend(i){
    this.credit.check().then(data=>{

      var info={
              frnd_id:this.reqSentArray[i]['to_id']
      }
      
      this.reqservice.AddFriend(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          
          this.reqSentArray[i]['cancel']=false;
          
        }
            
      });
        
    });

    this.reqSentArray[i]['cancel']=false;

  }

}
