import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardMaskPipe } from './pipes/card-mask.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';

const SHARE_COMPONENTS = [
  CardComponent,
  NavigationComponent,
  CardMaskPipe
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...SHARE_COMPONENTS],
  exports: [...SHARE_COMPONENTS]
})
export class SharedModule { }
