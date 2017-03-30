import { Component } from '@angular/core';
import { ViewController, AlertController, NavParams} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AdService } from '../../providers/ad-service';
import { UserData } from '../providers/user-data';

@Component({
    selector: 'page-update-ad',
    templateUrl: 'update-ad.html',
    providers: [AdService]
})
export class UpdateAdPage {
    adDetails: any;
    ad: any;
    titleText: string = '';
    descriptionText: string = '';
    location: string = '';
    dateText: Date ; // set default value to be today
    result: string = '';

    constructor(public viewCtrl: ViewController, private geoLocation: Geolocation, public adsService: AdService, public alertCtrl: AlertController,public navParamData:NavParams,) {
        this.ad = this.navParamData.data;
        this.loadAd(this.ad.id);
    }

    autoFillLocation() {
        this.geoLocation.getCurrentPosition().then((pos) => {
            // get full address from google maps API
            this.adsService.getFullAddress(pos.coords.latitude, pos.coords.longitude).then(data => {
                this.location = data.formatted_address;
            });
        }).catch((error) => { this.location = 'Could not get geolocation'; });
    }
    loadAd(adId) {
          this.adsService.loadSpecificAd(adId)
                .then((data) => {
                    this.adDetails = data;
                    this.titleText = this.adDetails.title;
                    this.descriptionText = this.adDetails.description;
                    this.location = this.adDetails.location;
                    this.dateText = this.adDetails.date;    
                });
    }

    updateAd() {
        this.adsService.modifyExistingAd(this.titleText, this.descriptionText, this.location, this.dateText,this.ad.id).then(data => {
            if (data == "Success") {
                // success alert
                this.showAlert(data, "Ad udpated.");
                this.dismiss();
                this.close();
            }
            else {
                // error alert
                this.showAlert("Error", data);
            }
        });
        
    }
    dismiss() {
        this.viewCtrl.dismiss();
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
