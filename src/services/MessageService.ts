export class MessageService{
    private message=[];
    
    addMessage(message:any){
        this.message.push(message);
    }

    getMessage(){
        return this.message;
    }
}