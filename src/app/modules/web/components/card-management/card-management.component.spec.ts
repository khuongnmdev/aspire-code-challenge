import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardManagementComponent } from './card-management.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { TabViewModule } from 'primeng/tabview';
import { CardMaskPipe } from '../../../shared/pipes/card-mask.pipe';

describe('CardManagementComponent', () => {
  let component: CardManagementComponent;
  let fixture: ComponentFixture<CardManagementComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ CardManagementComponent, CardComponent,CardMaskPipe ],
      imports: [
        TabViewModule
     ]
    })
    .compileComponents();
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
