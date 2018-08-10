import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class UploadServices{
  

    constructor(private con:ConnectionServices){

    }

    detailImageCh(user:any,loged:any,info:any){
       
        let url="http://coolhat/home/image/dt_img_gal_ch";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    detailMusicCh(user:any,loged:any,info:any){
       
        let url="http://coolhat/home/music/music_d_ch";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    detailVideoCh(user:any,loged:any,info:any){
       
        let url="http://coolhat/home/video/video_store_ch";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


}