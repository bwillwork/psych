import { createReducer, on } from '@ngrx/store';
import { answerQuestion, resetQuestions } from '../../actions/personality/pen.actions';
import {initPenQuestions} from '../../../util/question.util';
import {answer, reset} from '../../../util/test.util';

export const initialState = initPenQuestions();

export const penReducer = createReducer(
  initialState,
  on(answerQuestion, answer),
  on(resetQuestions, reset),
);
