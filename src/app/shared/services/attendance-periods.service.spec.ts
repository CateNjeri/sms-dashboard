import { TestBed, inject } from '@angular/core/testing';

import { AttendancePeriodsService } from './attendance-periods.service';

describe('AttendancePeriodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttendancePeriodsService]
    });
  });

  it('should be created', inject([AttendancePeriodsService], (service: AttendancePeriodsService) => {
    expect(service).toBeTruthy();
  }));
});
