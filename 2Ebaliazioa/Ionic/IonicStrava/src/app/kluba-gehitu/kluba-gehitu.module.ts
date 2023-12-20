import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KlubaGehituPageRoutingModule } from './kluba-gehitu-routing.module';

import { KlubaGehituPage } from './kluba-gehitu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KlubaGehituPageRoutingModule
  ],
  declarations: [KlubaGehituPage]
})
export class KlubaGehituPageModule {}
