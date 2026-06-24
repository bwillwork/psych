import {createAction, props} from '@ngrx/store';
import {QuestionId, TrueFalseAnswer} from '../../../types/test.types';

const testKey = '[PEN]';

export const PenActions = {
  answerQuestion: `${testKey} Answer Question`,
  resetQuestions: `${testKey} Reset Question Answers`,
};

export const answerQuestion = createAction(PenActions.answerQuestion,props<{id: QuestionId, answer: TrueFalseAnswer}>());
export const resetQuestions = createAction(PenActions.resetQuestions);
