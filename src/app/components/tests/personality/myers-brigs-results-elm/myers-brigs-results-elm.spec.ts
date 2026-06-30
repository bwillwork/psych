import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyersBrigsResultsElm } from './myers-brigs-results-elm';

describe('MyersBrigsResultsElm', () => {
  let component: MyersBrigsResultsElm;
  let fixture: ComponentFixture<MyersBrigsResultsElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyersBrigsResultsElm],
    }).compileComponents();

    fixture = TestBed.createComponent(MyersBrigsResultsElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
