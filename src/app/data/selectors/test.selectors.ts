import { createSelector } from '@ngrx/store';
import {AllQuestionTypes, AppState} from '../../types/test.types';

export const selectTestChoices = (state: AppState) => state.choices;

export const selectAllTestsMap = (state: AppState) => {
  const {choices,...testData} = state;
  return {...testData};
};

export const selectTest = createSelector(
  selectAllTestsMap,
  selectTestChoices,
  (
    testMap,
    choices) => {
    let result: Array<AllQuestionTypes> = [];
    const keys = Object.keys(choices) as Array<keyof typeof choices>;
    for(const key of keys) {
      if(choices[key]) result = result.concat(testMap[key]);
    }
    return result;
  }
);


export const selectAllQuestionCount = createSelector(
  selectTest,
  (test) => test.length
);

export const selectUnansweredQuestions = createSelector(
  selectTest,
  (test) => test.filter(q => q.answer === undefined)
);

export const selectAnsweredQuestions = createSelector(
  selectTest,
  (test) => {
    return test.filter(q => q.answer !== undefined)
      .sort((a,b) => {
        // Sorting in the order they were answered
        return (a.answeredDate && b.answeredDate) ? a.answeredDate.getTime() - b.answeredDate.getTime() : 0
      })
  }
);

export const selectAnsweredQuestionCount = createSelector(
  selectAnsweredQuestions,
  (test) => test.length
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
    const result = values.reduce((agg,val) => {
      return agg || val;
    },false);
    console.log('has started: ',choices,result);
    return result;
  }
);

export const selectIsFinished = createSelector(
  selectAllQuestionCount,
  selectAnsweredQuestionCount,
  (total,answered) => {
    return total > 0 && total === answered;
  }
);
