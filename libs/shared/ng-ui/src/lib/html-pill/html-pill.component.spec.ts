import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPillComponent } from './html-pill.component';

describe('HtmlPillComponent', () => {
  let component: HtmlPillComponent;
  let fixture: ComponentFixture<HtmlPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlPillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
