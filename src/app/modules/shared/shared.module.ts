import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardMaskPipe } from './pipes/card-mask.pipe';

const SHARE_COMPONENTS = [
  CardComponent,
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
