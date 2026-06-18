import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyersBrigsQuestionElm } from './myers-brigs-question-elm';

describe('MyersBrigsQuestionElm', () => {
  let component: MyersBrigsQuestionElm;
  let fixture: ComponentFixture<MyersBrigsQuestionElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyersBrigsQuestionElm],
    }).compileComponents();

    fixture = TestBed.createComponent(MyersBrigsQuestionElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
