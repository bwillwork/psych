import { TestBed } from '@angular/core/testing';

import { SixStylesQuestionService } from './six-styles-question-service';

describe('SixStylesQuestionService', () => {
  let service: SixStylesQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SixStylesQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
