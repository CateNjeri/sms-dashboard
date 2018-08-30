import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationResultsComponent } from './examination-results.component';

describe('ExaminationResultsComponent', () => {
  let component: ExaminationResultsComponent;
  let fixture: ComponentFixture<ExaminationResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
