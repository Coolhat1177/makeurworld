export class SearchService
{
    private searchList=[];

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

}