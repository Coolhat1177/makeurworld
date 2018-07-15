import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';

@Injectable()
export class SuggestionServices{

    constructor(private con:ConnectionServices){

    }

    imgSuggetion(user:any,loged:any,info:any){
       
        let url="http://coolhat/home/image/frnd_mem_all_s";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    imgSugget(user:any,loged:any,info:any){
       
        let url="http://coolhat/home/image/add_to_suggestion";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    imgCanvas(user:any,loged:any,info:any){
       
        let url="http://coolhat/home/image/img_in_cnv";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


 imgAddCanvas(user:any,loged:any,info:any){
       
    let url="http://coolhat/home/image/board_pin_img";
    let info1=JSON.stringify(info);

    return this.con.postDataAsked(user,loged,info1,url);


}
    

}