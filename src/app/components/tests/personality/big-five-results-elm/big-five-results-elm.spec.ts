import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigFiveResultsElm } from './big-five-results-elm';

describe('BigFiveResultsElm', () => {
  let component: BigFiveResultsElm;
  let fixture: ComponentFixture<BigFiveResultsElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigFiveResultsElm],
    }).compileComponents();

    fixture = TestBed.createComponent(BigFiveResultsElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
