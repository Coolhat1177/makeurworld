import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class ImageZoomServices{
    imageList=[];
    image_id:string;
    count=-1;

    constructor(private con:ConnectionServices){

    }


    loadImg(user:any,loged:any,info){
       
        let url="http://coolhat/home/image/img_zoom";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    nextImg(i){

        console.log(this.imageList[0]);

        if(this.imageList.length>0 && i < this.imageList.length && i>=0)
        {
           return this.imageList[i+1]['image_id'];
        }
        else{
            return this.imageList[i]['image_id'];
        }

    }

 
    currentIndex(image_id){
        // console.log(this.imageList);
      this.count=-1;
       for(let i=0; i<this.imageList.length;i++){
                if(this.imageList[i]['image_id']==image_id){
                   this.count=i;
                    break;
                }
       }
       console.log(this.count);
       return this.count;
     
    }

    prevImg(i){

        if(this.imageList.length>0 && i < this.imageList.length && i>=0)
        {
           return this.imageList[i-1]['image_id'];
        }
        else{
            return this.imageList[i]['image_id'];
        }

    }


    checkStatus(user:any,loged:any,info:any){
      
       
        let url="http://coolhat/home/image/check_lib";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

 

  
    
}