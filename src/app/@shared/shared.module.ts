import { IonicModule } from '@ionic/angular';
import { SharedService } from './shared.service';
import { VoucherModalComponent } from './components/voucher-modal/voucher-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const components = [
  VoucherModalComponent
];
@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ...components
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }
