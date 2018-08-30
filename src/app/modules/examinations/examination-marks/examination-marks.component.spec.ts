import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendaceRegisterComponent } from './attendace-register.component';

describe('AttendaceRegisterComponent', () => {
  let component: AttendaceRegisterComponent;
  let fixture: ComponentFixture<AttendaceRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendaceRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendaceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
