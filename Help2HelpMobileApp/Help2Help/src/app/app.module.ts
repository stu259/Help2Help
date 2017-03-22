﻿import { NgModule, ErrorHandler } from '@angular/core';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { MyAdsPage } from '../pages/myads/myads';
import { InsertAdPage } from '../pages/insert-ad/insert-ad';

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
        InsertAdPage
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
        InsertAdPage
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
