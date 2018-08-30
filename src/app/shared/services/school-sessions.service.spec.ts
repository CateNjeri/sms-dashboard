import { TestBed, inject } from '@angular/core/testing';

import { SchoolSessionsService } from './school-sessions.service';

describe('SchoolSessionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolSessionsService]
    });
  });

  it('should be created', inject([SchoolSessionsService], (service: SchoolSessionsService) => {
    expect(service).toBeTruthy();
  }));
});
