import { TestBed } from '@angular/core/testing';

import { BigFiveService } from './big-five-service';

describe('BigFiveService', () => {
  let service: BigFiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigFiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
