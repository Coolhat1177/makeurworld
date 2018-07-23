import { CreditService } from '../../services/CreditService';
import { TopHeaderServices } from '../../services/TopHeaderService';
import { SearchService } from '../../services/SearchServices';

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { RequestService } from '../../services/RequestService';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides;

  SwipedTabsIndicator :any= null;
  tabs:any=[];
  searchListP:any=[];
  AddaList:any=[];

  constructor(public navCtrl: NavController,
       public navParams: NavParams,
        private credit:CreditService,
        private topHeader:TopHeaderServices,
        private sService:SearchService,
        private searchService:SearchService,
        private reqservice:RequestService ) {
          this.tabs=['People','Add'];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator3");
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

  onInput(event)
  {


      this.credit.check().then(data=>{

       this.seacrhPeople(data,event);

      });

     
  }



  seacrhPeople(data,event){
    let word=event.target.value;
    let filter=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(!filter.test(word) )
    {
        let info={
          search_w:word,
          from:this.sService.lenList(),
        
        }
        this.searchService.resetList();
        let info1=JSON.stringify(info);
        this.topHeader.searchLoad(data[0],data[1],info1).subscribe(data=>{
               if(data['status'])
               {
                 for(let key in data[0]){

                  this.searchService.addList(data[0][key]);

                 }

                 

                 

               }
               this.searchListP=this.searchService.getList();
               console.log(this.searchListP);
           
        });

    }
    else{

      let info={
        search_w:word,
        from:this.sService.lenList(),
      
      }

      let info1=JSON.stringify(info);

      this.topHeader.searchLoadEmail(data[0],data[1],info1).subscribe(data=>{
        if(data['status'])
        {
          for(let key in data[0]){

           this.searchService.addList(data[0][key]);

          }

          console.log(this.searchService.getList());

        }
    
 });
            
    }
  }



  searcchAdda(data,event){

    let word=event.target.value;

    let info={
      search_w:word,
      from:this.sService.lenAddaList(),
      to:15
    
       }

       this.sService.resetAddaList();

       let info1=JSON.stringify(info);

       this.topHeader.searchLoadAdda(data[0],data[1],info1).subscribe(data=>{
         if(data['status'])
         {
           for(let key in data[0]){
 
            this.searchService.addList(data[0][key]);
 
           }
 
          
         }

         this.AddaList=this.sService.getAddaList();
         
        });

  }


  onCancel(event)
  {
      console.log("ok");
  }

  acceptRequest(i){
    this.credit.check().then(data=>{

      var info={
              frnd_id:this.searchListP[i]['user_id']
      }
      
      this.reqservice.acceptRequest(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          this.searchListP[i]['req_s']=1;
           
        }
            
      });
        
    });

    this.searchListP[i]['req_s']=1;
   


  }

 
  cancelRequest(i){

    this.credit.check().then(data=>{

      var info={
              frnd_id:this.searchListP[i]['to_id']
      }
      
      this.reqservice.cancelRequest(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          
          this.searchListP[i]['req_s']=4;
          
        }
            
      });
        
    });

    this.searchListP[i]['req_s']=4;

  }


  addFriend(i){
    this.credit.check().then(data=>{

      var info={
              frnd_id:this.searchListP[i]['to_id']
      }
      
      this.reqservice.AddFriend(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          this.searchListP[i]['req_s']=2;
         
          
        }
            
      });
        
    });

    this.searchListP[i]['req_s']=2;

  }

}
