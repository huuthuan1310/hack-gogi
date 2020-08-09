import { VoucherModalComponent } from './components/voucher-modal/voucher-modal.component';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public modalController: ModalController) { }

  async openVoucherModal(data) {
    const modal = await this.modalController.create({
      component: VoucherModalComponent,
      cssClass: 'voucher-modal--main',
      componentProps: {
        code: data.code,
        rule: data.rule
      }
    });
    return await modal.present();
  }
}
