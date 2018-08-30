import { TestBed, inject } from '@angular/core/testing';

import { FeeTransactionsService } from './fee-transactions.service';

describe('FeeTransactionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeeTransactionsService]
    });
  });

  it('should be created', inject([FeeTransactionsService], (service: FeeTransactionsService) => {
    expect(service).toBeTruthy();
  }));
});
