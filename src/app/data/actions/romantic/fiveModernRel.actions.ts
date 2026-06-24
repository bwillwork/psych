import {createAction, props} from '@ngrx/store';
import {QuestionId, TrueFalseAnswer, TwoMultipleChoiceAnswer} from '../../../types/test.types';

const testKey = '[PEN]';

export const FiveModernRelActions = {
  answerQuestion: `${testKey} Answer Question`,
  resetQuestions: `${testKey} Reset Question Answers`,
};

export const answerQuestion = createAction(FiveModernRelActions.answerQuestion,props<{id: QuestionId, answer: TrueFalseAnswer}>());
export const resetQuestions = createAction(FiveModernRelActions.resetQuestions);
