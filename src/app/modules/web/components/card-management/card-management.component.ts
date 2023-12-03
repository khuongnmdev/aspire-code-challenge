import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
} from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, ReplaySubject, Subject, delay, of, tap } from 'rxjs';
import { CardType } from '../../../core/models/card';
import { CardService } from '../../../core/services/card.service';
import { CardCreationDialogComponent } from '../../../shared/components/card-creation-dialog/card-creation-dialog.component';
import { CarouselPageEvent } from 'primeng/carousel';

@Component({
  selector: 'app-card-management',
  templateUrl: './card-management.component.html',
  styleUrls: ['./card-management.component.scss'],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardManagementComponent implements OnInit {
  public cardList$: Observable<CardType[] | null>;

  private dialogRef: DynamicDialogRef | undefined;

  private currentIndex = -1;

  public constructor(
    public readonly dialogService: DialogService,
    public readonly cardService: CardService
  ) {
    this.cardList$ = of([]);
  }

  public ngOnInit(): void {
    this.cardList$ = this.cardService.cardList$.pipe(
      tap((cardList: CardType[]) => {
        if (cardList.length > 0 && this.currentIndex < 0) {
          this.currentIndex = 0;
        }
      })
    );
  }

  protected openCardCreationDialog(): void {
    // Open the dialog component with the specified options
    this.dialogRef = this.dialogService.open(CardCreationDialogComponent, {
      header: 'Add new card',
      width: '400px',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 1000,
      closable: true,
    });

    this.dialogRef.onClose.subscribe((cardHolderName: string) => {
      if (cardHolderName) {
        this.cardService.generateCard(cardHolderName);
      }
    });
  }

  protected currentCard(event: CarouselPageEvent) {
    if (event.page === undefined) {
      return;
    }
    this.currentIndex = event.page;
    console.log(this.currentIndex);
  }

  protected removeCard(): void {
    if (this.currentIndex < 0) {
      return;
    }
    this.cardService.removeCard(this.currentIndex);
  }
}
