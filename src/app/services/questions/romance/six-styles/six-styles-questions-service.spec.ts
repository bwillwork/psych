import { TestBed } from '@angular/core/testing';

import { SixStylesQuestionsService } from './six-styles-questions-service';

describe('SixStylesQuestionsService', () => {
  let service: SixStylesQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SixStylesQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
