import { TestBed, inject } from '@angular/core/testing';

import { SchoolUserAccountsService } from './school-user-accounts.service';

describe('SchoolUserAccountsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolUserAccountsService]
    });
  });

  it('should be created', inject([SchoolUserAccountsService], (service: SchoolUserAccountsService) => {
    expect(service).toBeTruthy();
  }));
});
