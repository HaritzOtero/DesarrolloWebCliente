import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1JarduerakPageRoutingModule } from './tab1-jarduerak-routing.module';

import { Tab1JarduerakPage } from './tab1-jarduerak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1JarduerakPageRoutingModule
  ],
  declarations: [Tab1JarduerakPage]
})
export class Tab1JarduerakPageModule {}
