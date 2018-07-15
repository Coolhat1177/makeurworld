import { Http, Response, Headers } from "@angular/http";
import 'rxjs';
import { Injectable } from '@angular/core';
import { ReturnStatement } from "@angular/compiler";
import { HttpParams } from "@angular/common/http";


@Injectable()
export class ConnectionServices{

    
    constructor(private http:Http)
    {

    }
    postData(info:any,url:string)
    {
        // console.log(url);
        // console.log(info);
        let headers=new Headers();
        // let a=6;
        headers.append("Content-Type","application/x-www-form-urlencoded");
        const body = new HttpParams().set('info', info);

      
        return this.http.post(url,

            body.toString(),{headers:headers})
            .map((respose:Response)=>{
                console.log(respose);
                return respose.json();
            })
    }

    postDataOtp(credit:any,url:string)
    {
        console.log(credit);
       
        let headers=new Headers();
        // let a=6;
        headers.append("Content-Type","application/x-www-form-urlencoded");
        const body = new HttpParams().set('user', credit);

        console.log(body.toString());
        return this.http.post(url,

           body.toString(),{headers:headers})
            .map((respose:Response)=>{
                console.log(respose);
                return respose.json();
            })
    }

    postDataCredir(info:any,credit:any,url:string)
    {
        console.log(info);
       
        let headers=new Headers();
        // let a=6;
        headers.append("Content-Type","application/x-www-form-urlencoded");
        const body = new HttpParams().set('user', credit).set('info',info);
        // body.set('info',info);
        
        return this.http.post(url,

           body.toString(),{headers:headers})
            .map((respose:Response)=>{
                console.log(respose);
                return respose.json();
            })
    }


    postDataFetch(user:any,loged:any,url:string)
    {
        let headers=new Headers();
        // let a=6;
        headers.append("Content-Type","application/x-www-form-urlencoded");
        const body = new HttpParams().set('user', user).set('loged',loged);
        // body.set('info',info);
        
        return this.http.post(url,

           body.toString(),{headers:headers})
            .map((respose:Response)=>{
                console.log(respose);
                return respose.json();
            })
    }


    postDataAsked(user:any,loged:any,info:any,url:string)
    {
        let headers=new Headers();
        // let a=6;
        headers.append("Content-Type","application/x-www-form-urlencoded");
        const body = new HttpParams().set('user', user).set('loged',loged).set('info',info);
        // body.set('info',info);
        
        return this.http.post(url,

           body.toString(),{headers:headers})
            .map((respose:Response)=>{
                console.log(respose);
                return respose.json();
            })
    }

}