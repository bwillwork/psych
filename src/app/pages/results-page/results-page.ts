import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {BigFiveResultsElm} from '../../components/tests/personality/big-five-results-elm/big-five-results-elm';
import {MyersBrigsResultsElm} from '../../components/tests/personality/myers-brigs-results-elm/myers-brigs-results-elm';
import {PenResultsElm} from '../../components/tests/personality/pen-results-elm/pen-results-elm';
import {
  FiveModernRelResultsElm
} from '../../components/tests/romantic/five-modern-rel-results-elm/five-modern-rel-results-elm';
import {SeductionResultsElm} from '../../components/tests/romantic/seduction-results-elm/seduction-results-elm';
import {SixStylesResultsElm} from '../../components/tests/romantic/six-styles-results-elm/six-styles-results-elm';

@Component({
  selector: 'app-results-page',
  imports: [
    BigFiveResultsElm,
    MyersBrigsResultsElm,
    PenResultsElm,
    FiveModernRelResultsElm,
    SeductionResultsElm,
    SixStylesResultsElm
  ],
  templateUrl: './results-page.html',
  styleUrl: './results-page.css',
})
export class ResultsPage {

  private readonly store = inject(Store);



}
