import { Component } from '@angular/core';
import { NavParams, NavController, ViewController, AlertController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AdService } from '../../providers/ad-service';
import { UserData } from '../providers/user-data';

import { ViewOtherProfilePage } from '../view-other-profile/view-other-profile';

import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';
import { SMS } from '@ionic-native/sms';


@Component({
    selector: 'page-view-ad',
    templateUrl: 'view-ad.html',
    providers: [AdService]
})
export class ViewAdPage {
    map: GoogleMap;

    id: string = this.navParams.get("id");
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

    viewProfile() {
        this.navCtrl.push(ViewOtherProfilePage, {"id": this.id});
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
                }
            });

            this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
                this.map.addMarker({
                    'position': location,
                    'title': "You"
                });

                this.map.moveCamera({
                    'target': location,
                    'tilt': 30,
                    'zoom': 15,
                    'bearing': 50
                });
            });
        });
    }
}
