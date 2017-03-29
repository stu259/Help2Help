import { Component } from '@angular/core';
import { NavParams, NavController, ViewController, AlertController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AdService } from '../../providers/ad-service';
import { UserData } from '../providers/user-data';

import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';
import { SMS } from '@ionic-native/sms';


@Component({
    selector: 'page-view-ad',
    templateUrl: 'view-ad.html',
    providers: [AdService]
})
export class ViewAdPage {
    map: GoogleMap;

    titleText: string = this.navParams.get('title');
    descriptionText: string = this.navParams.get('description');
    location: string = this.navParams.get('location');
    dateText: string = this.navParams.get('date'); // set default value to be today

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController, private geoLocation: Geolocation,
        public adsService: AdService, public alertCtrl: AlertController,
        public platform: Platform, private smsVar: SMS) {

        platform.ready().then(() => {
            this.loadMap();
        });
    }

    createSMS() {
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT'
            }
        }
        this.smsVar.send("07467718448", "This is my n", options)
            .then(() => {
                alert("success");
            }, () => {
                alert("failure");
            });

    }

    loadMap() {
        let newLocation: any;
        this.adsService.getLatLngFromAddress(this.location).then(data => {
            this.titleText = data.geometry.location.lat;
            newLocation = data.geometry.location;
            let location = new GoogleMapsLatLng(newLocation.lat, newLocation.lng);

            this.map = new GoogleMap('map', {
                'backgroundColor': 'white',
                'control': {
                    'compass': true,
                    'myLocationButton': true,
                    'indoorPicker': true,
                    'zoom': true
                },
                'gestures': {
                    'scroll': true,
                    'tilt': true,
                    'rotate': true,
                    'zoom': true
                },
                'camera': {
                    'latLng': location,
                    'tilt': 30,
                    'zoom': 15,
                    'bearing': 50
                }
            });



            this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {

            });
        });

        
    }

   
}

