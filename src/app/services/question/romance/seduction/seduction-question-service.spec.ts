import { TestBed } from '@angular/core/testing';

import { SeductionQuestionService } from './seduction-question-service';

describe('SeductionQuestionService', () => {
  let service: SeductionQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeductionQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
