import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class ImageStoreService{
    imgArr=[];
    lats_time:string;

    constructor(private con:ConnectionServices){

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


    addToList(data:any)
    {
        this.imgArr.push(data);
    }

    getList(){
        return this.imgArr;
    }

    last_time(){
            return this.imgArr[this.imgArr.length -1]['image_time'];

    }




}