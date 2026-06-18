import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFalseQuestionElm } from './true-false-question-elm';

describe('TrueFalseQuestionElm', () => {
  let component: TrueFalseQuestionElm;
  let fixture: ComponentFixture<TrueFalseQuestionElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrueFalseQuestionElm],
    }).compileComponents();

    fixture = TestBed.createComponent(TrueFalseQuestionElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
