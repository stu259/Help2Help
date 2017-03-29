import { Injectable } from '@angular/core';

declare var require: Function;
const localforage: LocalForage = require('localforage');

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

declare var WindowsAzure: any;

@Injectable()
export class UserData {
    client: any;
    
    HAS_LOGGED_IN = 'hasLoggedIn';

    constructor(public events: Events) {
        localforage.config({
            name: 'Help2Help'
        });
    }

    setUp() {
        this.client = new WindowsAzure.MobileServiceClient('http://help2helpservice.azurewebsites.net/');
        localforage.setItem(this.HAS_LOGGED_IN, false);
        // only for testing on browser
        //localforage.setItem('username', "Stuart");
    }

    login(provider: string) {
        this.setUsername("Stuart"); // ID or name
        this.events.publish('user:login');
        //this.client.login(provider).done(this.loginResponse.bind(this));
        //localforage.setItem(this.HAS_LOGGED_IN, true);
    }

    loginResponse(response) {
        this.setUsername(response.userId); // ID or name
        this.events.publish('user:login');
    }

    signup(name: string) {
        localforage.setItem(this.HAS_LOGGED_IN, true);
        this.setUsername(name);
        this.events.publish('user:signup');
    }

    logout() {
        localforage.setItem(this.HAS_LOGGED_IN, false);
        localforage.removeItem('username');
        this.events.publish('user:logout');
    }

    setUsername(username: string) {
        localforage.setItem('username', username);
    }

    getUsername() {
        return localforage.getItem('username').then((value) => {
            return value;
        });
    }
    
    hasLoggedIn() {
        return localforage.getItem(this.HAS_LOGGED_IN).then((value) => {
            return value === true;
        });
    }
}