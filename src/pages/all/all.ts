import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';
 import { Component } from "@angular/core/";
 
 @Component({
   selector: 'page-all',
   templateUrl: 'all.html'
 })
 export class AllPage {
   map: GoogleMap;
   mapElement: HTMLElement;
   constructor(private googleMaps: GoogleMaps) { }
 
   ionViewDidLoad() {
    this.loadMap();
   }
 
  loadMap() {
     this.mapElement = document.getElementById('map');
     console.log(this.mapElement)
 
     let mapOptions: GoogleMapOptions = {
       camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
     };
     setTimeout(() => {
      this.map = this.googleMaps.create(this.mapElement, mapOptions);
      
          // Wait the MAP_READY before using any methods.
          this.map.one(GoogleMapsEvent.MAP_READY)
            .then(() => {
              console.log('Map is ready!');
      
              // Now you can use all methods safely.
              this.map.addMarker({
                  title: 'Ionic',
                  icon: 'blue',
                  animation: 'DROP',
                  position: {
                    lat: 43.0741904,
                    lng: -89.3809802
                  }
                })
                .then(marker => {
                  marker.on(GoogleMapsEvent.MARKER_CLICK)
                    .subscribe(() => {
                      alert('clicked');
                    });
                });
      
            });
     }, 1000);
     
   }
 }