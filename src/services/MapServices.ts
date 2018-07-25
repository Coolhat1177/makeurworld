export class MapService{
    map:any;
    marker:any;

    addMarker(loc,id){
        this.marker=new google.maps.Marker({
            position:loc,
            map:this.map,
           
            });
    }

}