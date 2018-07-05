import { CreditService } from '../../services/CreditService';
import { TopHeaderServices } from '../../services/TopHeaderService';
import { SearchService } from '../../services/SearchServices';

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides;

  SwipedTabsIndicator :any= null;
  tabs:any=[];

  constructor(public navCtrl: NavController,
       public navParams: NavParams,
        private credit:CreditService,
        private topHeader:TopHeaderServices,
        private sService:SearchService,
        private searchService:SearchService ) {
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

        let word=event.target.value;
        let filter=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(!filter.test(word) )
        {
            let info={
              search_w:word,
              from:this.sService.lenList(),
            
            }
            console.log(this.sService.lenList());
            let info1=JSON.stringify(info);
            this.topHeader.searchLoad(data[0],data[1],info1).subscribe(data=>{
                   if(data['status'])
                   {
                     for(let key in data[0]){

                      this.searchService.addList(data[0][key]);

                     }

                     console.log(this.searchService.getList());

                   }
               
            });

        }
        else{
                
        }

      });

     
  }


  onCancel(event)
  {
      console.log("ok");
  }

}
