import { TestBed } from '@angular/core/testing';

import { TestChoiceService } from './test-choice-service';

describe('TestChoiceService', () => {
  let service: TestChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
