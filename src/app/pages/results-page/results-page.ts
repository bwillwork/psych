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
import {selectTestChoices} from '../../data/selectors/test.selectors';
import {
  selectBigFiveResult,
  selectFiveModernRelResult,
  selectMyersBrigsResult,
  selectPenResult, selectSeductionResult, selectSixStylesResult
} from '../../data/selectors/results.selectors';

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

  choices = this.store.selectSignal(selectTestChoices);

  bigFive = this.store.selectSignal(selectBigFiveResult);
  myersBrigs = this.store.selectSignal(selectMyersBrigsResult);
  pen = this.store.selectSignal(selectPenResult);

  fiveModern = this.store.selectSignal(selectFiveModernRelResult);
  seduction = this.store.selectSignal(selectSeductionResult);
  sixStyles = this.store.selectSignal(selectSixStylesResult);

}
