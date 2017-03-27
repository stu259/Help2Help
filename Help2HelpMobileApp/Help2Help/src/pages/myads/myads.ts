﻿import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';
import { InsertAdPage } from '../insert-ad/insert-ad';
import { AdService } from '../../providers/ad-service/ad-service';

@Component({
    selector: 'page-myads',
    templateUrl: 'myads.html',
    providers: [AdService]
})
export class MyAdsPage {
    ads: any;
    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public adsService: AdService) {
        this.loadAds();
    }

    showInsertAd() {
      let modal = this.modalCtrl.create(InsertAdPage);
      modal.present();
    }
    removeAd(ad) {

    }
    loadAds() {
        this.adsService.load()
            .then(data => {
                    this.ads = data;
                
            });
    }

}
