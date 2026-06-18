import { TestBed } from '@angular/core/testing';

import { PenQuestionsService } from './pen-questions-service';

describe('PenQuestionsService', () => {
  let service: PenQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
