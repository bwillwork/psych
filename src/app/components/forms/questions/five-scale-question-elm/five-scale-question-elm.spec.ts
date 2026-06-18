import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveScaleQuestionElm } from './five-scale-question-elm';

describe('FiveScaleQuestionElm', () => {
  let component: FiveScaleQuestionElm;
  let fixture: ComponentFixture<FiveScaleQuestionElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveScaleQuestionElm],
    }).compileComponents();

    fixture = TestBed.createComponent(FiveScaleQuestionElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
