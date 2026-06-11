import { TestBed } from '@angular/core/testing';

import { SeductionArchetypesService } from './seduction-archetypes-service';

describe('SeductionArchetypesService', () => {
  let service: SeductionArchetypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeductionArchetypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
