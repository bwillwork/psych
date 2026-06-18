import { TestBed } from '@angular/core/testing';

import { PenQuestionService } from './pen-question-service';

describe('PenQuestionService', () => {
  let service: PenQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
