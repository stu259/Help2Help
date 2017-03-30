import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { SMS } from '@ionic-native/sms';

import { MyApp } from './app.component';
import { HomePage, PopoverPage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { MyAdsPage } from '../pages/myads/myads';
import { InsertAdPage } from '../pages/insert-ad/insert-ad';
import { ViewAdPage } from '../pages/view-ad/view-ad';
import { FilterPage } from '../pages/filter/filter';
import { UserData } from '../providers/user-data';

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
        FilterPage
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
        FilterPage
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, Geolocation, UserData, Storage, SMS]
})
export class AppModule { }
