import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardManagementComponent } from './card-management.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { CardMaskPipe } from '../../../shared/pipes/card-mask.pipe';
import { ThemeModule } from '../../../theme/theme.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SharedModule } from '../../../shared/shared.module';

describe('CardManagementComponent', () => {
  let component: CardManagementComponent;
  let fixture: ComponentFixture<CardManagementComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CardManagementComponent, CardComponent, CardMaskPipe],
      imports: [SharedModule, ThemeModule, BrowserAnimationsModule],
      providers: [DialogService, DynamicDialogRef],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
