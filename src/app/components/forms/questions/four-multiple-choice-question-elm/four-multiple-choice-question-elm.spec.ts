import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourMultipleChoiceQuestionElm } from './four-multiple-choice-question-elm';

describe('FourMultipleChoiceQuestionElm', () => {
  let component: FourMultipleChoiceQuestionElm;
  let fixture: ComponentFixture<FourMultipleChoiceQuestionElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourMultipleChoiceQuestionElm],
    }).compileComponents();

    fixture = TestBed.createComponent(FourMultipleChoiceQuestionElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
