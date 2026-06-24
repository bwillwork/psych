import {createReducer, on} from '@ngrx/store';
import {answerQuestion, resetQuestions} from '../../actions/romantic/seduction.actions';
import {initSeductionQuestions} from '../../../util/question.util';
import {answer, reset} from '../../../util/test.util';

export const initialState = initSeductionQuestions();

export const seductionReducer = createReducer(
  initialState,
  on(answerQuestion, answer),
  on(resetQuestions, reset),
);
