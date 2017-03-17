import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdService {
    data1: any;
    constructor(public http: Http) {
        console.log('Hello PeopleSearch Provider');
    }

    load() {
        if (this.data1) {
            return Promise.resolve(this.data1);
        }

        // don't have the data yet
        return new Promise(resolve => {
            this.http.get('http://help2helpservice.azurewebsites.net/tables/advertisements?ZUMO-API-VERSION=2.0.0')
                .map(res => res.json())
                .subscribe(data => {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    this.data1 = data;
                    resolve(this.data1);
                });
        });
    }
}