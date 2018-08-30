import { TestBed, inject } from '@angular/core/testing';

import { ClassLevelSectionsService } from './class-level-sections.service';

describe('ClassLevelSectionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassLevelSectionsService]
    });
  });

  it('should be created', inject([ClassLevelSectionsService], (service: ClassLevelSectionsService) => {
    expect(service).toBeTruthy();
  }));
});
