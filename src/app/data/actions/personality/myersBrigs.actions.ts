import {createAction, props} from '@ngrx/store';
import {FiveScaleAnswer, QuestionId, TwoMultipleChoiceAnswer} from '../../types/test.types';

const testKey = '[Myers Brigs]';

export const MyersBrigsActions = {
  answerQuestion: `${testKey} Answer Question`,
  resetQuestions: `${testKey} Reset Question Answers`,
};

export const answerQuestion = createAction(MyersBrigsActions.answerQuestion,props<{id: QuestionId, answer: TwoMultipleChoiceAnswer}>());
export const resetQuestions = createAction(MyersBrigsActions.resetQuestions);
