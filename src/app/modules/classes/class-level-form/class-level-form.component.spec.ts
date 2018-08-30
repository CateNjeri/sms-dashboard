import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassLevelFormComponent } from './class-level-form.component';

describe('ClassLevelFormComponent', () => {
  let component: ClassLevelFormComponent;
  let fixture: ComponentFixture<ClassLevelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassLevelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
