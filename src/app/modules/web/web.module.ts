import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WebRoutes } from './web.routing';

import { ThemeModule } from '../theme/theme.module';
import { CardManagementComponent } from './components/card-management/card-management.component';
import { WebComponent } from './web.component';

@NgModule({
  imports: [CommonModule, WebRoutes, SharedModule, ThemeModule],
  declarations: [CardManagementComponent, WebComponent],
  providers: [],
})
export class WebModule {}
