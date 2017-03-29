import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdService } from '../../providers/ad-service';
import { UserData } from '../providers/user-data';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
    providers: [AdService]
})
export class ProfilePage {

    userDetails: any;

    constructor(public navCtrl: NavController, public adsService: AdService) {
        this.loadUserDetails();
    }

    loadUserDetails() {
        this.adsService.load()
            .then(data => {
                this.userDetails = data;
            });
    }
}