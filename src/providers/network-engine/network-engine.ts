import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NetworkEngineProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NetworkEngineProvider Provider');
  }


  sendRequest(type:string)
  {
      // console.log(type);
      // let url="http://coolhat/log/login/login_in";
      // let request=this.http.get(url);
      // return request.toPromise();
      

  }

}
