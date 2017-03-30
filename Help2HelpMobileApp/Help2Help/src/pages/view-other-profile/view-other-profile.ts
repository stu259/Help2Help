import { Component } from '@angular/core';
import { NavParams, NavController, ViewController, AlertController, Platform } from 'ionic-angular';
import { AdService } from '../../providers/ad-service';
import { UserData } from '../../providers/user-data';

import { SMS } from '@ionic-native/sms';


@Component({
    selector: 'page-view-other-profile',
    templateUrl: 'view-other-profile.html',
    providers: [AdService, UserData]
})
export class ViewOtherProfilePage {

    userDetails: any;
    userId: string = this.navParams.get("id");
    nameText: string = "";
    surnameText: string = "";
    ratingText: string = "";
    bioText: string = "";


    constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController,
        public adsService: AdService, public alertCtrl: AlertController,
        public platform: Platform, private smsVar: SMS, public userData: UserData) {

        this.loadUserDetails();
    }

    loadUserDetails() {
      var value: any;
      this.userData.getUsername().then((data) => {
          value = data;
          this.userId = value;
          console.log(this.userId + "Hesfsdf");
          this.adsService.loadSpecificUser(this.userId)
              .then((data) => {
                  this.userDetails = data;
                  this.nameText = this.userDetails.name;
                  this.surnameText = this.userDetails.surname;
                  this.ratingText = this.userDetails.rating;
                  this.bioText = this.userDetails.biography;
                  console.log(this.userDetails + "adads");
                  console.log(this.userDetails.name + "!!");
              });
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

    createSMS() {
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT'
            }
        }
        this.smsVar.send("07467718448", "Greetings, I am interested in this activity. I look forward to meeting you!", options)
            .then(() => {
                alert("success");
            }, () => {
                alert("failure");
            });

    }
}
