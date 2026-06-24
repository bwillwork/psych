import { createReducer, on } from '@ngrx/store';
import { answerQuestion, resetQuestions } from '../../actions/personality/bigFive.actions';
import {initBigFiveQuestions} from '../../../util/question.util';
import {answer, reset} from '../../../util/test.util';

export const initialState = initBigFiveQuestions();

export const bigFiveReducer = createReducer(
  initialState,
  on(answerQuestion, answer),
  on(resetQuestions, reset),
);
