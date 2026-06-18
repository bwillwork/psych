import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoMultipleChoiceQuestionElm } from './two-multiple-choice-question-elm';

describe('TwoMultipleChoiceQuestionElm', () => {
  let component: TwoMultipleChoiceQuestionElm;
  let fixture: ComponentFixture<TwoMultipleChoiceQuestionElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoMultipleChoiceQuestionElm],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoMultipleChoiceQuestionElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
