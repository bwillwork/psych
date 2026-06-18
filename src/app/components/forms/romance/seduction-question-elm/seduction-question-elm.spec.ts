import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeductionQuestionElm } from './seduction-question-elm';

describe('SeductionQuestionElm', () => {
  let component: SeductionQuestionElm;
  let fixture: ComponentFixture<SeductionQuestionElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeductionQuestionElm],
    }).compileComponents();

    fixture = TestBed.createComponent(SeductionQuestionElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
