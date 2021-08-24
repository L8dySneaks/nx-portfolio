import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPillComponent } from './angular-pill.component';

describe('AngularPillComponent', () => {
  let component: AngularPillComponent;
  let fixture: ComponentFixture<AngularPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
