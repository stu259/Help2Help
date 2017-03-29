import { Component } from '@angular/core';
import { NavParams, NavController, ViewController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AdService } from '../../providers/ad-service/ad-service';
import { SMS } from '@ionic-native/sms';

@Component({
    selector: 'page-view-ad',
    templateUrl: 'view-ad.html',
    providers: [AdService]
})
export class ViewAdPage {
    titleText: string = this.navParams.get('title');
    descriptionText: string = this.navParams.get('description');
    location: string = this.navParams.get('location');
    dateText: string = this.navParams.get('date'); // set default value to be today

    constructor(public navCtrl: NavController, private smsVar:SMS,public navParams: NavParams,public viewCtrl: ViewController, private geoLocation: Geolocation, public adsService: AdService, public alertCtrl: AlertController) {
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
    
}
