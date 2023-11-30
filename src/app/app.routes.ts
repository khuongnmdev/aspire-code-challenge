import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/web/web.module').then(m => m.WebModule),
  },
];
