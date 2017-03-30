import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { AdService } from '../../providers/ad-service';
import { UserData } from '../../providers/user-data';

@Component({
    selector: 'page-filter',
    templateUrl: 'filter.html',
    providers: [AdService]
})
export class FilterPage {   
    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public userData: UserData, public adsService: AdService) {
        
    }

    resetFilters() {
        // reset all
    }

    applyFilters() {
        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}