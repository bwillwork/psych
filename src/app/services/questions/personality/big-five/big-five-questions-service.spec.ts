import { TestBed } from '@angular/core/testing';

import { BigFiveQuestionsService } from './big-five-questions-service';

describe('BigFiveQuestionsService', () => {
  let service: BigFiveQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigFiveQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
