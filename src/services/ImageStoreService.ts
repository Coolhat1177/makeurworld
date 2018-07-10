import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class ImageStoreService{
    imgArr=[];
    lats_time:string;

    constructor(private con:ConnectionServices){

    }

    firstLoad(user:any,loged:any){
        let url="http://coolhat//home/image/imgGal_load";

        return this.con.postDataFetch(user,loged,url);

    }

    addToList(data:any)
    {
        this.imgArr.push(data);
    }

    getList(){
        return this.imgArr;
    }

    bgProImg(user:any,loged:any){
        let url="http://coolhat//home/image/imgGal_load";

        return this.con.postDataFetch(user,loged,url);

    }




}