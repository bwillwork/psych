import {createAction, props} from '@ngrx/store';
import {
  FiveScaleAnswer,
  FourMultipleChoiceAnswer,
  QuestionId,
  TwoMultipleChoiceAnswer
} from '../../../types/test.types';

const testKey = '[Seduction]';

export const SeductionActions = {
  answerQuestion: `${testKey} Answer Question`,
  resetQuestions: `${testKey} Reset Question Answers`,
};

export const answerQuestion = createAction(SeductionActions.answerQuestion,props<{id: QuestionId, answer: FourMultipleChoiceAnswer}>());
export const resetQuestions = createAction(SeductionActions.resetQuestions);
