import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Content, List,Row } from 'ionic-angular';
import { PersonalChatServices } from '../../services/PersonalChatServices';
import { CreditService } from '../../services/CreditService';
import { CloudProvider } from '../../providers/cloud/cloud';



@IonicPage()
@Component({
  selector: 'page-chatbox',
  templateUrl: 'chatbox.html',
 
})
export class ChatboxPage {
  @ViewChild(Content) content:Content;
  @ViewChild('mytexttyping') mytexttyping:ElementRef;
  @ViewChild(List, {read: ElementRef}) chatList: ElementRef;
  @ViewChild('emoContain') emoContain:ElementRef;
  typingS:boolean=false;
  typeClass:string="chat_typing1";
  message:string="";
  emo:any=['../../assets/icon/1f600.svg'];
  messArray:any=[];
  mutationObserver: MutationObserver;
  emoCont:boolean=false;
  icon1:any=[];
  link:string="";
  emoIcon:any=[];
  chatTask:any;
  chatTask1:any;
  info:any=[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private actionSheet:ActionSheetController,
              private perChat:PersonalChatServices,
              private credit:CreditService,
              private cloud:CloudProvider
              ) {

                this.typingS=this.perChat.typingS;
                this.message=this.perChat.message;
                this.typeClass=this.perChat.typingClass;
                this.icon1=this.cloud.emo.icon;
                this.link=this.cloud.link;
                this.emoIcon=this.cloud.emoList[0];
                this.loadChat();
                this.chatPersonInfo();
                this.perChat.frnd_id=this.navParams.data['chatWith_id'];
                console.log(this.perChat.frnd_id)
                

  }

  ionViewDidLoad() {

    this.mutationObserver = new MutationObserver((mutations) => {
          this.content.scrollToBottom();
      });

      this.mutationObserver.observe(this.chatList.nativeElement, {
          childList: true
      });


      console.log(this.chatList)

    
   
  }


 

  typeStatus(){

    this.typingS=this.perChat.typingS=true;
    this.typeClass=this.perChat.typingClass="chat_typing2";
 

  }


  setEmoDisplay(i){
    // console.log(i)
    this.emoIcon=this.cloud.emoList[i];
    console.log(this.cloud.emoList)

  }


  uploadToChat(){

    const actSheet=this.actionSheet.create({
   
      buttons:[
        {
          text:"Camera",
          handler:()=>{
            console.log(15);
          }
        },
        {
          text:'From storage',
          handler:()=>{

          }
        },
        {
          text:'Attachment',
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


  sendChat(){
         
          this.message=this.perChat.message=this.mytexttyping.nativeElement.innerHTML;
          let text=this.mytexttyping.nativeElement.innerText;
        
          
          this.credit.check().then(data=>{

                  
            var info={
              'frnd_id':this.perChat.frnd_id,
              'mess':text.replace(/\s+/g,' ').trim()
            
            }
            this.perChat.sendChat(data[0],data[1],info).subscribe(data=>{
                
               

                   
                
                
            });
          });

          this.mytexttyping.nativeElement.innerHTML='';
          
         

  }

  addEmojs(i){

    let c=this.mytexttyping.nativeElement;; 
   
    let text = c.innerHTML;
    
    let imgStr = "<span><img src='"+this.link+this.emoIcon[i]+"'></span>"
  
    c.innerHTML = text+imgStr;
    // this.myFunction(i);

    
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




  ionViewWillLeave(){
    clearInterval(this.chatTask);
    clearInterval(this.chatTask1);
  }



    loadChat(){


    this.chatTask=setInterval(()=>{
                  console.log(15);

                    this.credit.check().then(data=>{

                  
                      var info={
                        'frnd_id':this.perChat.frnd_id,
                        'end_t':this.perChat.end_t
                      
                      }
                      this.perChat.loadChat(data[0],data[1],info).subscribe(data=>{
                          
                          if(data['status']){

                              for(let key in data[0]){
                                this.messArray.push(data[0][key]);

                              }

                              console.log(this.messArray);
                              this.content.scrollToBottom(300);
                              this.perChat.end_t=this.messArray[this.messArray.length - 1]['l_t'];
                          }
                          
                      });
                    
                    });


    },2000)



      
    }


    chatPersonInfo(){

      this.chatTask1=setInterval(()=>{

              this.credit.check().then(data=>{

                        
                var info={
                  'frnd_id':this.perChat.frnd_id,
                
                }
                this.perChat.chatInfo(data[0],data[1],info).subscribe(data=>{
                  if(data['status'])
                  {
                    this.info=data[0][0];
                  }
                  
                    
                });
              
              });
  

      },1000);
     

    }



  



//    getCaretCharacterOffsetWithin(element) {
//     console.log(element.innerText+"-");
//     let caretOffset = 0;
//     let doc = element.ownerDocument || element.document;
   
//     let win = doc.defaultView || doc.parentWindow;
//     // console.log(win);
//     let sel;
//     if (typeof win.getSelection != "undefined") {
//         sel = win.getSelection();
//         console.log(sel);
//         if (sel.rangeCount > 0) {
//             let range = win.getSelection().getRangeAt(0);
//             // console.log(range);
//             let preCaretRange = range.cloneRange();
//             console.log(preCaretRange);
//             preCaretRange.selectNodeContents(element);
//             console.log(preCaretRange.selectNodeContents(element));
//             preCaretRange.setEnd(range.endContainer, range.endOffset);
//             caretOffset = preCaretRange.toString().length;
//         }
//     } else if ( (sel = doc.selection) && sel.type != "Control") {
//         let textRange = sel.createRange();
//         let preCaretTextRange = doc.body.createTextRange();
//         preCaretTextRange.moveToElementText(element);
//         preCaretTextRange.setEndPoint("EndToEnd", textRange);
//         caretOffset = preCaretTextRange.text.length;
//     }

   
//     console.log(caretOffset);
//     return caretOffset;
// }

//  myFunction(i) {
//         let c=this.mytexttyping.nativeElement;; 
//         let position = this.perChat.carterPosition;
//         let text = c.innerHTML;
//         let text1=c.innerText;
//         console.log(text1)
//         console.log("positiom-"+position);
//         let imgStr = "<span>&emsp;</span>"
      
//         c.innerHTML = text.slice(0,position) + imgStr + text.slice(position,text.length);

//         // console.log(text1[position-1]);
      
      
//       }




//     carterPosition(){


      
//       let c=this.mytexttyping.nativeElement;; 
//       let text = c.innerHTML;
//       console.log(text);
//       this.perChat.carterPosition=this.getCaretCharacterOffsetWithin(this.mytexttyping.nativeElement);

//     }




}
