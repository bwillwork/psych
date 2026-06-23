import {createAction, props} from '@ngrx/store';
import {FiveScaleAnswer, QuestionId} from '../../types/test.types';

const testKey = '[Big Five]';

export const BigFiveActions = {
  answerQuestion: `${testKey} Answer Question`,
  resetQuestions: `${testKey} Reset Question Answers`,
};

export const answerQuestion = createAction(BigFiveActions.answerQuestion,props<{id: QuestionId, answer: FiveScaleAnswer}>());
export const resetQuestions = createAction(BigFiveActions.resetQuestions);
