import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigFiveQuestionElm } from './big-five-question-elm';

describe('BigFiveQuestionElm', () => {
  let component: BigFiveQuestionElm;
  let fixture: ComponentFixture<BigFiveQuestionElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigFiveQuestionElm],
    }).compileComponents();

    fixture = TestBed.createComponent(BigFiveQuestionElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
