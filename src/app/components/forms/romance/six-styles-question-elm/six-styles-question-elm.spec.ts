import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixStylesQuestionElm } from './six-styles-question-elm';

describe('SixStylesQuestionElm', () => {
  let component: SixStylesQuestionElm;
  let fixture: ComponentFixture<SixStylesQuestionElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixStylesQuestionElm],
    }).compileComponents();

    fixture = TestBed.createComponent(SixStylesQuestionElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
