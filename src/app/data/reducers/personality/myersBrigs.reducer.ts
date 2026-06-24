import { createReducer, on } from '@ngrx/store';
import { answerQuestion, resetQuestions } from '../../actions/personality/myersBrigs.actions';
import {initMyersBrigsQuestions} from '../../../util/question.util';
import {answer, reset} from '../../../util/test.util';

export const initialState = initMyersBrigsQuestions();

export const myersBrigsReducer = createReducer(
  initialState,
  on(answerQuestion, answer),
  on(resetQuestions, reset),
);
