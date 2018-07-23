
import { Injectable } from '@angular/core';
import { ConnectionServices } from './ServerConnection';

// top header request..................



@Injectable()
export class TopHeaderServices{

    constructor(private con:ConnectionServices){

    }

    notificationLoad(user:any,loged:any){

        let url="http://coolhat/home/main/notifi_load";

       return this.con.postDataFetch(user,loged,url);


    }
    messageLaod(user:any,loged:any){

        let url="http://coolhat/home/main/nw_mess_l";

       return this.con.postDataFetch(user,loged,url);


    }
    requestLoad(user:any,loged:any){

        let url="http://coolhat/home/main/meme_req_list";

       return this.con.postDataFetch(user,loged,url);


    }

    sentRequestLoad(user:any,loged:any){

        let url="http://coolhat/home/main/meme_req_list_sent";

       return this.con.postDataFetch(user,loged,url);


    }

    searchLoad(user:any,loged:any,info:any)
    {
        let url="http://coolhat/home/main/search_op";

        return this.con.postDataAsked(user,loged,info,url);

    }

    searchLoadEmail(user:any,loged:any,info:any)
    {
        let url="http://coolhat/home/main/search_op_email";

        return this.con.postDataAsked(user,loged,info,url);

    }

    searchLoadAdda(user:any,loged:any,info:any)
    {
        let url="http://coolhat/home/main/search_op_email";

        return this.con.postDataAsked(user,loged,info,url);

    }
}
