import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenQuestionElm } from './pen-question-elm';

describe('PenQuestionElm', () => {
  let component: PenQuestionElm;
  let fixture: ComponentFixture<PenQuestionElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenQuestionElm],
    }).compileComponents();

    fixture = TestBed.createComponent(PenQuestionElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
