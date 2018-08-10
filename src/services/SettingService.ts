import { Injectable } from "@angular/core";
import { ConnectionServices } from './ServerConnection';


@Injectable()
export class SettingServices{
   
    constructor(private con:ConnectionServices){

    }


    accountInfo(user:any,loged:any){

        let url="http://coolhat/home/setting/profile_re";

       return this.con.postDataFetch(user,loged,url);


    }


    aboutInfo(user:any,loged:any){

        let url="http://coolhat/home/setting/load_about";

       return this.con.postDataFetch(user,loged,url);


    }


    contactInfo(user:any,loged:any){

        let url="http://coolhat/home/setting/load_contact";

       return this.con.postDataFetch(user,loged,url);


    }

    loactionInfo(user:any,loged:any){

        let url="http://coolhat/home/setting/loct_l";

       return this.con.postDataFetch(user,loged,url);


    }

    favLoactionInfo(user:any,loged:any){

        let url="http://coolhat/home/setting/loct_fav";

       return this.con.postDataFetch(user,loged,url);


    }

    eductionInfo(user:any,loged:any){

        let url="http://coolhat/home/setting/education_l";

       return this.con.postDataFetch(user,loged,url);


    }

   workPlaceInfo(user:any,loged:any){

        let url="http://coolhat/home/setting/wp_l";

       return this.con.postDataFetch(user,loged,url);


    }

    changeName(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/u_name";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    

    changeEmail(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/u_email";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }
    
    changePassword(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/u_pass";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    changeFrndReq(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/visibility";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    changeUserName(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/user_id_change";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    checkUserNameCheck(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/user_id_check";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    changeBirth(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/u_birth";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    changeRelation(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/rl_st";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    changeIntrest(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/intre";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    changeGender(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/u_gender";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    changeAbout(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/about";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    addEmail(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/add_email";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }
    removeEmail(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/remove_email";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    addContact(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/add_contact";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    removeContact(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/remove_con";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    addWebsite(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/add_website";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


   removeWebsite(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/remove_web";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


    addBlog(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/add_blog";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    removeBlog(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/remove_blog";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    changeCurrentTown(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/location_c";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    changeHomeTown(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/location_h";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    addFavTown(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/add_fav_loc";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    removeFavTown(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/rm_loct_fav";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

   addEducation(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/education_in";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

   removeEducation(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/rm_education";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    addWp(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/wp_in";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    removeWp(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/rm_wp";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }

    privacy(user:any,loged:any,info){
       
        let url="http://coolhat/home//setting/visibility";
        let info1=JSON.stringify(info);

        return this.con.postDataAsked(user,loged,info1,url);


    }


}