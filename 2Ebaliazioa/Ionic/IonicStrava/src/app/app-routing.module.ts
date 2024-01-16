import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'kluba-gehitu',
    loadChildren: () => import('./kluba-gehitu/kluba-gehitu.module').then( m => m.KlubaGehituPageModule)
  },
  {
    path: 'jarduera-gehitu',
    loadChildren: () => import('./jarduera-gehitu/jarduera-gehitu.module').then( m => m.JardueraGehituPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
