import { TestBed } from '@angular/core/testing';

import { MyersBrigsEvaluatorService } from './myers-brigs-evaluator-service';

describe('MyersBrigsEvaluatorService', () => {
  let service: MyersBrigsEvaluatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyersBrigsEvaluatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
