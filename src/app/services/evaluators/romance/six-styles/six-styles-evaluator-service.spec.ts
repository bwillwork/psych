import { TestBed } from '@angular/core/testing';

import { SixStylesEvaluatorService } from './six-styles-evaluator-service';

describe('SixStylesEvaluatorService', () => {
  let service: SixStylesEvaluatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SixStylesEvaluatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
