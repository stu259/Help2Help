import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { MenuController } from'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    constructor(public navCtrl: NavController, public user: User, public auth: Auth, public menuCtrl: MenuController) {

    }
}