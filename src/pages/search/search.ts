import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { TopHeaderServices } from '../../services/TopHeaderService';
import { SearchService } from '../../services/SearchServices';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

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
