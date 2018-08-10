import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class ReactionServices{

    emo=['http://m.makeurworld.com/public/images/1f60d.svg',
        'http://m.makeurworld.com/public/images/1f632.svg',
        'http://m.makeurworld.com/public/images/1f602.svg',
        'http://m.makeurworld.com/public/images/1f600.svg',
        'http://m.makeurworld.com/public/images/1f622.svg',
        'http://m.makeurworld.com/public/images/1f621.svg'];

    constructor(private con:ConnectionServices){

    }

    getEmo(){
        return this.emo;
    }

    loadComment(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/main/activity_rev_li_c";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    submitComment(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/main/activity_review";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    loadReact(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/main/activity_rat_li";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    loadCurReaction(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/main/rating_status";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    submitReact(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/main/activity_rating";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    loadCurComment(user:any,loged:any,info){
        console.log(info);
        let url="http://coolhat/home/main/review_load_c";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }
}