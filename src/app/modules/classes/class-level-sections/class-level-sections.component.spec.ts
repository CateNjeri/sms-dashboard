import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassLevelSectionsComponent } from './class-level-sections.component';

describe('ClassLevelSectionsComponent', () => {
  let component: ClassLevelSectionsComponent;
  let fixture: ComponentFixture<ClassLevelSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassLevelSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassLevelSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
