import { createSelector } from '@ngrx/store';
import {AllQuestionTypes, AppState} from '../../types/test.types';
import {selectIsFinished, selectTestChoices} from './test.selectors';

export const selectBigFiveTestData = (state: AppState) => state.bigFive;
export const selectMyersBrigsTestData = (state: AppState) => state.myersBrigs;
export const selectPenTestData = (state: AppState) => state.pen;

export const selectFiveModernRelTestData = (state: AppState) => state.fiveModern;
export const selectSeductionTestData = (state: AppState) => state.seduction;
export const selectSixStylesTestData = (state: AppState) => state.sixStyles;

export const selectBigFiveResult = createSelector(
  selectBigFiveTestData,
  selectTestChoices,
  selectIsFinished,
  (questions,choices,isFinished) => {
    if(isFinished && choices.bigFive) {

    } else {
      return
    }
  }
)
