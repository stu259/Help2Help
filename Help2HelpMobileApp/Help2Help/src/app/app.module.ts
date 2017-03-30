import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage, PopoverPage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { MyAdsPage } from '../pages/myads/myads';
import { InsertAdPage } from '../pages/insert-ad/insert-ad';
import { UpdateAdPage } from '../pages/update-ad/update-ad';
import { ViewAdPage } from '../pages/view-ad/view-ad';
import { UserData } from '../providers/user-data';
import { SMS } from '@ionic-native/sms';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage,
        ProfilePage,
        MyAdsPage,
        InsertAdPage,
        PopoverPage,
        ViewAdPage,
        UpdateAdPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot()
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
        ViewAdPage,
        UpdateAdPage
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, Geolocation, UserData, Storage, SMS]
})
export class AppModule { }
