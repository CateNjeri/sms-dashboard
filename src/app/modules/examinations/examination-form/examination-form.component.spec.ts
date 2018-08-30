import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassLevelSectionFormComponent } from './class-level-section-form.component';


describe('ClassLevelSectionFormComponent', () => {
  let component: ClassLevelSectionFormComponent;
  let fixture: ComponentFixture<ClassLevelSectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassLevelSectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassLevelSectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
