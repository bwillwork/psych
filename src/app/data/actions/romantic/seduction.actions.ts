import {createAction, props} from '@ngrx/store';
import {FiveScaleAnswer, QuestionId, TwoMultipleChoiceAnswer} from '../../../types/test.types';

const testKey = '[Myers Brigs]';

export const SeductionActions = {
  answerQuestion: `${testKey} Answer Question`,
  resetQuestions: `${testKey} Reset Question Answers`,
};

export const answerQuestion = createAction(SeductionActions.answerQuestion,props<{id: QuestionId, answer: TwoMultipleChoiceAnswer}>());
export const resetQuestions = createAction(SeductionActions.resetQuestions);
