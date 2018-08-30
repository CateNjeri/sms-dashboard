import { TestBed, inject } from '@angular/core/testing';

import { EducationSystemService } from './education-system.service';

describe('EducationSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducationSystemService]
    });
  });

  it('should be created', inject([EducationSystemService], (service: EducationSystemService) => {
    expect(service).toBeTruthy();
  }));
});
