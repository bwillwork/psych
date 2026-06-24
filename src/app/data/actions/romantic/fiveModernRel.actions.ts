import {createAction, props} from '@ngrx/store';
import {FiveMultipleChoiceAnswer, QuestionId} from '../../../types/test.types';

const testKey = '[Five Modern Relationships]';

export const FiveModernRelActions = {
  answerQuestion: `${testKey} Answer Question`,
  resetQuestions: `${testKey} Reset Question Answers`,
};

export const answerQuestion = createAction(FiveModernRelActions.answerQuestion,props<{id: QuestionId, answer: FiveMultipleChoiceAnswer}>());
export const resetQuestions = createAction(FiveModernRelActions.resetQuestions);
