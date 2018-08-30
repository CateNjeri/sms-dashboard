import { TestBed, inject } from '@angular/core/testing';

import { ExaminationsService } from './examinations.service';

describe('ExaminationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExaminationsService]
    });
  });

  it('should be created', inject([ExaminationsService], (service: ExaminationsService) => {
    expect(service).toBeTruthy();
  }));
});
