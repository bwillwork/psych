import { TestBed } from '@angular/core/testing';

import { BigFiveQuestionService } from './big-five-question-service';

describe('BigFiveQuestionService', () => {
  let service: BigFiveQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigFiveQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
