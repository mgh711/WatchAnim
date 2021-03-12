import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ancien-accueil',
    loadChildren: () => import('./acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  {
    path: 'question1',
    loadChildren: () => import('./question1/question1.module').then( m => m.Question1PageModule)
  },
  {
    path: 'question2',
    loadChildren: () => import('./question2/question2.module').then( m => m.Question2PageModule)
  },
  {
    path: 'base',
    loadChildren: () => import('./base/base.module').then( m => m.BasePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'video-detail',
    loadChildren: () => import('./video-detail/video-detail.module').then( m => m.VideoDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
