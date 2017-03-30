import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController, PopoverController, NavParams } from 'ionic-angular';

import { ViewAdPage } from '../view-ad/view-ad';
import { FilterPage } from '../filter/filter';
import { AdService } from '../../providers/ad-service';

@Component({
    template: `
      <p>pop works</p>
    `
})

export class PopoverPage {
    constructor(private navParams: NavParams) {

    }
}
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [AdService]
})
export class HomePage {
    queryText = '';
    ads: any;

    constructor(public navCtrl: NavController, public adsService: AdService, public popoverCtrl: PopoverController, public modalCtrl: ModalController) {
        this.loadAds();
    }

    ionViewDidLoad() {
        this.updateSchedule();
    }

    presentFiler() {
        let modal = this.modalCtrl.create(FilterPage);
        modal.present();

        modal.onWillDismiss(((data: any[]) => {
            // update homepage
        }));
    }

    pop(ev) {
        let popover = this.popoverCtrl.create(PopoverPage, {});

        popover.present({
            ev: ev
        });
    }
    loadAds() {
        this.adsService.load()
            .then(data => {
                this.ads = data;
            });
    }

    showAdDetails(ad) {
        this.navCtrl.push(ViewAdPage, ad);
    }

    updateSchedule() {
        // update on search text modification
    }
}
