import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPillComponent } from './project-pill.component';

describe('ProjectPillComponent', () => {
  let component: ProjectPillComponent;
  let fixture: ComponentFixture<ProjectPillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
