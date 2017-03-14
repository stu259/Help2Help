import { NgModule, ErrorHandler } from '@angular/core';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

const cloudSettings: CloudSettings = {
    'core': {
        'app_id': '013473e5'
    }
};

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        CloudModule.forRoot(cloudSettings)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
