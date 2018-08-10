import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { ImageStoreService } from '../../services/ImageStoreService';
import { ViralServices } from '../../services/ViralServices';
import { FavviewerPage } from '../favviewer/favviewer';
import { StoreHeaderPage } from '../../component/header/storeheader';
import { HeaderPage } from '../../component/header/header';
import { VideoStorePage } from '../video-store/video-store';
import { ImageOptionPop } from '../popover/imagePopover';
import { FavsuggestionPage } from '../favsuggestion/favsuggestion';
import { FavService } from '../../services/FavServices';



@IonicPage()
@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',
})
export class FavouritePage {
  @ViewChild("bgselector") bgselector:ElementRef;
  selecEle:any;

 
  favArray:any=[];


  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private modelCtrl:ModalController,
               private credit:CreditService,
               private videoS:ImageStoreService,
               private popCtrl:PopoverController,
               private iServices:ViralServices,
               private favService:FavService
              ) {
  }



  loadVideoP(){
    this.navCtrl.setRoot(VideoStorePage);

  }


  loadFavouriteP()
  {
    this.navCtrl.setRoot(FavouritePage);

  }


  ionViewDidLoad() {
    this.loadFav();
  }


  swipeEvent(ev)
  {

    console.log(ev);
   
    if(ev.direction==4)
    {
     
     this.loadVideoP();
     
    }

   

  }



  loadFav()
  {

    this.credit.check().then(data=>{

      // console.log(data);

      this.videoS.favLoad(data[0],data[1]).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.favArray.push(data[0][key]);
              }
             

            }
      });
    
    });
    
  }


  doInfiniteFav(event)
  {
    console.log(15);
   
    this.credit.check().then(data=>{

      // console.log(this.videoS.vidArry[this.videoS.vidArry.length -1]['']);
      let info={'l_t': this.favArray[this.favArray.length -1]['fav_time']}
      this.videoS.favLoadMr(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.favArray.push(data[0][key]);
              }
              // this.favArray=this.imgStore.getList();

            }

            if(event)
            {
              event.complete();
            }
      });
    
    });
    
  }


  
  favOpen(i){
    // console.log(this.favArray[i])

    this.credit.check().then(data=>{

      // console.log(this.videoS.vidArry[this.videoS.vidArry.length -1]['']);
      let info={'fav_id': this.favArray[i]['fav_id']}
      this.favService.favOpen(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              const modelNew=this.modelCtrl.create(FavviewerPage,{fav:data[0][0]});
              modelNew.present();

              modelNew.onDidDismiss((data)=>{
                
                  if (data !=null && data['data'] ){
                    this.favArray.splice(i,i+1);
                    
                  }
                
                     
              });
             
             

            }

          
      });
    
    });

    

  }



  selectMe(event,i){
    console.log(this.favArray[i]);
    let bgS=this.bgselector.nativeElement;
    bgS.classList.add("selectorBg");
   this.selecEle=event.target || event.srcElement || event.currentTarget;
   this.selecEle.classList.add("selectElem");


      this.credit.check().then(data=>{
               
                let info={
                  'fav_id':this.favArray[i]['fav_id'],
                
                }
              
                this.iServices.checkStatusf(data[0],data[1],info).subscribe(data=>{
                  if(data['status'])
                  {
                    
                        const pop=this.popCtrl.create(ImageOptionPop,{
                          media_id:this.favArray[i]['fav_id'],
                          add_status:false,
                          delete_status:true,
                          'activity_id':this.favArray[i]['activity_id'],
                          suggestStatus:this.favSug,
                          // addStatus:this.viralAddType,
                          moreOption:this.viralMoreOption,
                          full_name:this.favArray[i]['full_name'],
                          pic_url:this.favArray[i]['pic_url'],
                          user_id:this.favArray[i]['user_id'],
                         
                          deleteFn:this.DeleteFromStore,
                        });
                        pop.present({ev:event});
                        pop.onDidDismiss((data)=>{
                          console.log()
                            if (data !=null && data['data'] ){
                              this.favArray.splice(i,i+1);
                              
                            }
                            this.removeSelect();
                               
                        });
                    

                  }
                  

                
            });

                
       });
  


  


  }


  favSug(fav_id,modelCtrl){
   
    const load=modelCtrl.create(FavsuggestionPage,{fav_id:fav_id});
    load.present();
    
  
    
  }



  removeSelect(){
    let bgS=this.bgselector.nativeElement;
    bgS.classList.remove("selectorBg");
    this.selecEle.classList.remove("selectElem");
  }



  DeleteFromStore(fav_id,credit,service,alertBox):Promise<boolean>{
  
    console.log(fav_id);

    return new Promise(resolve=>{
      
      
     
      let alert = alertBox.create({
        title: 'Delete',
        message: 'Do you want to delete this favourite from Store',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
             resolve(false);
            }
           
          },
          {
            text: 'Ok',
            handler: () => {
              credit.check().then(data=>{
  
                                                  
                let info={'fav_id': fav_id}
                
                service.deleteFav(data[0],data[1],info).subscribe(data=>{
                      if(data['status'])
                      {
                        
                        
                        resolve(true);
                       
                        
                      }
                     
                    
          
                      
                });
            });
              
            }
          }
        ]
      });
      alert.present();

    });
  }



  viralMoreOption(fav_id,actionSheet,modelCtrl,fnc,credit,viralS,alertM){

    const actSheet=actionSheet.create({
     
      buttons:[
        {
          text:"Detail",
          handler:()=>{

            // const profilePick=modelCtrl.create(VideofavPage,{'fav_id':fav_id});
            // profilePick.present();
            // profilePick.onDidDismiss(()=>{
        
             
              
            // });
            
          }
        },
     
        {
          text:'Cancel',
          role:'cancel'
        }
      ]
    });

    actSheet.present();


  }




}
