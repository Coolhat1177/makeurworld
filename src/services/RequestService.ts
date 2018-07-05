export class RequestService{
    private request=[];
    
    addRequest(request:any){
        this.request.push(request);
    }

    getRequest(){
        return this.request;
    }
}