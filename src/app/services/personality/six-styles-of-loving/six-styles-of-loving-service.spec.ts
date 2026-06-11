import { TestBed } from '@angular/core/testing';

import { SixStylesOfLovingService } from './six-styles-of-loving-service';

describe('SixStylesOfLovingService', () => {
  let service: SixStylesOfLovingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SixStylesOfLovingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
