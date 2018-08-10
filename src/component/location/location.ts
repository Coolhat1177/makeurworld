import { Component, Injectable, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

declare var google:any;

@Component({
  selector: 'location-temp',
  template: `
  <input placeholder="Search for location"  type="text"  #currentTown>
            `,
  inputs:['activity']
})

@Injectable()
export class LocationChooserPage  implements OnInit {
    @Input() activity ;
    @Output() loactionEmitter= new EventEmitter<any>();
    @ViewChild("currentTown") currentTown:ElementRef;
    public latitude: number;
    public longitude: number;
  
    constructor(private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone){
       
       
      
    }



    ngOnInit(){
         let autocomplete = new google.maps.places.Autocomplete(this.currentTown.nativeElement, {
            types: ["address"]
          });
          autocomplete.addListener("place_changed", () => {
          
            this.ngZone.run(() => {
              
              let place: google.maps.places.PlaceResult = autocomplete.getPlace();

            
              if (place.geometry === undefined || place.geometry === null) {
                return;
              }

              let loc={lat:place.geometry.location.lat(),
                        lng:place.geometry.location.lng()};
                       
            
                        console.log(loc);
             
             this.addLoaction(loc.lat,loc.lng);
            // this.loactionEmitter.emit(loc);
            });
          });
        
    }

    addLoaction(lat,lng){

        let geocoder = new google.maps.Geocoder;
    let latlng = {lat: lat, lng: lng};
    geocoder.geocode({'location': latlng}, (results, status) => {
      let add=results[0].address_components;
      let loc:any={
        lat:lat,
        lng:lng,
        country:'',
        state:'',
        town:'',
        full_add:''
      }
      for(let key in add){
        
        if(add[key].types[0]=='country')
        {
          loc['country']=add[key]['long_name'];
        }
    
       if(add[key].types[0]=='administrative_area_level_1')
       {
        loc['state']=add[key]['long_name'];
       }
       if(add[key].types[0]=='administrative_area_level_2')
       {
        loc['town']=add[key]['long_name'];
       }
    
      
    
    
      }

      loc.full_add=loc['town']+" "+loc['state']+" "+loc['country'];

      

      this.loactionEmitter.emit(loc);
        
    });
    
    
      }



}