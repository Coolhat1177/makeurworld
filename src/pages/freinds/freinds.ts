import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ActionSheetController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { RequestService } from '../../services/RequestService';
import { ChatboxPage } from '../chatbox/chatbox';


@IonicPage()
@Component({
  selector: 'page-freinds',
  templateUrl: 'freinds.html',
})
export class FreindsPage {

  @ViewChild('SwipedTabsSlider1') SwipedTabsSlider: Slides ;
  
  SwipedTabsIndicator :any= null;
  tabs:any=[];
  friendList:any=[];
  attachList:any=[];
  attacheList:any=[];
 
  constructor(public navCtrl: NavController,
              private credit:CreditService,
              private reqService:RequestService,
              private actionSheet:ActionSheetController,
            
             ) {
    this.tabs=["Friends","Attached","Attache"];
    
  }
  ionViewWillEnter(){
    this.SwipedTabsSlider.slideTo(0,100);
}

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator1");
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
    this.loadFriend();
    this.loadAttached();
    this.loadAttache();
  }


  loadFriend(){

    this.credit.check().then(data=>{


      this.reqService.loadFriend(data[0],data[1]).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.friendList.push(data[0][key]);
              }

              console.log(this.friendList);

             

            }
      });
    
    });

  }


  loadAttached(){

    this.credit.check().then(data=>{


      this.reqService.loadAttached(data[0],data[1]).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.attachList.push(data[0][key]);
              }

              // console.log(this.friendList);

             

            }
      });
    
    });

  }


  loadAttache(){
    
    this.credit.check().then(data=>{


      this.reqService.loadAttache(data[0],data[1]).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.attacheList.push(data[0][key]);
              }
             

              console.log(this.attacheList);

             

            }
      });
    
    });

  }




  loadFrndOpt(i)
  {
    
      this.optionActionSheet(this.friendList[i]);
  }


  loadAttachOpt(i){

    this.optionActionSheet(this.attachList[i]);

  }


  loadAttacheOpt(i){

    this.optionActionSheet(this.attacheList[i]);

  }


  optionActionSheet(arr){


    if(arr['attach']==1 && arr['req_s']==1){


      const a=this.actionSheet.create({
        buttons:[
          {
            text:'Unfriend',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.removeFriend(data[0],data[1],info).subscribe(data=>{
                                    
  
                                      arr['req_s']=4;
                                      arr['attach']=0;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Dettach',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.DettachFriend(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['attach']=0;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Message',
            handler:()=>{
              this.navCtrl.push(ChatboxPage,
                {chatWith_id:arr['frnd_id'],
                  });
  
            }
          },
        ]
          

      });

      a.present();

    }
    else if(arr['attach']==0 && arr['req_s']==1){


      const a=this.actionSheet.create({
        buttons:[
          {
            text:'Unfriend',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.removeFriend(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['req_s']=4;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Attach',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.AttachFriend(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['attach']=1;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Message',
            handler:()=>{
              this.navCtrl.push(ChatboxPage,
                {chatWith_id:arr['frnd_id'],
                  });
  
            }
          },
        ]
          

      });


      a.present();


    }
    else if(arr['attach']==1 && arr['req_s']==2){

      const a=this.actionSheet.create({
        buttons:[
          {
            text:'Cancel Request',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.cancelRequest(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['req_s']=0;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Dettach',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.DettachFriend(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['attach']=0;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Message',
            handler:()=>{
              this.navCtrl.push(ChatboxPage,
                {chatWith_id:arr['frnd_id'],
                  });
  
            }
          },
        ]
          

      });

      a.present();


    }
    else if(arr['attach']==0 && arr['req_s']==2){

      const a=this.actionSheet.create({
        buttons:[
          {
            text:'Cancel Request',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.cancelRequest(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['req_s']=0;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Attach',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.AttachFriend(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['attach']=1;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Message',
            handler:()=>{
              this.navCtrl.push(ChatboxPage,
                {chatWith_id:arr['frnd_id'],
                  });
  
            }
          },
        ]
          

      });


      a.present();


      

    }
    else if(arr['attach']==1 && arr['req_s']==0){

      const a=this.actionSheet.create({
        buttons:[
          {
            text:'Accept Request',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.acceptRequest(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['req_s']=1;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Dettach',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.DettachFriend(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['attach']=0;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Message',
            handler:()=>{
              this.navCtrl.push(ChatboxPage,
                {chatWith_id:arr['frnd_id'],
                  });
  
            }
          },
        ]
          

      });

      a.present();


    }
    else if(arr['attach']==0 && arr['req_s']==0){

      const a=this.actionSheet.create({
        buttons:[
          {
            text:'Accept Request',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.acceptRequest(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['req_s']=1;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Attach',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.AttachFriend(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['attach']=1;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Message',
            handler:()=>{
              this.navCtrl.push(ChatboxPage,
                {chatWith_id:arr['frnd_id'],
                  });
  
            }
          },
        ]
          

      });

      a.present();

    }
    else if(arr['attach']==1 && arr['req_s']==4){

      const a=this.actionSheet.create({
        buttons:[
          {
            text:'Add Friend',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.AddFriend(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['req_s']=2;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Dettach',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.DettachFriend(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['attach']=0;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Message',
            handler:()=>{
              this.navCtrl.push(ChatboxPage,
                {chatWith_id:arr['frnd_id'],
                  });
  
            }
          },
        ]
          

      });

      a.present();

    }
    else if(arr['attach']==0 && arr['req_s']==4){

      const a=this.actionSheet.create({
        buttons:[
          {
            text:'Add Friend',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.AddFriend(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['req_s']=2;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Attach',
            handler:()=>{
                          this.credit.check().then(data=>{
                           
                      
                                    let info={
                                    frnd_id:arr['user_id'],

                              
                                    }
                                  
                                    this.reqService.AttachFriend(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      arr['attach']=1;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Message',
            handler:()=>{
              this.navCtrl.push(ChatboxPage,
                {chatWith_id:arr['frnd_id'],
                  });
  
            }
          },
        ]
          

      });

      a.present();


    }
    else{
      console.log(15);
    }

  }







}
