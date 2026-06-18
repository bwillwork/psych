import { TestBed } from '@angular/core/testing';

import { MyersBrigsQuestionService } from './myers-brigs-question-service';

describe('MyersBrigsQuestionService', () => {
  let service: MyersBrigsQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyersBrigsQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
