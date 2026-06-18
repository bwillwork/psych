import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveMultipleChoiceQuestionElm } from './five-multiple-choice-question-elm';

describe('FiveMultipleChoiceQuestionElm', () => {
  let component: FiveMultipleChoiceQuestionElm;
  let fixture: ComponentFixture<FiveMultipleChoiceQuestionElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveMultipleChoiceQuestionElm],
    }).compileComponents();

    fixture = TestBed.createComponent(FiveMultipleChoiceQuestionElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
