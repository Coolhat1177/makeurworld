import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';
import { AlertServices } from './AlertServices';

@Injectable()
export class ImageStore{
    imgArr=[];

    constructor(private con:ConnectionServices,private alert:AlertServices){

    }

    firstLoad(user:any,loged:any){
        let url="http://coolhat//home/image/notifi_load";

        return this.con.postDataFetch(user,loged,url);

    }

}