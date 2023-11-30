import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardManagementComponent } from './components/card-management/card-management.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'card-management'
  },
  {
    path: 'card-management',
    component: CardManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebRoutes { }
