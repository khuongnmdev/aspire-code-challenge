import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ThemeModule } from '../../../theme/theme.module';
import { SharedModule } from '../../shared.module';
import { CardCreationDialogComponent } from './card-creation-dialog.component';

describe('CardCreationDialogComponent', () => {
  let component: CardCreationDialogComponent;
  let fixture: ComponentFixture<CardCreationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardCreationDialogComponent],
      imports: [SharedModule, ThemeModule],
      providers: [DialogService, DynamicDialogRef],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
