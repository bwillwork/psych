import {createAction, props} from '@ngrx/store';
import {QuestionId, TestChoices, TrueFalseAnswer, TwoMultipleChoiceAnswer} from '../../types/test.types';

const testKey = '[Test Choices]';

export const TestChoiceActions = {
  choose: `${testKey} Choose Tests`,
  reset: `${testKey} Reset Test Choices`,
};

export const choose = createAction(TestChoiceActions.choose,props<{choices: TestChoices}>());
export const reset = createAction(TestChoiceActions.reset);
