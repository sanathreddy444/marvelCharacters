import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    loadChildren: () => import('./marvel/characters/characters.module').then( m => m.CharactersPageModule)
  },
  {
    path: 'characters-description',
    loadChildren: () => import('./marvel/characters-description/characters-description.module').then( m => m.CharactersDescriptionPageModule)
  },
  {
    path: 'comics-list',
    loadChildren: () => import('./marvel/comics-list/comics-list.module').then( m => m.ComicsListPageModule)
  },
  {
    path: 'comics-description',
    loadChildren: () => import('./marvel/comics-description/comics-description.module').then( m => m.ComicsDescriptionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
