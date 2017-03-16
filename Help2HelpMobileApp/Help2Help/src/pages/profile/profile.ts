import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { MenuController } from'ionic-angular';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {
    constructor(public navCtrl: NavController, public user: User, public auth: Auth, public menuCtrl: MenuController) {

    }
}