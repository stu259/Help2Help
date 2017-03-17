import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdService } from '../../providers/ad-service/ad-service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [AdService]
})
export class HomePage {
    ads: any;

    constructor(public navCtrl: NavController, public adsService: AdService) {
        this.loadAds();
    }

    loadAds() {
        this.adsService.load()
            .then(data => {
                this.ads = data;
            });
    }
}