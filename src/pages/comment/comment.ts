import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Content } from 'ionic-angular';
import { CreditService } from '../../services/CreditService';
import { ReactionServices } from '../../services/InteractionServices';
import { NgForm } from '@angular/forms';


/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  @ViewChild(Content) content: Content;

  input:any;
  activity_id:string;
  commentArr:any=[];
  isenabled:boolean=false;
  last_time:string="0000-00-00 00:00:00";
  task:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
          private viewCtrl:ViewController,
          private credit:CreditService,
          private commentS:ReactionServices) {       
                  this.activity_id=this.navParams.data['activity_id'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
    this.load_comment();
  }


  dismissView()
  {
    clearInterval(this.task);
      this.viewCtrl.dismiss();
      
  }

  load_comment(){
    this.credit.check().then(data=>{

    
      var info={
        'activity_id':this.activity_id,
        last_time:this.last_time,
      }
      this.commentS.loadComment(data[0],data[1],info).subscribe(data=>{
            if(data['status'])
            {
              for(let key in data[0])
              {
                this.commentArr.push(data[0][key]);
              }



            
             
             this.last_time= this.commentArr[0]['review_time'];

            }

            this.load_Cont();

           
      });
    
    });

  }


  load_Cont()
  {

    let a=this.commentArr;

    this.task=setInterval((a)=>{

                console.log("ok");
                this.credit.check().then(data=>{

              
                  var info={
                    'activity_id':this.activity_id,
                    last_time:this.last_time,
                  }
                  this.commentS.loadComment(data[0],data[1],info).subscribe(data=>{
                        if(data['status'])
                        {
                          let newArray=[]
                          for(let key in data[0])
                          {
                            newArray.push(data[0][key])
                            
                          }

                          this.commentArr=newArray.concat(this.commentArr);;
            
                        
                          this.last_time= this.commentArr[0]['review_time'];
                          
            
                        }
            
                       
            
                      
                  });
                
                });

          },3000);

    

  }

  submitComment(form:NgForm){

    let comment=form.value.commentArea;
    this.credit.check().then(data=>{

    
      var info={
        'activity_id':this.activity_id,
        review:comment,
      }
      this.commentS.submitComment(data[0],data[1],info).subscribe(data=>{
            
        this.content.scrollToTop();
           
      });
    
    });

    form.reset();
    this.isenabled=false;
  

  }

  checkStatus(ev)
  {
      if(ev.target.value.trim()!=='')
      {
        this.isenabled=true;
      }

      else{
        this.isenabled=false;
      }
  }

  
}
