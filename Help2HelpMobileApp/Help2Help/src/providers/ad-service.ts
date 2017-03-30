import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class AdService {
    data1: any;
    constructor(public http: Http) {
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
                    this.data1 = data;
                    resolve(this.data1);
                });
        });
    }

    loadSpecificUser(userId) {
        if (this.data1) {
            return Promise.resolve(this.data1);
        }

        // don't have the data yet
        return new Promise(resolve => {
            let headers = new Headers({
                'ZUMO-API-VERSION': '2.0.0'
            });
            let options = new RequestOptions({
                headers: headers
            });
            this.http.get('http://help2helpservice.azurewebsites.net/tables/users/' + userId, options)
                .map(res => res.json())
                .subscribe(data => {
                    this.data1 = data;
                    resolve(this.data1);
                });
        });
    }

    getFullAddress(lat, lng) {
        var API_KEY = "AIzaSyBHwQ12lqjQybAUN7WPeBBHIK1E0wpMefM";
        if (this.data1) {
            return Promise.resolve(this.data1);
        }

        // don't have the data yet
        return new Promise(resolve => {
            this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat +
                ',' + lng + '&result_type=street_address&key=' + API_KEY)
                .map(res => res.json())
                .subscribe(data => {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    this.data1 = data;
                    resolve(this.data1.results[0]);
                });
        });
    }

    getLatLngFromAddress(location) {
        var API_KEY = "AIzaSyBHwQ12lqjQybAUN7WPeBBHIK1E0wpMefM";
        if (this.data1) {
            return Promise.resolve(this.data1);
        }

        // don't have the data yet
        return new Promise(resolve => {
            this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + location +
                '&key' + API_KEY)
                .map(res => res.json())
                .subscribe(data => {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    this.data1 = data;
                    resolve(this.data1.results[0]);
                });
        });
    }

    createNewAd(title, description, location, date) {
        return new Promise(resolve => {
            let headers = new Headers({
                'Content-Type': 'application/json',
                'ZUMO-API-VERSION': '2.0.0'
            });
            let options = new RequestOptions({
                headers: headers
            });
            let body = JSON.stringify({
                "Title": title,
                "Description": description,
                "Location": location,
                "Date": date,
                "UserId": 3 // Query to get current user Id
            });
            this.http.post('http://help2helpservice.azurewebsites.net/tables/advertisements', body, options)
                .map(res => res.json())
                .subscribe(data => {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    this.data1 = "Success";
                    resolve(this.data1);
                }, (err) => {
                    this.data1 = "Fail: " + err;
                    resolve(this.data1)
                });
        });
    }

    modifyUserPofile(firstname, surname, bio, userId) {
        return new Promise(resolve => {
            let headers = new Headers({
                'Content-Type': 'application/json',
                'ZUMO-API-VERSION': '2.0.0'
            });
            let options = new RequestOptions({
                headers: headers
            });
            let body = JSON.stringify({
                "name": firstname,
                "surname": surname,
                "biography": bio,
            });
            this.http.patch('http://help2helpservice.azurewebsites.net/tables/users/' + userId, body, options)
                .map(res => res.json())
                .subscribe(data => {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    this.data1 = "Success";
                    resolve(this.data1);
                }, (err) => {
                    this.data1 = "Fail: " + err;
                    resolve(this.data1)
                });
        });
    }

    searchAds(queryText) {
        let found = false;
        let newData = [];
        return this.load().then((data: any) => {
            console.log("is searchAds being called?");
            if (queryText === '') {
                console.log("if condition is met");
                return Promise.resolve(data);
            }
            queryText = queryText.toLowerCase().replace(/,|\.|-/, ' ');
            let queryWords = queryText.split(' ').filter(w => !!w.trim().length);
            data.forEach((filteredAds: any) => {
                found = false;
                queryWords.forEach((queryWord: string) => {
                    console.log(queryWord + " this is the query word");
                    if (filteredAds.title.toLowerCase().includes(queryWord)) {
                        found = true;
                    }
                    else if (filteredAds.description.toLowerCase().includes(queryWord)) {
                        found = true;
                    }
                    else if (filteredAds.location.toLowerCase().includes(queryWord)) {
                        found = true;
                    }
                });
                if (found) {
                    newData.push(filteredAds);
                }
            });
            newData.forEach((testData: any) => {
                console.log(testData.title);
            });
            return Promise.resolve(newData);
        });
    }
}