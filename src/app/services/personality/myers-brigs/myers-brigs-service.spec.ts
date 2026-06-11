import { TestBed } from '@angular/core/testing';

import { MyersBrigsService } from './myers-brigs-service';

describe('MyersBrigsService', () => {
  let service: MyersBrigsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyersBrigsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
