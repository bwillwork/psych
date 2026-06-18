import { TestBed } from '@angular/core/testing';

import { SeductionQuestionsService } from './seduction-questions-service';

describe('SeductionQuestionsService', () => {
  let service: SeductionQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeductionQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
