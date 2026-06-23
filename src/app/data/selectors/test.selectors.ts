import { createSelector } from '@ngrx/store';
import {AllQuestionTypes, AppState} from '../../types/test.types';

export const selectBigFiveTest = (state: AppState) => state.bigFive;
export const selectMyersBrigsTest = (state: AppState) => state.myersBrigs;
export const selectPenTest = (state: AppState) => state.pen;
export const selectTestChoices = (state: AppState) => state.choices;

export const selectTest = createSelector(
  selectBigFiveTest,
  selectMyersBrigsTest,
  selectPenTest,
  selectTestChoices,
  (bigFive,myersBrigs,pen,choices) => {
    let result: Array<AllQuestionTypes> = [];
    if(choices.bigFive) result = result.concat(bigFive)
    if(choices.myersBrigs) result = result.concat(myersBrigs)
    if(choices.pen) result = result.concat(pen)
    return result;
  }
);

export const selectAnsweredQuestions = createSelector(
  selectTest,
  (test) => test.filter(q => q.answer !== undefined)
);

export const selectUnansweredQuestions = createSelector(
  selectTest,
  (test) => test.filter(q => q.answer === undefined)
);

export const selectRandomUnansweredQuestion = createSelector(
  selectUnansweredQuestions,
  (questions) => {
    const lastIndex = questions.length - 1;
    let randomIndex = Math.floor(Math.random() * lastIndex);
    return questions[randomIndex];
  }
);

export const selectHasStartedTest = createSelector(
  selectTestChoices,
  (choices) => {
    const values = Object.values(choices);
    return values.reduce((agg,val) => {
      return agg && val;
    },true);
  }
);
