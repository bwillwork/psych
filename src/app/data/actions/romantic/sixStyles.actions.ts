import {createAction, props} from '@ngrx/store';
import {FiveScaleAnswer, QuestionId} from '../../../types/test.types';

const testKey = '[Six Styles]';

export const SixStylesActions = {
  answerQuestion: `${testKey} Answer Question`,
  resetQuestions: `${testKey} Reset Question Answers`,
};

export const answerQuestion = createAction(SixStylesActions.answerQuestion,props<{id: QuestionId, answer: FiveScaleAnswer}>());
export const resetQuestions = createAction(SixStylesActions.resetQuestions);
