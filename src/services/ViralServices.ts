import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';

@Injectable()
export class ViralServices{

    constructor(private con:ConnectionServices){

    }

    vidSug(user:any,loged:any,info:any){
       
        let url="http://coolhat/home/video/vidSug_load";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    viralList(user:any,loged:any,info:any){
       
        let url="http://coolhat/home/video/vid_np_sug";

        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    imgSug(user:any,loged:any,info:any){
       
        let url="http://coolhat/home/image/imgSug_load";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

 
    viraImagelList(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/image/img_p_n_sug";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    


    addImage(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/image/add_to_col";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    addVideo(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/video/add_to_col_vid";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    addMusic(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/video/add_to_col_mus";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }



    // delet code






    musSug(user:any,loged:any,info:any){
       
        let url="http://coolhat/home/music/musSug_load";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    viralMusicList(user:any,loged:any,info:any){
       
        let url="http://coolhat/home/music/just_nxt_sug";

      
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    containReport(user:any,loged:any,info:any){
       
        let url="http://coolhat/home/main/report_cnt";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }



    chnageBgCanvas(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/image/board_bg_set";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    // check status code..........................................................


    checkStatusCanvas(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/image/brd_check1";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }
    
    checkStatus(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/image/check_lib";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    checkStatusV(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/video/video_check";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    checkStatusf(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/video/fav_check1";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    checkStatusM(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/music/music_check";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    checkStatusP(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/music/ply_check1";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    // delete code...................................................



    deleteCanvas(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/image/brd_remove";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    deleteImgCanvas(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/image/imgBoard_img_del";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }




    deleteImage(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/image/imgGal_re";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    deleteVideo(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/video/video_remove";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    deleteFav(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/video/fav_remove";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }



    deleteMusic(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/music/music_remove";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    deleteFavVideo(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/video/favvideo_remove";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    deletePlaylist(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/music/ply_just_nxt";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    deletePlyMusic(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/music/playlistsong_remove";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }





}