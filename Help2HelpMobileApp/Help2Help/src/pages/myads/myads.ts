import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-myads',
    templateUrl: 'myads.html'
})
export class MyAdsPage {
    items: Array<{ title: string }>;

    constructor(public navCtrl: NavController) {
        this.items = [
            { title: 'item1' },
            { title: 'item2' },
            { title: 'item3' },
            { title: 'item4' },
            { title: 'item5' },
            { title: 'item6' }
        ];
    }

    removeItem(item) {
        var i;
        for (i = 0; i < this.items.length; i++) {
            if (this.items[i] == item) {
                this.items.splice(i, 1);
            }
        }
    }
}