
import { Injectable } from '@angular/core';
import { ConnectionServices } from './ServerConnection';
import { AlertServices } from './AlertServices';



@Injectable()
export class RequestService{
    private request=[];
    private sentRequest=[];

    constructor(private con:ConnectionServices){

    }
    
    addRequest(request:any){
        this.request.push(request);
    }
    addSentRequest(request:any){
        this.sentRequest.push(request);
    }

    getRequest(){
        return this.request;
    }

    getSentRequest(){

        return this.sentRequest;

    }

    acceptRequest(user:any,loged:any,info){
       
        let url="http://app.makeurworld.com/home/main/message_new_show";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    IgnoreRequest(user:any,loged:any,info){
       
        let url="http://app.makeurworld.com/home/main/mem_req_ignore";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }
    
    cancelRequest(user:any,loged:any,info){
       
        let url="http://app.makeurworld.com/home/main/mem_req_can";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    AddFriend(user:any,loged:any,info){
       
        let url="http://app.makeurworld.com/home/main/mem_req_can";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }
}