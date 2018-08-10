import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class FavService{
    

    constructor(private con:ConnectionServices){

    }


    favVideo(user:any,loged:any,info){
       
        let url="http://coolhat/home/video/fav_video_d";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    favVideoMr(user:any,loged:any,info){
       
        let url="http://coolhat/home/video/fav_video_d_mr";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    favSuggestion(user:any,loged:any,info){
       
        let url="http://coolhat/home/video/frnd_mem_all_s_fav";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    suggestFav(user:any,loged:any,info){
        let url="http://coolhat/home/video/add_to_suggestion_fav";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);
    }

    videoForFav(user:any,loged:any,info){
        let url="http://coolhat/home/video/fav_down_toadd";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);
    }

    videoToFav(user:any,loged:any,info){
        let url="http://coolhat/home/video/add_to_fav";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);
    }

    favVideoCollectio(user:any,loged:any,info){
        let url="http://coolhat/home/video/fav_cr_li_d";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);
    }


    favOpen(user:any,loged:any,info){
        let url="http://coolhat/home/video/fav_op";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);
    }


}