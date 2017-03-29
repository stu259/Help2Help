import { Component, ViewChild } from '@angular/core';
import { Events, Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { MyAdsPage } from '../pages/myads/myads';

import { UserData } from '../providers/user-data'

declare var WindowsAzure: any;

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage;
    titleText: string;

    pages: Array<{ title: string, component: any }>;

    constructor(public events: Events, public userData: UserData, platform: Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();

            this.userData.setUp();
            this.nav.setRoot(HomePage);

            this.userData.hasLoggedIn().then((hasLoggedIn) => {
                if (hasLoggedIn === true) {
                    this.rootPage = HomePage;
                    this.updateTitle();
                }
                else {
                    this.rootPage = LoginPage;
                }
            });

            this.listenToLoginEvents();
        });

        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'My Profile', component: ProfilePage },
            { title: 'My Ads', component: MyAdsPage }
        ];
    }

    openPage(page) {
        this.nav.setRoot(page.component);
        this.updateTitle();
    }

    logout() {
        this.nav.setRoot(LoginPage);
    }

    listenToLoginEvents() {
        this.events.subscribe('user:login', () => {
            this.nav.setRoot(HomePage);
            this.updateTitle();
        });

        this.events.subscribe('user:signup', () => {
            this.nav.setRoot(HomePage);
            this.rootPage = LoginPage;
        });

        this.events.subscribe('user:logout', () => {
            this.nav.setRoot(HomePage);
            this.rootPage = LoginPage;
        });
    }

    updateTitle() {
        console.log("now");
        this.titleText = "Hello!";
        /*console.log("username: " + this.userData.getUsername());
        this.userData.getUsername().then((username) => {
            console.log("second: " + username);
            //this.titleText = username;
        });*/
    }
}
