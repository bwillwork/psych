import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeductionResultsElm } from './seduction-results-elm';

describe('SeductionResultsElm', () => {
  let component: SeductionResultsElm;
  let fixture: ComponentFixture<SeductionResultsElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeductionResultsElm],
    }).compileComponents();

    fixture = TestBed.createComponent(SeductionResultsElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
