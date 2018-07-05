export class NotifiService{
    private notifi=[];
    
    addNotifi(notification:any){
        this.notifi.push(notification);
    }

    getNotifi(){
        return this.notifi;
    }
}