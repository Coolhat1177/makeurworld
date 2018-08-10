
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
       
        let url="http://coolhat/home/main/mem_req_accept_pro";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    IgnoreRequest(user:any,loged:any,info){
       
        let url="http://coolhat/home/main/mem_req_ignore";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }
    
    cancelRequest(user:any,loged:any,info){
       
        let url="http://coolhat/home/main/mem_req_can";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    removeFriend(user:any,loged:any,info){
       
        let url="http://coolhat/home/main/mem_req_rem";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    AddFriend(user:any,loged:any,info){
       
        let url="http://coolhat/home/main/frnd_req";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    AttachFriend(user:any,loged:any,info){
       
        let url="http://coolhat/home/main/attach_req";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    DettachFriend(user:any,loged:any,info){
       
        let url="http://coolhat/home/main/detach_req";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    loadFriend(user:any,loged:any){

        let url="http://coolhat/home/main/frnd_mem_all";

       return this.con.postDataFetch(user,loged,url);


    }

    loadAttached(user:any,loged:any){

        let url="http://coolhat/home/main/attach_mem_all";

       return this.con.postDataFetch(user,loged,url);


    }


    loadAttache(user:any,loged:any){

        let url="http://coolhat/home/main/attaches_mem_all";

       return this.con.postDataFetch(user,loged,url);


    }
}