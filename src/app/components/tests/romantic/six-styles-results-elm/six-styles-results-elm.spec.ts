import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixStylesResultsElm } from './six-styles-results-elm';

describe('SixStylesResultsElm', () => {
  let component: SixStylesResultsElm;
  let fixture: ComponentFixture<SixStylesResultsElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixStylesResultsElm],
    }).compileComponents();

    fixture = TestBed.createComponent(SixStylesResultsElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
