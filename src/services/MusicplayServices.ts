import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class MusicplayerServices{
    musicArray:any=[];
    count=0;
    repeat:boolean=false;
    shuffle:boolean=false;

    constructor(private con:ConnectionServices){

    }

    loadDetail(user:any,loged:any,info){
        console.log(info);
        let url="http://app.makeurworld.com/home/music/ply_sng";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    getIndex(music_id){

        this.count=-1;
       for(let i=0; i<this.musicArray.length;i++){
                if(this.musicArray[i]['music_id']==music_id){
                   this.count=i;
                    break;
                }
       }
       console.log(this.count);
       return this.count;

    }


    prevMus(i){

        if(this.musicArray.length>0 && i < this.musicArray.length && i>=0)
        {
           return this.musicArray[i-1]['music_id'];
        }
        else{
            return this.musicArray[i]['music_id'];
        }

    }


    nextMus(i){

        if(!this.repeat && !this.shuffle){

            if(this.musicArray.length>0 && i < this.musicArray.length && i>=0)
            {
               return this.musicArray[i+1]['music_id'];
            }
            else{
                return this.musicArray[i]['music_id'];
            }

        }

        if(this.repeat && !this.shuffle){

            return this.musicArray[i]['music_id'];

        }


        if(!this.repeat && this.shuffle){

            return this.musicArray[Math.floor(Math.random() * this.musicArray.length ) + 1  
            ]['music_id'];

        }

       

    }


    

    

}