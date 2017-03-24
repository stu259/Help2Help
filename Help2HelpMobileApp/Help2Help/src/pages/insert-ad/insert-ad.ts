import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'page-insert-ad',
    templateUrl: 'insert-ad.html'
})
export class InsertAdPage {

    location: string = '';
    constructor(public viewCtrl: ViewController) {

    }

    autoFillLocation() {
        this.location = 'apple';
    }

    close() {
      this.viewCtrl.dismiss();
    }
}
