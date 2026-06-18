import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveModernRelQuestionElm } from './five-modern-rel-question-elm';

describe('FiveModernRelQuestionElm', () => {
  let component: FiveModernRelQuestionElm;
  let fixture: ComponentFixture<FiveModernRelQuestionElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveModernRelQuestionElm],
    }).compileComponents();

    fixture = TestBed.createComponent(FiveModernRelQuestionElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
