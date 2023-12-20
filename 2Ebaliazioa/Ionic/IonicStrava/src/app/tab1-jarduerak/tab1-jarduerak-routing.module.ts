import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1JarduerakPage } from './tab1-jarduerak.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1JarduerakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1JarduerakPageRoutingModule {}
