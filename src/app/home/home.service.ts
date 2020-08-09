import { firstViName, lastMaleViName, lastFemalViName } from './../@constant/vietnameseName';
import { DataSubmit } from './home.page';
import { cities, segments } from './../@constant/appData';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
declare var Chance: any;

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  chance: any;

  constructor(private httpclient: HttpClient) {
    this.chance = new Chance();
  }

  getRadomEmail() {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let email = '';
    for (let ii = 0; ii < 15; ii++) {
      email += chars[Math.floor(Math.random() * chars.length)];
    }
    return email + '@gmail.com';
  }

  getVoucher(info: DataSubmit, csrfToken: string) {
    let params = new HttpParams();
    Object.keys(info).forEach(x => {
      params = params.append(x, info[x]);
    });
    const headers = new HttpHeaders({
      'X-CSRF-TOKEN': csrfToken,
      'X-Requested-With': 'XMLHttpRequest'
    });
    headers.set('Referer', 'https://trung1ty.gogi.com.vn/san-thuong');
    return this.httpclient.post('/getVoucher', params, { headers });
  }

  getCookies() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    return this.httpclient.get('/getCookies', { headers });
  }

  private getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  generateName() {
    const tp = this.getRandomInt(2);
    const firstName = firstViName[this.getRandomInt(firstViName.length)];
    let lastName = '';
    if (tp) {
      lastName = lastMaleViName[this.getRandomInt(lastMaleViName.length)];
    } else {
      lastName = lastFemalViName[this.getRandomInt(lastFemalViName.length)];
    }
    const randomName = firstName + ' ' + lastName;
    return randomName;
  }

  generatePhone() {
    return this.chance.phone({ mobile: true });
  }

  generateCity() {
    return cities[this.getRandomInt(cities.length)];
  }
}
