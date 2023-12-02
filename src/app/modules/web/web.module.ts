import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutes } from './web.routing';
import { SharedModule } from '../shared/shared.module';

import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';

import { CardManagementComponent } from './components/card-management/card-management.component';

const THEME_MODULES = [
  CardModule,
  CarouselModule,
  ButtonModule,
  TabViewModule
]
@NgModule({
  imports: [
    CommonModule,
    WebRoutes,
    SharedModule,
    ...THEME_MODULES,
  ],
  declarations: [CardManagementComponent]
})
export class WebModule { }
