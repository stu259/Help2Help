import { Component } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AdService } from '../../providers/ad-service';
import { UserData } from '../providers/user-data';

@Component({
    selector: 'page-insert-ad',
    templateUrl: 'insert-ad.html',
    providers: [AdService]
})
export class InsertAdPage {
    titleText: string = '';
    descriptionText: string = '';
    location: string = '';
    dateText: string = ''; // set default value to be today

    result: string = '';

    constructor(public viewCtrl: ViewController, private geoLocation: Geolocation, public adsService: AdService, public alertCtrl: AlertController) {

    }

    autoFillLocation() {
        this.geoLocation.getCurrentPosition().then((pos) => {
            // get full address from google maps API
            this.adsService.getFullAddress(pos.coords.latitude, pos.coords.longitude).then(data => {
                this.location = data.formatted_address;
            });
        }).catch((error) => { this.location = 'Could not get geolocation'; });
    }

    createAd() {
        this.adsService.createNewAd(this.titleText, this.descriptionText, this.location, this.dateText).then(data => {
            if (data == "Success") {
                // success alert
                this.showAlert(data, "Ad posted.");
                this.close();
            }
            else {
                // error alert
                this.showAlert("Error", data);
            }
        });
    }

    showAlert(data, message) {
        let alert = this.alertCtrl.create({
            title: data,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }

    close() {
        this.viewCtrl.dismiss();
    }
}
