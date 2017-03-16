import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { MyAdsPage } from '../pages/myads/myads';
import { Auth, User } from '@ionic/cloud-angular';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage;

    pages: Array<{ title: string, component: any }>;

    constructor(platform: Platform, public user: User, public auth: Auth) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();

            if (this.auth.isAuthenticated()) {
                this.rootPage = HomePage;
            } else {
                this.rootPage = LoginPage;
            }
        });

        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'My Profile', component: ProfilePage },
            { title: 'My Ads', component: MyAdsPage }
        ];
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }

    logout() {
        this.auth.logout();
        this.nav.setRoot(LoginPage);
    }
}
