import { Injectable } from "@angular/core";
import { ConnectionServices } from "./ServerConnection";



@Injectable()
export class PersonalChatServices{
     frnd_id:string;
     top_load:string;
     message:"";
     typingS:boolean=false;
     typingClass:string="chat_typing1";
     carterPosition:any=0;
     currentType:any=[];
     end_t:string="";

     constructor(private con:ConnectionServices){

    }

    loadChat(user:any,loged:any,info){
       
        let url="http://app.makeurworld.com/home/main/message_new_show";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    chatInfo(user:any,loged:any,info){
       
        let url="http://app.makeurworld.com/home/main/user_profilStatus";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    sendChat(user:any,loged:any,info){
       
        let url="http://app.makeurworld.com/home/main/mess_l";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


     

}