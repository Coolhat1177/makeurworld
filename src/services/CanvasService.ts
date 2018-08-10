import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class CanvasService{
    

    constructor(private con:ConnectionServices){

    }


    openCanvse(user:any,loged:any,info){
       
        let url="http://coolhat/home/image/imgBoard_load_at";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    
        
    }

    canvasImgLoad(user:any,loged:any,info){
       
        let url="http://coolhat/home/image/imgBoard_load_img";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    canvasImgLoadMr(user:any,loged:any,info){
       
        let url="http://coolhat/home/image/imgBoard_load_img_mr";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    canvasImgList(user:any,loged:any,info){
       
        let url="http://coolhat/home/image/cnv_img_li_up";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }
}