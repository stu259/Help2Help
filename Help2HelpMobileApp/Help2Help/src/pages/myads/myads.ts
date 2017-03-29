import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { InsertAdPage } from '../insert-ad/insert-ad';
import { AdService } from '../../providers/ad-service';
import { UserData } from '../../providers/user-data';

@Component({
    selector: 'page-myads',
    templateUrl: 'myads.html',
    providers: [AdService]
})
export class MyAdsPage {

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public adsService: AdService) {

    }

    showInsertAd() {
      let modal = this.modalCtrl.create(InsertAdPage);
      modal.present();
    }

}
