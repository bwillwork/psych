import { TestBed } from '@angular/core/testing';

import { PenEvaluatorService } from './pen-evaluator-service';

describe('PenEvaluatorService', () => {
  let service: PenEvaluatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenEvaluatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
