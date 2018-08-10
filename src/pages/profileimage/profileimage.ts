import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController,Slides, ModalController, PopoverController } from 'ionic-angular';
import { AlertServices } from '../../services/AlertServices';
import { CreditService } from '../../services/CreditService';
import { ImageStoreService } from '../../services/ImageStoreService';
import { ImageviewerPage } from '../imageviewer/imageviewer';
import { ProdileHeaderPage } from '../../component/header/profileheader';
import { ViralServices } from '../../services/ViralServices';
import { ImageOptionPop } from '../popover/imagePopover';
import { ImagesuggestPage } from '../imagesuggest/imagesuggest';
import { AddCnavasPage } from '../add-cnavas/add-cnavas';
import { ProfilecanvasPage } from '../profilecanvas/profilecanvas';

/**
 * Generated class for the ProfileimagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profileimage',
  templateUrl: 'profileimage.html',
})
export class ProfileimagePage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
  @ViewChild("bgselector") bgselector:ElementRef;
  @ViewChild("tab") tab:ElementRef;
  selecEle:any;

  imageArray:any=[];
 
 
  constructor(public navCtrl: NavController,
          
            private credit:CreditService,
            private imgStore:ImageStoreService,
            private modelCtrl:ModalController,
            private popCtrl:PopoverController,
            private iServices:ViralServices,
       
              ) {
  
  }


  loadPhotoPro(){
    this.navCtrl.push(ProfileimagePage);
  }


  loadCanvasPro(){
    this.navCtrl.push(ProfilecanvasPage);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageStorePage');
    this.loadStor();
   
  }


  loadStor()
  {

    this.credit.check().then(data=>{

      // console.log(data);

      this.imgStore.firstLoad(data[0],data[1]).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.imageArray.push(data[0][key]);
              }
              

            }
      });
    
    });
    
  }


  doInfinite(event)
  {
    this.loadStorMore(event);
    
  }


  loadStorMore(event?)
  {

    this.credit.check().then(data=>{

    
      let info={'l_t':this.imageArray[this.imageArray.length - 1]['image_time']}
      this.imgStore.moreLoad(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.imageArray.push(data[0][key]);
              }
              // this.imageArray=this.imgStore.getList();

            }

            if(event)
            {
              event.complete();
            }
      });
    
    });
    
  }


  imageZoom(i){

    let image=[];
    this.credit.check().then(data=>{

    
     
      this.imgStore.imageAll(data[0],data[1]).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                image.push(data[0][key]);
              }

              const profilePick=this.modelCtrl.create(ImageviewerPage,{
                image:this.imageArray[i],
                imageNextArray:image
                
      });
              profilePick.present();
              profilePick.onDidDismiss((data)=>{
                if(data['data'] ){
                  this.imageArray.splice(i,i+1);
                  
                }
     

            });
          }

           
      });
    
    });

    

  }


  



  selectMe(event,i){
    console.log(this.imageArray[i]);
    let bgS=this.bgselector.nativeElement;
    bgS.classList.add("selectorBg");
   this.selecEle=event.target || event.srcElement || event.currentTarget;
   this.selecEle.classList.add("selectElem");


      this.credit.check().then(data=>{
               
                let info={
                  'image_id':this.imageArray[i]['image_id'],
                
                }
              
                this.iServices.checkStatus(data[0],data[1],info).subscribe(data=>{
                  if(data['status'])
                  {
                    
                        const pop=this.popCtrl.create(ImageOptionPop,{
                          media_id:this.imageArray[i]['image_id'],
                          add_status:false,
                          delete_status:true,
                          'activity_id':this.imageArray[i]['activity_id'],
                          suggestStatus:this.vrialImgSug,
                          addStatus:this.viralAddType,
                          moreOption:this.viralMoreOption,
                          full_name:this.imageArray[i]['full_name'],
                          pic_url:this.imageArray[i]['pic_url'],
                          user_id:this.imageArray[i]['user_id'],
                         
                          deleteFn:this.DeleteFromStore,
                        });
                        pop.present({ev:event});
                        pop.onDidDismiss((data)=>{
                         
                            if (data !=null && data['data'] ){
                              this.imageArray.splice(i,i+1);
                              
                            }
                            this.removeSelect();
                               
                        });
                    

                  }
                  

                
            });

                
       });
  


  


  }


  removeSelect(){
    let bgS=this.bgselector.nativeElement;
    bgS.classList.remove("selectorBg");
    this.selecEle.classList.remove("selectElem");
  }



  vrialImgSug(image_id,modelCtrl){
    console.log(image_id);
    const load=modelCtrl.create(ImagesuggestPage,{image_id:image_id});
    load.present();
    
  }

  viralAddType(image_id,actionSheet,credit,viralS):Promise<boolean>
  {
    return new Promise(resolve=>{
      const actSheet=actionSheet.create({
   
        buttons:[
          {
            text:"Viral",
            handler:()=>{
                          credit.check().then(data=>{
                           
                      
                                    let info={
                                    image_id:image_id,
                                    pub_s:0
                              
                                    }
                                  
                                    viralS.addImage(data[0],data[1],info).subscribe(data=>{
                                    
  
  
                                      return true;
                                      
                              
                                    
                                  });
                      
                            
                        });
  
            }
          },
          {
            text:'Private',
            handler:()=>{
                          this.credit.check().then(data=>{
                                      
                                  
                                  let info={
                                  image_id:image_id,
                                  pub_s:1
                            
                                  }
                                
                                  viralS.addImage(data[0],data[1],info).subscribe(data=>{
                                  
  
  
                                    resolve( true);
                                    
                            
                                  
                                });
  
        
                   });
  
            }
          },
          {
            text:'Cancel',
            role:'cancel',
            handler:()=>{
              resolve( false);
            }
          }
        ]
      });
  
      actSheet.present();
  

    });
    


  }


  viralMoreOption(image_id,actionSheet,modelCtrl,fnc,credit,viralS,alertM){

    const actSheet=actionSheet.create({
     
      buttons:[
        {
          text:"Add to Canvas",
          handler:()=>{

            const profilePick=modelCtrl.create(AddCnavasPage,{'image_id':image_id});
            profilePick.present();
            profilePick.onDidDismiss(()=>{
        
             
              
            });
            
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










  DeleteFromStore(image_id,credit,service,alertBox):Promise<boolean>{
  
    console.log(image_id);

    return new Promise(resolve=>{
      
      
     
      let alert = alertBox.create({
        title: 'Delete',
        message: 'Do you want to delete this image from Store',
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
  
                                                  
                let info={'image_id': image_id}
                
                service.deleteImage(data[0],data[1],info).subscribe(data=>{
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


}
