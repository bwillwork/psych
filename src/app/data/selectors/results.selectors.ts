import { createSelector } from '@ngrx/store';
import {
  AllQuestionTypes,
  AppState,
  BigFiveResult,
  FiveModernRelationshipsResult,
  MyersBrigsResult,
  PenTestResult, SeductionArchetypesResult, SixStylesOfLovingResult
} from '../../types/test.types';
import {selectIsFinished, selectTestChoices} from './test.selectors';
import {
  evaluateBigFiveTest,
  evaluateFiveModernTest,
  evaluateMyersBrigsTest,
  evaluatePenTest, evaluateSeductionTest, evaluateSixStylesOfLovingTest
} from '../../util/results.util';

export const selectBigFiveTestData = (state: AppState) => state.bigFive;
export const selectMyersBrigsTestData = (state: AppState) => state.myersBrigs;
export const selectPenTestData = (state: AppState) => state.pen;

export const selectFiveModernRelTestData = (state: AppState) => state.fiveModern;
export const selectSeductionTestData = (state: AppState) => state.seduction;
export const selectSixStylesTestData = (state: AppState) => state.sixStyles;


// Personality
export const selectBigFiveResult = createSelector(
  selectBigFiveTestData,
  selectTestChoices,
  selectIsFinished,
  (questions,choices,isFinished): BigFiveResult => {
    if(isFinished && choices.bigFive) {
      return evaluateBigFiveTest(questions);
    } else {
      return {agreeableness: 0, conscientiousness: 0, extroversion: 0, neuroticism: 0, openness: 0};
    }
  }
);

export const selectMyersBrigsResult = createSelector(
  selectMyersBrigsTestData,
  selectTestChoices,
  selectIsFinished,
  (questions,choices,isFinished): MyersBrigsResult => {
    if(isFinished && choices.bigFive) {
      return evaluateMyersBrigsTest(questions);
    } else {
      return {
        decisions: {feeling: 0, thinking: 0},
        energy: {extroversion: 0, introversion: 0},
        information: {intuition: 0, sensing: 0},
        lifestyle: {judging: 0, perceiving: 0}
      };
    }
  }
);

export const selectPenResult = createSelector(
  selectPenTestData,
  selectTestChoices,
  selectIsFinished,
  (questions,choices,isFinished): PenTestResult => {
    if(isFinished && choices.bigFive) {
      return evaluatePenTest(questions);
    } else {
      return {extroversion: 0, neuroticism: 0, psychoticism: 0};
    }
  }
);

// Romantic
export const selectFiveModernRelResult = createSelector(
  selectFiveModernRelTestData,
  selectTestChoices,
  selectIsFinished,
  (questions,choices,isFinished): FiveModernRelationshipsResult => {
    if(isFinished && choices.bigFive) {
      return evaluateFiveModernTest(questions);
    } else {
      return {A: 0, B: 0, C: 0, D: 0, E: 0};
    }
  }
);

export const selectSeductionResult = createSelector(
  selectSeductionTestData,
  selectTestChoices,
  selectIsFinished,
  (questions,choices,isFinished): SeductionArchetypesResult => {
    if(isFinished && choices.bigFive) {
      return evaluateSeductionTest(questions);
    } else {
      return {A: 0, B: 0, C: 0, D: 0};
    }
  }
);

export const selectSixStylesResult = createSelector(
  selectSixStylesTestData,
  selectTestChoices,
  selectIsFinished,
  (questions,choices,isFinished): SixStylesOfLovingResult => {
    if(isFinished && choices.bigFive) {
      return evaluateSixStylesOfLovingTest(questions);
    } else {
      return {agape: 0, eros: 0, ludus: 0, mania: 0, pragma: 0, storage: 0};
    }
  }
);
