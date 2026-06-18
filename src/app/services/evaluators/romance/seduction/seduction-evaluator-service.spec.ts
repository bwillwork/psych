import { TestBed } from '@angular/core/testing';

import { SeductionEvaluatorService } from './seduction-evaluator-service';

describe('SeductionEvaluatorService', () => {
  let service: SeductionEvaluatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeductionEvaluatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
