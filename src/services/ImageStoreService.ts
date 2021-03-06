import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class ImageStoreService{
    imgArr=[];
    lats_time:string;
    vidArry=[];

    constructor(private con:ConnectionServices){

    }



    addToList(data:any)
    {
        this.imgArr.push(data);
    }

    getList(){
        return this.imgArr;
    }




    firstLoad(user:any,loged:any){
        let url="http://coolhat/home/image/imgGal_load";

        return this.con.postDataFetch(user,loged,url);

    }

  

    moreLoad(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/image/imgGal_load_mr";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    imageAll(user:any,loged:any){
        let url="http://coolhat/home/image/own_image";

        return this.con.postDataFetch(user,loged,url);

    }


    last_time(){
        return this.imgArr[this.imgArr.length -1]['image_time'];
    }


    bgProImg(user:any,loged:any){
            let url="http://coolhat/home/image/imgGal_load";

            return this.con.postDataFetch(user,loged,url);

    }


    canvasLoad(user:any,loged:any){
        let url="http://coolhat/home/image/imgBoard_load";

        return this.con.postDataFetch(user,loged,url);

}


canvasLoadMr(user:any,loged:any,info:any){
    let url="http://coolhat/home/image/imgBoard_load_mr";

    let info1=JSON.stringify(info);

    return this.con.postDataAsked(user,loged,info1,url);

}



    firstLoadM(user:any,loged:any){
        let url="http://coolhat/home/music/lib_down";

        return this.con.postDataFetch(user,loged,url);

    }

    moreLoadM(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/music/lib_down_mr";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }





    last_timeM(){
        return this.imgArr[this.imgArr.length -1]['music_load'];
    }


    
   
    ownMusicCollection(user:any,loged:any){
        let url="http://coolhat/home/music/just_nxt_own";

        return this.con.postDataFetch(user,loged,url);

    }


    playlistLoad(user:any,loged:any){
        let url="http://coolhat/home/music/playlist_down";

        return this.con.postDataFetch(user,loged,url);

    }

    playlistLoadM(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/music/playlist_down_mr";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    // video storage



    firstLoadVid(user:any,loged:any){
        let url="http://coolhat/home/video/video_down";

        return this.con.postDataFetch(user,loged,url);

    }



    getListVid(){
        return this.vidArry;
    }


    moreLoadVid(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/video/video_down_mr";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    ownVideoCollectio(user:any,loged:any){
        let url="http://coolhat/home/video/own_vid_np";

        return this.con.postDataFetch(user,loged,url);

    }

    favLoad(user:any,loged:any){
        let url="http://coolhat/home/video/fav_down";

        return this.con.postDataFetch(user,loged,url);

    }

    favLoadMr(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/video/fav_down_mr";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }



}