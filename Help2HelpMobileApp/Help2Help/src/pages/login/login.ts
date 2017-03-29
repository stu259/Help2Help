import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { HomePage } from '../home/home';
import { AdService } from '../../providers/ad-service';
import { UserData } from '../../providers/user-data';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [AdService]
})
export class LoginPage {
    login: { username?: string, password?: string } = {};
    submitted = false;

    constructor(public navCtrl: NavController,
        public alertCtrl: AlertController, public loadingCtrl: LoadingController,
        public adsService: AdService, public userData: UserData) { }

    doLogin(provider: string) {
        this.userData.login(provider);
    }
}