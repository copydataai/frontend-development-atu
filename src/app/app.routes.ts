import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'game',
    loadComponent: () => import('./game/game.page').then((m) => m.GamePage),
  },
  {
    path: 'category',
    loadComponent: () => import('./category/category.page').then(m => m.CategoryPage),
  },
  {
    path: 'ranking',
    loadComponent: () => import('./ranking/ranking.page').then(m => m.RankingPage),
  }
];
