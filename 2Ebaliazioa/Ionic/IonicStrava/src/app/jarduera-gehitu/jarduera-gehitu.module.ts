import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JardueraGehituPageRoutingModule } from './jarduera-gehitu-routing.module';

import { JardueraGehituPage } from './jarduera-gehitu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JardueraGehituPageRoutingModule
  ],
  declarations: [JardueraGehituPage]
})
export class JardueraGehituPageModule {}
