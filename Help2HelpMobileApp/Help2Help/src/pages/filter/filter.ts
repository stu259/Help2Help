import { Component, Injectable, Pipe, PipeTransform } from '@angular/core';
import { NavController, ViewController, NavParams} from 'ionic-angular';
import { AdService } from '../../providers/ad-service';
import { UserData } from '../../providers/user-data';

@Component({
    selector: 'page-filter',
    templateUrl: 'filter.html',
    providers: [AdService]
})

export class FilterPage {
    ascending = true;
    descending = false;
    sortBy = 'title';
    ads = [];

    //flag = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public userData: UserData, public adsService: AdService) {
        this.ads = this.navParams.data;
    }

    applyFilters() {
        /*switch (this.sortBy) {
            case 'title':
                this.ads = this.ads.filter('title');
                this.ads = this.ads.sort();
               
                if (this.ascending) {
                    this.ads = this.ads.sort(function (a, b) { return a - b });
                    this.viewCtrl.dismiss(this.ads);
                } else if (this.descending) {
                    this.ads.reverse(true);
                    this.viewCtrl.dismiss(this.ads);
                }
                break;
            case 'date':
                if (this.ascending) {

                } else if (this.descending) {

                }
                break;
            case 'location':
                if (this.ascending) {

                } else if (this.descending) {

                }
                break;
        }*/
        this.viewCtrl.dismiss(this.ads);
    }

    dismiss() {
        this.viewCtrl.dismiss(this.ads);
    }

    toggleAscending() {


        if (this.ascending === true) {
            this.descending = false;
        } else {
            this.descending = true;
        }
    }

    toggleDescending() {
        if (this.descending === true) {
            this.ascending = false;
        } else {
            this.ascending = true;
        }
    }



}