import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardManagementComponent } from './components/card-management/card-management.component';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      {
        path: 'card-management',
        component: CardManagementComponent,
      },
      {
        path: '**',
        redirectTo: 'card-management',
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebRoutes { }
