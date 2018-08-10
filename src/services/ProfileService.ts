import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class ProfileServices{
    

    constructor(private con:ConnectionServices){

    }


    loadBasic(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/setting/basic_infoL";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    loadPhoto(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/setting/imgGal_load_p_oth";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    loadMusic(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/setting/lib_down_p_oth";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    loadVideo(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/setting/video_down_profile_oth";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    loadCanvas(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/setting/cnv_pro_oth_rec";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    loadPlaylist(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/setting/ply_pro_oth_rec";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    loadFav(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/setting/fav_pro_oth_rec";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    loadFrnd(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/setting/frnd_mem_all_oth_pro";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


}