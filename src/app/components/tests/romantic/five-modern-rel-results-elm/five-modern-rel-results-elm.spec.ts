import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveModernRelResultsElm } from './five-modern-rel-results-elm';

describe('FiveModernRelResultsElm', () => {
  let component: FiveModernRelResultsElm;
  let fixture: ComponentFixture<FiveModernRelResultsElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveModernRelResultsElm],
    }).compileComponents();

    fixture = TestBed.createComponent(FiveModernRelResultsElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
