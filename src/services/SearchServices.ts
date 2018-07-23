export class SearchService
{
    private searchList=[];
    private seachAddaList=[];

    addList(data:any)
    {
        this.searchList.push(data);
    }

    getList()
    {
        return this.searchList;
    }

    lenList(){

        return this.searchList.length;
    }

    resetList(){
         this.searchList=[];
    }


    addAddaList(data:any){

        this.seachAddaList.push(data);

    }

    getAddaList(){

        return this.seachAddaList;
    }

    lenAddaList(){

        return this.seachAddaList.length;
    }

    resetAddaList(){
         this.seachAddaList=[];
    }

    

}