import { Component } from '@angular/core';

@Component({
    selector: 'page-insert-ad',
    templateUrl: 'insert-ad.html'
})
export class InsertAdPage {

    location: string = '';
    constructor() {

    }

    autoFillLocation() {

        this.location = 'apple';
    }
}
