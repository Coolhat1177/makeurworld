import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class VideoPlayerServices{
     video_id:string;
     videoArray:any=[];
    constructor(private con:ConnectionServices){

    }

    loadDetail(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/video/vid_plyr";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }
}