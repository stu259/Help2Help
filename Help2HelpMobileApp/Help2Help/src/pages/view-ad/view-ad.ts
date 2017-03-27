import { Component } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AdService } from '../../providers/ad-service/ad-service';

@Component({
    selector: 'page-view-ad',
    templateUrl: 'view-ad.html',
    providers: [AdService]
})
export class ViewAdPage {
    titleText: string = '';
    descriptionText: string = '';
    location: string = '';
    dateText: string = ''; // set default value to be today

    result: string = '';

    constructor(public viewCtrl: ViewController, private geoLocation: Geolocation, public adsService: AdService, public alertCtrl: AlertController) {

    }

    close() {
        this.viewCtrl.dismiss();
    }
}
