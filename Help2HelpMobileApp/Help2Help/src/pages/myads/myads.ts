import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { InsertAdPage } from '../insert-ad/insert-ad';

@Component({
    selector: 'page-myads',
    templateUrl: 'myads.html'
})
export class MyAdsPage {

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

    }

    showInsertAd() {
      let modal = this.modalCtrl.create(InsertAdPage);
      modal.present();
    }
}
