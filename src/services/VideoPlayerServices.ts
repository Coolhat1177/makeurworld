import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class VideoPlayerServices{
     video_id:string;
     videoArray:any=[];
     count:number=0;
    constructor(private con:ConnectionServices){

    }

    loadDetail(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/video/vid_plyr";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }
    getIndex(video_id){

        this.count=-1;
        console.log(video_id);
       console.log(this.videoArray)
       for(let i=0; i<this.videoArray.length;i++){
          
                if(this.videoArray[i]['video_id']==video_id){
                   this.count=i;
                    break;
                }
       }
       console.log(this.count);
       return this.count;

    }


    prevVid(i){

        if(this.videoArray.length>0 && i < this.videoArray.length && i>=0)
        {
           return this.videoArray[i-1]['video_id'];
        }
        else{
            return this.videoArray[i]['video_id'];
        }

    }

    nextVid(i){

        if(this.videoArray.length>0 && i < this.videoArray.length && i>=0)
        {
           return this.videoArray[i+1]['video_id'];
        }
        else{
            return this.videoArray[i]['video_id'];
        }

       

    }


    

}