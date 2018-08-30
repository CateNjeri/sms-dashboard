import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendaceReportComponent } from './attendace-report.component';

describe('AttendaceReportComponent', () => {
  let component: AttendaceReportComponent;
  let fixture: ComponentFixture<AttendaceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendaceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendaceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
