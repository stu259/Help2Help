import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { AdService } from '../../providers/ad-service';
import { UserData } from '../../providers/user-data';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
    providers: [AdService]
})
export class ProfilePage {
    userDetails: any;
    userId: any;

    nameText: string = '';
    surnameText: string = '';
    ratingText: string = '';
    bioText: string = '';

    constructor(public navCtrl: NavController, public userData: UserData, public adsService: AdService, public alertCtrl: AlertController) {
        this.loadUserDetails();
    }

    loadUserDetails() {
        var value: any;
        this.userData.getUsername().then((data) => {
            value = data;
            this.userId = value;
            console.log("My profile id:" + this.userId);
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

    updateUserDetails() {
        this.adsService.modifyUserPofile(this.nameText, this.surnameText, this.bioText, this.userId)
            .then(() => {
                this.showAlert("Contents updated", "Profile updated successfully!");
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
}
