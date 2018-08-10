import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class PlaylistService{
    

    constructor(private con:ConnectionServices){

    }

    plySongLoad(user:any,loged:any,info){
       
        let url="http://coolhat/home/music/playlist_song_dis";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    plySongLoadMr(user:any,loged:any,info){
       
        let url="http://coolhat/home/music/playlist_song_dis_mr";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    plySuggestion(user:any,loged:any,info){
       
        let url="http://coolhat/home/music/frnd_mem_all_s_ply";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    suggestPly(user:any,loged:any,info){
       
        let url="http://coolhat/home/music/add_to_suggestion_ply";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    openPlaylist(user:any,loged:any,info){
       
        let url="http://coolhat/home/music/ply_op";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }
    
    playlistSong(user:any,loged:any,info){
       
        let url="http://coolhat/home/music/ply_op";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }
}