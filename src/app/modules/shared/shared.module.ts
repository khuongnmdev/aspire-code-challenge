import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../theme/theme.module';
import { CardCreationDialogComponent } from './components/card-creation-dialog/card-creation-dialog.component';
import { CardComponent } from './components/card/card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { CardMaskPipe } from './pipes/card-mask.pipe';

const SHARE_COMPONENTS = [
  CardComponent,
  NavigationComponent,
  TransactionListComponent,
  CardCreationDialogComponent,
  CardMaskPipe,
];
@NgModule({
  imports: [CommonModule, FormsModule, ThemeModule],
  declarations: [...SHARE_COMPONENTS],
  exports: [...SHARE_COMPONENTS],
})
export class SharedModule {}
