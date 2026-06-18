import { TestBed } from '@angular/core/testing';

import { BigFiveEvaluatorService } from './big-five-evaluator-service';

describe('BigFiveEvaluatorService', () => {
  let service: BigFiveEvaluatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigFiveEvaluatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
