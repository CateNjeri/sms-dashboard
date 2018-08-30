import { TestBed, inject } from '@angular/core/testing';

import { EducationSystemLevelsService } from './education-system-levels.service';

describe('EducationSystemLevelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducationSystemLevelsService]
    });
  });

  it('should be created', inject([EducationSystemLevelsService], (service: EducationSystemLevelsService) => {
    expect(service).toBeTruthy();
  }));
});
