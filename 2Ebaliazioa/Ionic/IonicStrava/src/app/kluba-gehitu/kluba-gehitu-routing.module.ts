import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KlubaGehituPage } from './kluba-gehitu.page';

const routes: Routes = [
  {
    path: '',
    component: KlubaGehituPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KlubaGehituPageRoutingModule {}
