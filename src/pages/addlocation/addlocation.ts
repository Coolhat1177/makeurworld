import { Component, ElementRef, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { MapsAPILoader } from '@agm/core';



declare var google:any;

@Component({
  selector: 'page-addlocation',
  templateUrl: 'addlocation.html',
})
export class AddlocationPage  {

  initCord={'lat':51.678418,
            'lng':7.809007};

  marker:any={lat:'',
          lng:''

  }
  public latitude: number;
  public longitude: number;
  status:boolean=false;
  public zoom: number;
           

 
  @ViewChild('searchElementRef') searchElementRef:ElementRef;
  @ViewChild('search') search:ElementRef;

  constructor(public navCtrl: NavController,
             public navParams: NavParams,
             private viewCtrl:ViewController,
          
             private mapsAPILoader: MapsAPILoader,
             private ngZone: NgZone) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddlocationPage');
    this.showMap();
  }
  
  dismissView(){

    this.viewCtrl.dismiss({status:false});

  }


  showMap(){
   

    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    
    this.setCurrentPosition();

   
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.search.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.status=true;
        this.ngZone.run(() => {
          
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

         
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
          
  }

  onSetMarker(event: any) {
    // console.log(event);
  
    this.latitude=event.coords.lat;
    this.longitude=event.coords.lng;
    this.status=true;

  }
 

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }


  addLoaction(){

    let geocoder = new google.maps.Geocoder;
let latlng = {lat: this.latitude, lng: this.longitude};
geocoder.geocode({'location': latlng}, (results, status) => {
  let add=results[0].address_components;
  let loc:any={
    lat:this.latitude,
    lng:this.longitude,
    country:'',
    state:'',
    town:'',
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

        if(this.status){

          this.viewCtrl.dismiss({loc:loc,
                                  status:true});

        }
});


  }

}
