import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenResultsElm } from './pen-results-elm';

describe('PenResultsElm', () => {
  let component: PenResultsElm;
  let fixture: ComponentFixture<PenResultsElm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenResultsElm],
    }).compileComponents();

    fixture = TestBed.createComponent(PenResultsElm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
