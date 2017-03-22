import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '@ionic/cloud-angular';
import { AdService } from '../../providers/ad-service/ad-service';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
    providers: [AdService]
})
export class ProfilePage {

    userDetails: any;

    constructor(public navCtrl: NavController, public user: User, public adsService: AdService) {
        this.loadUserDetails();
    }

    loadUserDetails() {
        this.adsService.load()
            .then(data => {
                this.userDetails = data;
            });
    }
}