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

cnvSuggetion(user:any,loged:any,info:any){
       
    let url="http://coolhat/home/image/frnd_mem_all_s_cnv";
    let info1=JSON.stringify(info);

    return this.con.postDataAsked(user,loged,info1,url);


}



cnvSuggest(user:any,loged:any,info:any){
    let url="http://coolhat/home/image/add_to_suggestion_cnv";
    let info1=JSON.stringify(info);

    return this.con.postDataAsked(user,loged,info1,url);


}





musSuggetion(user:any,loged:any,info:any){
       
    let url="http://coolhat/home/music/frnd_mem_all_s_mus";
    let info1=JSON.stringify(info);

    return this.con.postDataAsked(user,loged,info1,url);


}


musSugget(user:any,loged:any,info:any){
       
    let url="http://coolhat/home/music/add_to_suggestion_mus";
    let info1=JSON.stringify(info);

    return this.con.postDataAsked(user,loged,info1,url);


}



musPlaylist(user:any,loged:any,info:any){
       
    let url="http://coolhat/home/music/mus_in_cnv";
    let info1=JSON.stringify(info);

    return this.con.postDataAsked(user,loged,info1,url);


}

musAddPlaylist(user:any,loged:any,info:any){
       
    let url="http://coolhat/home/music/add_to_playlist";
    let info1=JSON.stringify(info);

    return this.con.postDataAsked(user,loged,info1,url);


}


vidSuggetion(user:any,loged:any,info:any){
       
    let url="http://coolhat/home/video/frnd_mem_all_s_vid";
    let info1=JSON.stringify(info);

    return this.con.postDataAsked(user,loged,info1,url);


}


vidSugget(user:any,loged:any,info:any){
       
    let url="http://coolhat/home/video/add_to_suggestion_vid";
    let info1=JSON.stringify(info);

    return this.con.postDataAsked(user,loged,info1,url);


}


vidFav(user:any,loged:any,info:any){
       
    let url="http://coolhat/home/video/vid_in_cnv";
    let info1=JSON.stringify(info);

    return this.con.postDataAsked(user,loged,info1,url);


}

vidAddFav(user:any,loged:any,info:any){
       
    let url="http://coolhat/home/video/add_to_fav";
    let info1=JSON.stringify(info);

    return this.con.postDataAsked(user,loged,info1,url);


}

    

}