import { TestBed } from '@angular/core/testing';

import { FiveModernRelQuestionService } from './five-modern-rel-question-service';

describe('FiveModernRelQuestionService', () => {
  let service: FiveModernRelQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiveModernRelQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
