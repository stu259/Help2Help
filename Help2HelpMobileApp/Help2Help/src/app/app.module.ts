﻿import { NgModule, ErrorHandler } from '@angular/core';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage, PopoverPage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { MyAdsPage } from '../pages/myads/myads';
import { InsertAdPage } from '../pages/insert-ad/insert-ad';
import { ViewAdPage } from '../pages/view-ad/view-ad';

const cloudSettings: CloudSettings = {
    'core': {
        'app_id': '013473e5'
    }
};

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage,
        ProfilePage,
        MyAdsPage,
        InsertAdPage,
        PopoverPage,
        ViewAdPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        CloudModule.forRoot(cloudSettings)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage,
        ProfilePage,
        MyAdsPage,
        InsertAdPage,
        PopoverPage,
        ViewAdPage
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler}, Geolocation]
})
export class AppModule { }
