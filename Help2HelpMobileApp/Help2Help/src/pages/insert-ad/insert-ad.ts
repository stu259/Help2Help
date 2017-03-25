import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
    selector: 'page-insert-ad',
    templateUrl: 'insert-ad.html'
})
export class InsertAdPage {

    location: string = '';
    constructor(public viewCtrl: ViewController, private geoLocation: Geolocation) {

    }

    autoFillLocation() {
        this.geoLocation.getCurrentPosition().then((pos) => { this.location = 'lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude;
        }).catch((error) => {this.location = 'Could not get geolocation';});
    }

    close() {
      this.viewCtrl.dismiss();
    }
}
