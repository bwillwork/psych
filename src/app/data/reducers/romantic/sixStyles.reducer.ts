import {createReducer, on} from '@ngrx/store';
import {answerQuestion, resetQuestions} from '../../actions/romantic/sixStyles.actions';
import {initSixStylesQuestions} from '../../../util/question.util';
import {answer, reset} from '../../../util/test.util';

export const initialState = initSixStylesQuestions();

export const sixStylesReducer = createReducer(
  initialState,
  on(answerQuestion, answer),
  on(resetQuestions, reset),
);
