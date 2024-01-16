import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JardueraGehituPage } from './jarduera-gehitu.page';

const routes: Routes = [
  {
    path: '',
    component: JardueraGehituPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JardueraGehituPageRoutingModule {}
