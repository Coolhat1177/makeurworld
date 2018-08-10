import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { ProdileHeaderPage } from '../../component/header/profileheader';
import { CanvassuggestionPage } from '../canvassuggestion/canvassuggestion';
import { ImageOptionPop } from '../popover/imagePopover';
import { CanvasviewerPage } from '../canvasviewer/canvasviewer';
import { CreditService } from '../../services/CreditService';
import { ImageStoreService } from '../../services/ImageStoreService';
import { ViralServices } from '../../services/ViralServices';
import { CanvasService } from '../../services/CanvasService';
import { ProfileimagePage } from '../profileimage/profileimage';


@IonicPage()
@Component({
  selector: 'page-profilecanvas',
  templateUrl: 'profilecanvas.html',
})
export class ProfilecanvasPage {

  canvasArray:any=[];
  @ViewChild("bgselector") bgselector:ElementRef;
  selecEle:any;


  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private credit:CreditService,
               private imgStore:ImageStoreService,
               private modelCtrl:ModalController,
               private popCtrl:PopoverController,
               private iServices:ViralServices,
               private cnvService:CanvasService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CanvasPage');
    this.loadCanvas();
  }



  loadPhotoPro(){
    this.navCtrl.push(ProfileimagePage);
  }


  loadCanvasPro(){
    this.navCtrl.push(ProfilecanvasPage);
  }



  loadCanvas(){

    this.credit.check().then(data=>{

    
     
      this.imgStore.canvasLoad(data[0],data[1]).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.canvasArray.push(data[0][key]);
              }

             console.log(this.canvasArray)
             
              

            }

           
      });
    
    });

  }


  doInfiniteCanvas(event){

    this.credit.check().then(data=>{

    
      let info={'l_t':this.canvasArray[this.canvasArray.length - 1]['board_t']}
      this.imgStore.canvasLoadMr(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.canvasArray.push(data[0][key]);
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





  openCanvas(i){

    this.credit.check().then(data=>{

    
      let info={'board_id':this.canvasArray[i]['image_board_id']}
      this.cnvService.openCanvse(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              
              const canvasViewer=this.modelCtrl.create(CanvasviewerPage,{
                canvas:data[0][0],
                media_id:this.canvasArray[i]['image_board_id'],
                add_status:false,
                delete_status:true,
                activity_id:this.canvasArray[i]['activity_id'],
                suggestStatus:this.suggestFriend,
                addStatus:this.addType,
                moreOption:this.moreOption,
              
                deleteFn:this.DeleteFromStoreCanvas,
              
                });

                canvasViewer.present();
                canvasViewer.onDidDismiss((data)=>{
                  // console.log(101)
                    if (data !=null && data['data'] ){
                      this.canvasArray.splice(i,i+1);
                      
                    }
                  
                      
                });

            }

           
      });
    
    });

  

    

  }


  selectCanvas(event,i){
    console.log(this.canvasArray[i]);
    let bgS=this.bgselector.nativeElement;
    bgS.classList.add("selectorBg");
   this.selecEle=event.target || event.srcElement || event.currentTarget;
   this.selecEle.classList.add("selectElem");

   this.credit.check().then(data=>{
               
    let info={
      'board_id':this.canvasArray[i]['image_board_id'],
    
    }
  
    this.iServices.checkStatusCanvas(data[0],data[1],info).subscribe(data=>{
      if(data['status'])
      {
        
            const pop=this.popCtrl.create(ImageOptionPop,{
              media_id:this.canvasArray[i]['image_board_id'],
              add_status:false,
              delete_status:true,
              'activity_id':this.canvasArray[i]['activity_id'],
              suggestStatus:this.suggestFriend,
              // addStatus:this.viralAddType,
              moreOption:this.moreOption,
              full_name:this.canvasArray[i]['full_name'],
              pic_url:this.canvasArray[i]['pic_url'],
              user_id:this.canvasArray[i]['user_id'],
             
              deleteFn:this.DeleteFromStoreCanvas,
            });
            pop.present({ev:event});
            pop.onDidDismiss((data)=>{
              console.log()
                if (data !=null && data['data'] ){
                  this.canvasArray.splice(i,i+1);
                  
                }
                this.removeSelect();
                   
            });
        

      }
      

    
});

    
});


   
  }



  DeleteFromStoreCanvas(board_id,credit,service,alertBox):Promise<boolean>{
  
    console.log(board_id);

    return new Promise(resolve=>{
      
      
     
      let alert = alertBox.create({
        title: 'Delete',
        message: 'Do you want to delete this canvas from Store',
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
  
                                                  
                let info={'brd_id': board_id}
                
                service.deleteCanvas(data[0],data[1],info).subscribe(data=>{
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




  suggestFriend(board_id,modelCtrl){
    console.log(board_id);
    const load=modelCtrl.create(CanvassuggestionPage,{'board_id':board_id});
    load.present();

  }


  addType(actionSheet){

    const actSheet=actionSheet.create({
   
      buttons:[
        {
          text:"Viral",
          handler:()=>{
            console.log(15);
          }
        },
        {
          text:'Private',
          handler:()=>{

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

  moreOption(board_id,actionSheet,modalCtrl){

    const actSheet=actionSheet.create({
     
      buttons:[
        {
          text:"Detail",
          handler:()=>{

            // const profilePick=this.modelCtrl.create(AddCnavasPage,{});
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


  removeSelect(){
    let bgS=this.bgselector.nativeElement;
    bgS.classList.remove("selectorBg");
    this.selecEle.classList.remove("selectElem");
  }

}
