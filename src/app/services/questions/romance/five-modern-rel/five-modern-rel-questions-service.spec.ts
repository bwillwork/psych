import { TestBed } from '@angular/core/testing';

import { FiveModernRelQuestionsService } from './five-modern-rel-questions-service';

describe('FiveModernRelQuestionsService', () => {
  let service: FiveModernRelQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiveModernRelQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
