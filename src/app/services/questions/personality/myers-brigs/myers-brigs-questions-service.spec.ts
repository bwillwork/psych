import { TestBed } from '@angular/core/testing';

import { MyersBrigsQuestionsService } from './myers-brigs-questions-service';

describe('MyersBrigsQuestionsService', () => {
  let service: MyersBrigsQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyersBrigsQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
