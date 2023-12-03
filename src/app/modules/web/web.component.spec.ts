import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../theme/theme.module';
import { WebComponent } from './web.component';

describe('WebComponent', () => {
  let component: WebComponent;
  let fixture: ComponentFixture<WebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WebComponent],
      imports: [
        RouterModule,
        SharedModule,
        ThemeModule,
        BrowserAnimationsModule,
      ],
      providers: [DialogService, DynamicDialogRef],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
