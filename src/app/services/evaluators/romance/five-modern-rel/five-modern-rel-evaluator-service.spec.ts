import { TestBed } from '@angular/core/testing';

import { FiveModernRelEvaluatorService } from './five-modern-rel-evaluator-service';

describe('FiveModernRelEvaluatorService', () => {
  let service: FiveModernRelEvaluatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiveModernRelEvaluatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
