import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class CreditService{
    constructor(private storage:Storage){

    }

    check():Promise<any>{

        return Promise.all([  this.storage.get('user'),this.storage.get('loged')]);

    }
    musplyStatus():Promise<any>{

        return Promise.all([  this.storage.get('repeat'),this.storage.get('shuffle')]);
    }





}
