import { TestBed } from '@angular/core/testing';

import { FiveModernRelationshipsService } from './five-modern-relationships-service';

describe('FiveModernRelationshipsService', () => {
  let service: FiveModernRelationshipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiveModernRelationshipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
