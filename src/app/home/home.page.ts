import { SharedService } from './../@shared/shared.service';
import { cities, segments } from './../@constant/appData';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
export class DataSubmit {
  area: any;
  city: any;
  email: any;
  name: any;
  phone: any;
  reward: any;
  reward_key: any;
  utm_source = '';
  utm_campaign = '';
  utm_medium = '';
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  checkoutForm;
  dataSubmit: DataSubmit;
  citiesArr = cities;
  vouchers = segments;

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private alertController: AlertController,
    private sharedService: SharedService
  ) {
    this.dataSubmit = {
      ...new DataSubmit(), ...{
        area: ['', Validators.required],
        city: '',
        email: ['', [Validators.email, Validators.required]],
        name: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern]],
        reward: ['', Validators.required],
        reward_key: ''
      }
    };
    this.checkoutForm = this.formBuilder.group(this.dataSubmit);
  }

  ngOnInit() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'alert-custom',
      header: 'Thông báo',
      message: 'Chào mừng bạn đến với ứng dụng lấy voucher GoGi - Ăn GoGi trúng 1 tỷ!<br><br>Bạn vui lòng nhập thông tin cá nhân để có thể nhận voucher',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertCode(code: any) {
    const alert = await this.alertController.create({
      cssClass: 'alert-custom',
      header: 'Thông báo',
      message: 'Code: ' + code.code + '<br><br>Tên voucher: ' + code.reward,
      buttons: ['OK']
    });
    alert.onDidDismiss().then(() => {
      this.openVoucher(code.code);
    });

    await alert.present();
  }

  generate() {
    const city = this.homeService.generateCity();
    this.checkoutForm.patchValue({
      email: this.homeService.getRadomEmail(),
      name: this.homeService.generateName(),
      phone: this.homeService.generatePhone(),
      area: city.name,
      city: city.mien_id
    });
  }

  onSubmit(e) {
    this.checkoutForm.patchValue({
      city: this.citiesArr.filter(x => x.name === e.value.area)[0].mien_id,
      reward_key: this.vouchers.filter(x => x.value === e.value.reward)[0].text
    });
    console.log(e);
    this.homeService.getCookies().subscribe(res => {
      console.log(res);
    }, err => {
      const domparser = new DOMParser();
      const html = domparser.parseFromString(err.error.text, 'text/html');
      const csrfToken = html.querySelector('meta[name="csrf-token"]:not([content=""])').getAttribute('content');
      this.homeService.getVoucher(this.checkoutForm.value, csrfToken).subscribe((res: any) => {
        console.log(res);
        this.presentAlertCode(res);
      });
    });
  }

  openVoucher(code: string) {
    this.sharedService.openVoucherModal({
      rule: this.vouchers.filter(x => x.text === this.checkoutForm.value.reward_key)[0].rule,
      code
    });
  }

}
