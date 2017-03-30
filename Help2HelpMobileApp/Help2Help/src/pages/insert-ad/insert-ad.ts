import { Component } from '@angular/core';
import { ViewController, AlertController, LoadingController } from 'ionic-angular';
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

    constructor(public viewCtrl: ViewController, private geoLocation: Geolocation,
        public adsService: AdService, public alertCtrl: AlertController,
        public loadingCtrl: LoadingController) {
    }

    autoFillLocation() {
        let loader = this.loadingCtrl.create({
            content: "Getting location..."
        });
        loader.present();

        this.geoLocation.getCurrentPosition().then((pos) => {
            // get full address from google maps API
            var newPos = pos;

            this.adsService.getFullAddress(newPos.coords.latitude, newPos.coords.longitude).then(data => {
                this.location = data.formatted_address;
                loader.dismissAll();
            });
        }).catch((error) => {
            this.location = 'Could not get geolocation';
            loader.dismissAll();
        });
    }

    createAd() {
        if ( !this.valid(this.titleText) || !this.valid(this.descriptionText) || !this.valid(this.location) || !this.valid(this.dateText)) {
          this.showAlert("Invalid submission", "Some entries were left blank");
        }
        else {
          this.adsService.createNewAd(this.titleText, this.descriptionText, this.location, this.dateText).then(data => {
              if (data == "Success") {
                  // success alert
                  this.showAlert(data, "Ad posted.");
                  this.close();
                  }
                  else {
                  // error alert
                  this.showAlert("Connection error", "Could not connect to internet");
                  }
                  });
        }
    }

    valid(text) {
        return text !== "" && text !== null;
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
