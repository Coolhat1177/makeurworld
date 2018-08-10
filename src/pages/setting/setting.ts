import { Component, ViewChild, ElementRef,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { LocationChooserPage } from '../../component/location/location';
import { CreditService } from '../../services/CreditService';
import { SettingServices } from '../../services/SettingService';
import { AlertServices } from '../../services/AlertServices';
import { CloudProvider } from '../../providers/cloud/cloud';
import { PrivacyPage } from '../privacy/privacy';


@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  

  @ViewChild("fname") fname:ElementRef; 
  @ViewChild("lname") lname:ElementRef;
  @ViewChild("email") email:ElementRef;
  @ViewChild("password") password:ElementRef;
  @ViewChild("repassword") repassword:ElementRef;
  @ViewChild("frndRequest") frndRequest:ElementRef;
  @ViewChild("username") username:ElementRef;
  @ViewChild("relastionship") relastionship:ElementRef;
  @ViewChild("abc") abc:ElementRef;
  @ViewChild("intrest") intrest:ElementRef;
  @ViewChild("gender") gender:ElementRef;
  @ViewChild("about") about:ElementRef;
  @ViewChild("emailId") emailId:ElementRef;
  @ViewChild("countryCode") code:ElementRef;
  @ViewChild("number") number:ElementRef;
  @ViewChild("website") website:ElementRef;
  @ViewChild("blog") blog:ElementRef;
  @ViewChild("currentTown") currentTown:ElementRef;
  @ViewChild("eduname") eduname:ElementRef;
  @ViewChild("instituteType") instituteType:ElementRef;
  @ViewChild("eduFrom") eduFrom:ElementRef;
  @ViewChild("eduTo") eduTo:ElementRef;
  @ViewChild("wpname") wpname:ElementRef;
  @ViewChild("wpType") wpType:ElementRef;
  @ViewChild("wpFrom") wpFrom:ElementRef;
  @ViewChild("wpTo") wpTo:ElementRef;
  
 
  setName:boolean=false;
  setEmail:boolean=false;
  setPassword:boolean=false;
  setUserName:boolean=false;
  setFriendRequest:boolean=false;
  setBirthday:boolean=false;
  setRelationship:boolean=false;
  setIntrest:boolean=false;
  setGender:boolean=false;
  setDescription:boolean=false;
  setEmailId:boolean=false;
  setContactNumber:boolean=false;
  setWebsite:boolean=false;
  setBlog:boolean=false;
  setWorkPLACE:boolean=false;
  setEducation:boolean=false;
  setCurLocation:boolean=false;
  setHomeTown:boolean=false;
  setFavLocation:boolean=false;
  userNameStatus:boolean=false;
  accountInfo:any=[];
  aboutInfo:any=[];
  contactInfo:any=[];
  countryCode:any=[];
  locationInfo1:any=[{'full_add':''}];
  locationInfo0:any=[{'full_add':''}];
  favLoactionInfo:any=[];
  educationInfo:any=[];
  workPlaceInfo:any=[];
  year:any=[];
  curTown:any=[];
  curTownStatus:boolean=false;
  homeTown:any=[];
  homeTownStatus:boolean=false;
  favTown:any=[];
  favTownStatus:boolean=false;
  eduAddStatus:boolean=false;
  eduAdd:any=[];
  wpAddStatus:boolean=false;
  wpAdd:any=[];
  privacyArray=["custom-icon25","custom-icon26","custom-icon27"];

  
  constructor(public navCtrl: NavController,
               public navParams: NavParams,
              private credit:CreditService,
              private setService:SettingServices,
              private  alertService:AlertServices,
              private cloud:CloudProvider,
              private popCtrl:PopoverController
              ) {
                this.countryCode=this.cloud.code;
                this.year=this.cloud.year;
                // console.log(google);
                
               
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
    
    this.loadAccountInfo();
    this.loadAbout();
    this.loadContact();
    
    this.loadFavLocationInfo();
    this.loadEducation();
    this.loadWorkPlace();
    this.loadLocationInfo();

  }


  allFalse(){
    this.setName=false;
    this.setEmail=false;
    this.setPassword=false;
    this.setUserName=false;
    this.setFriendRequest=false;
    this.setBirthday=false;
    this.setRelationship=false;
    this.setIntrest=false;
    this.setGender=false;
    this.setDescription=false;
    this.setEmailId=false;
    this.setContactNumber=false;
    this.setWebsite=false;
    this.setBlog=false;
    this.setWorkPLACE=false;
    this.setEducation=false;
    this.setCurLocation=false;
    this.setHomeTown=false;
    this.setFavLocation=false;
    this.userNameStatus=false;
    this.curTownStatus=false;
    this.homeTown=[];
    this.homeTownStatus=false;
    this.favTown=[];
    this.favTownStatus=false;
    this.eduAddStatus=false;
    this.eduAdd=[];
    this.wpAddStatus=false;


  }
  

  nameEdit(){
    

    if(this.setName){
      this.setName=false;
    }else{
      this.allFalse();
      this.setName=true;

    }

    // console.log(this.setName);
    
  }

  

  emailEdit(){
    
    if(this.setEmail){
      this.setEmail=false;

    }
    else{
      this.allFalse();
      this.setEmail=true;
    }

  }


  passwordEdit(){
    
    if(this.setPassword){
      this.setPassword=false;

    }
    else{
      this.allFalse();
      this.setPassword=true;
    }

  }

  userNameEdit(){
    
    if(this.setUserName){
      this.setUserName=false;

    }
    else{
      this.allFalse();
      this.setUserName=true;
    }

  }
  friendRequestEdit(){
    
    if(this.setFriendRequest){
      this.setFriendRequest=false;

    }
    else{
      this.allFalse();
      this.setFriendRequest=true;
    }

  }

  birthdayEdit(){
    
    if(this.setBirthday){
      this.setBirthday=false;

    }
    else{
      this.allFalse();
      this.setBirthday=true;
    }


  }


  relationshipEdit(){
    
    if(this.setRelationship){
      this.setRelationship=false;

    }
    else{
      this.allFalse();
      this.setRelationship=true;
    }


  }

  interestEdit(){
    
    if(this.setIntrest){
      this.setIntrest=false;

    }
    else{
      this.allFalse();
      this.setIntrest=true;
    }

  }


  genderEdit(){

    
    if(this.setGender){
      this.setGender=false;

    }
    else{
      this.allFalse();
      this.setGender=true;
    }

  }


  descriptionEdit(){
    if(this.setDescription){
      this.setDescription=false;

    }
    else{
    this.allFalse();

      this.setDescription=true;
    }

  }


  emailIdEdit(){
    
    if(this.setEmailId){
      this.setEmailId=false;

    }
    else{
      this.allFalse();
      this.setEmailId=true;
    }

  }

  contactNumberEdit(){
    
    if(this.setContactNumber){
      this.setContactNumber=false;

    }
    else{
      this.allFalse();
      this.setContactNumber=true;
    }

  }

  websiteEdit(){
    
    if(this.setWebsite){
      this.setWebsite=false;

    }
    else{
      this.allFalse();
      this.setWebsite=true;
    }

  }

  blogEdit(){
    
    if(this.setBlog){
      this.setBlog=false;

    }
    else{
      this.allFalse();
      this.setBlog=true;
    }

  }

  workPlacdEdit(){
    
    if(this.setWorkPLACE){
      this.setWorkPLACE=false;

    }
    else{
      this.allFalse();
      this.setWorkPLACE=true;
    }

  }


  educationedit(){
    
    if(this.setEducation){
      this.setEducation=false;

    }
    else{
      this.allFalse();
      this.setEducation=true;
    }

  }


  curLocationEdit(){
    
    if(this.setCurLocation){
      this.setCurLocation=false;

    }
    else{
      this.allFalse();
          this.setCurLocation=true;
          
         
    }

  }

  homeTownEdit(){
    
    if(this.setHomeTown){
      this.setHomeTown=false;

    }
    else{
      this.allFalse();
      this.setHomeTown=true;
    }

  }


  favLocationEdit(){
    
    if(this.setFavLocation){
      this.setFavLocation=false;

    }
    else{
      this.allFalse();
      this.setFavLocation=true;
    }

  }


  loadAccountInfo(){
    this.credit.check().then(data=>{

              
     
      this.setService.accountInfo(data[0],data[1]).subscribe(data=>{

        if(data['status'])
        {
          
         this.accountInfo=data[0][0];
         this.accountInfo['frnd_reqV']="On";
        
         if(data[0][0]['frnd_req']=="1"){
          this.accountInfo['frnd_reqV']="Off";
         
         }

        //  console.log(this.accountInfo);
          
        }

       
            
      });
        
    });
  }


  saveName(){
    let fname=this.fname.nativeElement.value.trim();
    let lname=this.lname.nativeElement.value.trim();
    if(fname!=""){

      this.credit.check().then(data=>{

              
        let info={'f_name':fname,
        'l_name':lname};
        this.setService.changeName(data[0],data[1],info).subscribe(data=>{
  
          if(data['status'])
          {
            
            this.accountInfo['full_name']=fname+" "+lname;
            this.allFalse();
           
            
          }

          
              
        });
          
      });

    }
    else{
      this.alertService.errorALert("Enter your First Name");
    }
    
              
    
  }

 


  saveEmail(){
    let email=this.email.nativeElement.value.trim().toLowerCase();
    let filter=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(filter.test(email) )
    {
     

        this.credit.check().then(data=>{
  
                
          let info={'email':email};
          this.setService.changeEmail(data[0],data[1],info).subscribe(data=>{
    
            if(data['status'])
            {
              
              this.accountInfo['email_id']=email;
              this.allFalse();
              
            }
            else{

              this.alertService.errorALert("Enter already exist");

            }
                
          });
            
        });
  
      
    }
    
    else{
      this.alertService.errorALert("Enter correct Email");
    }
    
              
    
  }


  savePassword(){
    let password=this.password.nativeElement.value.trim();
    let repassword=this.password.nativeElement.value.trim();
    if(password=='' )
    {
      this.alertService.errorALert("Password is blank or password is too short");
    }

    else if(repassword=='' )
    {
      this.alertService.errorALert("Enter your re-password");
    }

    else if(repassword!=password )
    {
      this.alertService.errorALert("Enter your re-password");
    }
    
    else{
      this.credit.check().then(data=>{
  
                
        let info={'password':password};
        this.setService.changePassword(data[0],data[1],info).subscribe(data=>{
  
          if(data['status'])
          {
            
            // this.accountInfo['email']=email;
            this.allFalse();
           
            
          }
              
        });
          
      });

      
    }
    
              
    
  }


  saveFrndRequest(){
    let frndReq=this.frndRequest.nativeElement.value;
    let a=['On','Off'];
    let val=a.indexOf(frndReq)
    if(val==0 || val==1){
      this.credit.check().then(data=>{
  
                
        let info={'visibility':val,
                  'st':"frnd_req"};
                  console.log(info);
        this.setService.changeFrndReq(data[0],data[1],info).subscribe(data=>{
  
          if(data['status'])
          {
            
            this.accountInfo['frnd_reqV']=frndReq;
            this.accountInfo['frnd_req']=val;
            this.allFalse();
        
              
             
           
            
          }
         
              
        });
          
      });



    }

  }


  saveUserName(){
    let u_name=this.username.nativeElement.value;
		let filter =/^[-a-zA-Z0-9_.]*[a-z][-a-zA-Z0-9_.]*$/;
		let user_not_use=['music','notifi','video','setting','photo','search','profile','activity','adda','display','viral','list'];
		// console.log(u_name);
		if(!filter.test(u_name) || u_name.length < 5 || user_not_use.indexOf(u_name)> 0)
		{
       this.alertService.errorALert("Not a valid username");
    }
    else{

      this.credit.check().then(data=>{
  
                
        let info={'user_name':u_name};
        this.setService.changeUserName(data[0],data[1],info).subscribe(data=>{
  
          if(data['status'])
          {
             
            this.accountInfo['user_name']=u_name;
            this.allFalse();
            
          }
         
              
        });
          
      });


    }
   
    

  }

  checkUserName(){
    // console.log(15);

    let u_name=this.username.nativeElement.value;
		let filter =/^[-a-zA-Z0-9_.]*[a-z][-a-zA-Z0-9_.]*$/;
		let user_not_use=['music','notifi','video','setting','photo','search','profile','activity','adda','display','viral','list'];
		// console.log(u_name);
		if(!filter.test(u_name) || u_name.length < 5 || user_not_use.indexOf(u_name)> 0)
		{
        this.username.nativeElement.classList.add("wrong");
    }
    else{
      this.username.nativeElement.classList.remove("wrong");
        this.credit.check().then(data=>{
  
                
        let info={'user_name':u_name};
        this.setService.checkUserNameCheck(data[0],data[1],info).subscribe(data=>{
  
          if(data['status'])
          {
              // console.log(data[0][0]['status'])
              if(data[0][0]['status'])
              {
              
              this.userNameStatus=true;
              }
              else{
                this.userNameStatus=false;
              }
           
            
          }
         
              
        });
          
      });


    }
		


  }


  // about..............................................................


  loadAbout(){

    this.credit.check().then(data=>{

              
     
      this.setService.aboutInfo(data[0],data[1]).subscribe(data=>{

        if(data['status'])
        {
          
         this.aboutInfo=data[0][0];
        
        }
        // console.log(this.aboutInfo);

       
            
      });
        
    });

  }


  saveBirthDay(){
    var date=this.abc['_value'];
    let mL= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month=mL[date['month']- 1];
    let day=date['day'];
    let year=date['year'];
   
    if(this.abc['_text']!==''){
      
      this.credit.check().then(data=>{
  
                
        let info={
          'birth':day+" "+month+" "+year
        }
  
        this.setService.changeBirth(data[0],data[1],info).subscribe(data=>{
  
          if(data['status'])
          {
            this.aboutInfo['birth_day']=info['birth'];
            this.allFalse();
           
            
          }
         
              
        });
          
      });

    }
    else{
      this.alertService.errorALert("Choose Date");
    }
  }


  saveRelationship(){
    var relation=this.relastionship.nativeElement.value;
    
    
      
      this.credit.check().then(data=>{
  
                
        let info={
          'value':relation
        }
  
        this.setService.changeRelation(data[0],data[1],info).subscribe(data=>{
  
          if(data['status'])
          {
            this.aboutInfo['rel_status']=info['value'];
            this.allFalse();
           
            
          }
         
              
        });
          
      });

    
  
  }

  saveIntrest(){
    var intrest=this.intrest.nativeElement.value;
    
    
      
      this.credit.check().then(data=>{
  
                
        let info={
          'value':intrest
        }
  
        this.setService.changeIntrest(data[0],data[1],info).subscribe(data=>{
  
          if(data['status'])
          {
            this.aboutInfo['intrest']=info['value'];
            this.allFalse();
           
            
          }
         
              
        });
          
      });

    
  
  }


  saveGender(){
    var gender=this.gender.nativeElement.value;
    
    
      
      this.credit.check().then(data=>{
  
                
        let info={
          'gender':gender
        }
  
        this.setService.changeGender(data[0],data[1],info).subscribe(data=>{
  
          if(data['status'])
          {
            this.aboutInfo['gender']=info['gender'];
            this.allFalse();
           
            
          }
         
              
        });
          
      });

    
  
  }


  saveAbout(){
    var about=this.about.nativeElement.value.trim();
    console.log(about);
    
    
      
      this.credit.check().then(data=>{
  
                
        let info={
          'val':about
        }
  
        this.setService.changeAbout(data[0],data[1],info).subscribe(data=>{
  
          if(data['status'])
          {
            this.aboutInfo['about']=info['val'];
            this.allFalse();
           
            
          }
         
              
        });
          
      });

    
  
  }


  // contact.............................................................................

  loadContact(){

    this.credit.check().then(data=>{

              
     
      this.setService.contactInfo(data[0],data[1]).subscribe(data=>{

        if(data['status'])
        {
          
         this.contactInfo=data[0][0];
        
        }
        // console.log(this.contactInfo);

       
            
      });
        
    });

  }


  saveEmailId(){
    var email=this.emailId.nativeElement.value.trim();
    
    
      
    let filter=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(filter.test(email) )
    {
     

        this.credit.check().then(data=>{
  
                
          let info={'email':email};
          this.setService.addEmail(data[0],data[1],info).subscribe(data=>{
    
            if(data['status'])
            {
              
              this.contactInfo['e_m'].push(data[0][0]['email']);
              this.contactInfo['e_id'].push(data[0][0]['email_id']);
              this.allFalse();
             
              
            }
                
          });
            
        });
  
      
    }
    
    else{
      this.alertService.errorALert("Enter correct Email");
    }

    
  
  }

  removeEmail(i){

    this.credit.check().then(data=>{
  
                
      let info={'email_id':this.contactInfo['e_id'][i]};
      this.setService.removeEmail(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          
          this.contactInfo['e_id'].splice(i,i+1);
          this.contactInfo['e_m'].splice(i,i+1)
          this.allFalse();
         
          
        }
        // console.log(this.contactInfo['e_m']);
            
      });
        
    });


  }


  addContact(){
    var numb=this.number.nativeElement.value.trim();
    var ele=this.code.nativeElement;
    var code=ele.options[ele.selectedIndex].getAttribute("value");
    
      
    
    if(numb!=='' )
    {
     

        this.credit.check().then(data=>{
  
                
          let info={'contact_no':numb,
                      'code':code};
          this.setService.addContact(data[0],data[1],info).subscribe(data=>{
    
            if(data['status'])
            {
              
              this.contactInfo['c_m'].push(data[0][0]['cont']);
              this.contactInfo['c_id'].push(data[0][0]['cont_id']);
              this.allFalse();
             
              
            }
                
          });
            
        });
  
      
    }
    
    else{
      this.alertService.errorALert("Enter Number");
    }

    
  
  }

  removeContact(i){
    this.credit.check().then(data=>{
  
                
      let info={'con_id':this.contactInfo['c_id'][i],
                };
      this.setService.removeContact(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          
          this.contactInfo['c_m'].splice(i,i+1);
          this.contactInfo['c_id'].splice(i,i+1);
         
          
        }
            
      });
        
    });


  }

  addWebsite(){
    var website=this.website.nativeElement.value.trim();
    var res =/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    
    
    
      
    
    if(res.test(website) )
    {
     

        this.credit.check().then(data=>{
  
                
          let info={'web':website,
                     };
          this.setService.addWebsite(data[0],data[1],info).subscribe(data=>{
    
            if(data['status'])
            {
              
              this.contactInfo['w_m'].push(data[0][0]['web']);
              this.contactInfo['w_id'].push(data[0][0]['web_id']);
              this.allFalse();
             
              
            }
                
          });
            
        });
  
      
    }
    
    else{
      this.alertService.errorALert("Not a valid url");
    }

    
  
  }

  removeWebsiet(i){
    
    this.credit.check().then(data=>{
  
                
      let info={'web_id':this.contactInfo['w_id'][i],
                 };
      this.setService.removeWebsite(data[0],data[1],info).subscribe(data=>{
        // console.log(data);
        if(data['status'])
        {
          console.log(i);
          
          // this.contactInfo['w_m'].splice(i,i+i);;
          this.contactInfo['w_id'].splice(i,i+1);
          this.contactInfo['w_m'].splice(i,i+1)
          // console.log(this.contactInfo['w_id'] );
         
          
        }

       
            
      });
        
    });


  }


  addBlog(){
    var blog=this.blog.nativeElement.value.trim();
    var res =/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    
    
    
      
    
    if(res.test(blog) )
    {
     

        this.credit.check().then(data=>{
  
                
          let info={'blog':blog,
                     };
          this.setService.addBlog(data[0],data[1],info).subscribe(data=>{
    
            if(data['status'])
            {
              
              this.contactInfo['b_m'].push(data[0][0]['blog']);
              this.contactInfo['b_id'].push(data[0][0]['blog_id']);
              this.allFalse();
             
              
            }
                
          });
            
        });
  
      
    }
    
    else{
      this.alertService.errorALert("Not a valid url");
    }

    
  
  }


  removeBlog(i){

    this.credit.check().then(data=>{
  
                
      let info={'blog_id':this.contactInfo['b_id'][i],
                 };
      this.setService.removeBlog(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          
          
          this.contactInfo['b_id'].splice(i,i+1);
          this.contactInfo['b_m'].splice(i,i+1);
         
          
        }
            
      });
        
    });

  }

  // location.........................................................................................................

  loadLocationInfo(){
    this.credit.check().then(data=>{

              
     
      this.setService.loactionInfo(data[0],data[1]).subscribe(data=>{

        if(data['status'])
        {

          for(let key in data[0]){
            if(data[0][key]['loc_type']=='1'){
              this.locationInfo1=data[0][key];

            }
            else{
              this.locationInfo0=data[0][key];

            }

          }
        
        
        

        
        }
        

       
            
      });
        
    });
  }

  loadFavLocationInfo(){
    this.credit.check().then(data=>{

              
     
      this.setService.favLoactionInfo(data[0],data[1]).subscribe(data=>{

        if(data['status'])
        {
          
         this.favLoactionInfo=data[0];
        
         
         
          
        }

        // console.log(this.favLoactionInfo);

       
            
      });
        
    });
  }





  loadEducation(){
    this.credit.check().then(data=>{

              
     
      this.setService.eductionInfo(data[0],data[1]).subscribe(data=>{

        if(data['status'])
        {
          
         this.educationInfo=data[0];
        
          
        }
        // console.log(this.educationInfo);

       
            
      });
        
    });
  }

  loadWorkPlace(){
    this.credit.check().then(data=>{

              
     
      this.setService.workPlaceInfo(data[0],data[1]).subscribe(data=>{

        if(data['status'])
        {
          
         this.workPlaceInfo=data[0];
        
         
         
          
        }

        // console.log(this.workPlaceInfo);

       
            
      });
        
    });
  }

  loadLocation(loc){
    this.curTown=loc;
  
    this.curTownStatus=true;
    console.log(this.curTown);
   

  }

  saveCurrentTown(){
   

    if(this.curTownStatus){
      let info={};
      info=this.curTown;
      info['type']='Current Town';
      this.credit.check().then(data=>{
  
       
        this.setService.changeCurrentTown(data[0],data[1],info).subscribe(data=>{
       
          if(data['status'])
          {
         
            this.locationInfo1=data[0][0];
            this.allFalse();
           
           
            
          }
        // console.log(this.locationInfo0);
              
        });
          
      });


    
     


    }

   
  }


  loadLocationH(loc){
    this.homeTown=loc;
   
    this.homeTownStatus=true;
    // console.log(this.homeTown)


  }


  saveHomeTown(){

    if(this.homeTownStatus){
      let info={};
      info=this.homeTown;
      info['type']='Home Town';
      this.credit.check().then(data=>{
  
       
        this.setService.changeHomeTown(data[0],data[1],info).subscribe(data=>{
  
          if(data['status'])
          {
            // this.locationInfo1={};
            this.locationInfo0=data[0][0];
            this.allFalse();
            
           
            
          }
              
        });
          
      });


    
     


    }

   
  }


  loadLocationFav(loc){
    this.favTown=loc;
   
    this.favTownStatus=true;
    console.log(this.favTown)


  }

  saveFavTown(){

    if(this.favTownStatus){
      let info={};
      info=this.favTown;
     
      this.credit.check().then(data=>{
  
       
        this.setService.addFavTown(data[0],data[1],info).subscribe(data=>{
  
          if(data['status'])
          {
            
           
            this.favLoactionInfo.push(data[0][0]);
            
          }
              
        });
          
      });


    
     


    }

   
  }



  removeFavLocation(i){

    let info={};
   
		info['fav_l_id']=this.favLoactionInfo[i]['fav_l_id'];
   
    this.credit.check().then(data=>{

     
      this.setService.removeFavTown(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          
         
          this.favLoactionInfo.splice(i,i+1);
          
        }
            
      });
        
    });


  }


  loadLocationEdu(loc){
    this.eduAdd=loc;
   
    this.eduAddStatus=true;
    // console.log(this.eduAdd)

  }

  saveEdu(){

   
      let info={};
     
      info=this.eduAdd;
			info['edu_name']=this.eduname.nativeElement.value.trim();
			info['from']=this.eduFrom.nativeElement.value;
			info['to']=this.eduTo.nativeElement.value;
			info['type']=this.instituteType.nativeElement.value;
		
			
     if(this.eduname.nativeElement.value.trim()!==''){
       if(this.eduAddStatus){
        console.log(info);
        this.credit.check().then(data=>{
  
       
          this.setService.addEducation(data[0],data[1],info).subscribe(data=>{
    
            if(data['status'])
            {
              
             
              this.educationInfo.push(data[0]);
              this.allFalse();
              
            }
                
          });
            
        });
        

       }
       else{
        this.alertService.errorALert("Enter Institute Location");
      }
     

     }
     else{
       this.alertService.errorALert("Enter Institute Name");
     }
      

   
  }


  removeEdu(i){
    this.credit.check().then(data=>{
  
       let info={};
       info['edu_id']=this.educationInfo[i]['edu_id']
      this.setService.removeEducation(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          
         
          this.educationInfo.splice(i,i+1);
          
        }
            
      });
        
    });

  }

  loadLocationWp(loc){
    this.wpAdd=loc;
   
    this.wpAddStatus=true;
    // console.log(this.eduAdd)

  }

  saveWp(){

   
      let info={};
     
      info=this.wpAdd;
			info['wp']=this.wpname.nativeElement.value.trim();
			info['from']=this.wpFrom.nativeElement.value;
			info['to']=this.wpTo.nativeElement.value;
			info['wp_type']=this.wpType.nativeElement.value;
		
			if(info['wp']!==''){
        if(this.wpAddStatus){

          this.credit.check().then(data=>{
  
       
            this.setService.addWp(data[0],data[1],info).subscribe(data=>{
      
              if(data['status'])
              {
                
               
                this.workPlaceInfo.push(data[0][0]);
                this.allFalse();
                
              }
                  
            });
              
          });

        }
        else{
          this.alertService.errorALert("Enter Work Place location");

        }
        

      }
      else{
        this.alertService.errorALert("Enter Work Place name");
      }
     
      

   
  }

  removeWp(i){

    this.credit.check().then(data=>{
      let info={};
      info['wp_id']=this.workPlaceInfo[i]['wp_id']
       
      this.setService.removeWp(data[0],data[1],info).subscribe(data=>{

        if(data['status'])
        {
          
         
          this.workPlaceInfo.splice(i,i+1);
          
        }
            
      });
        
    });

  }


  privacy(ev,tbl){
    const a=this.popCtrl.create(PrivacyPage,{tbl:tbl});
    a.present({ev:ev})
   a.onDidDismiss((data)=>{
    //  console.log(this.privacyArray[data['val']]);
                            
    ev.target.setAttribute("name",this.privacyArray[data['val']])
    ev.target.classList.add("ion-md-"+this.privacyArray[data['val']]);
    
  });
    
    // console.log();
  }

}