import {createReducer, on} from '@ngrx/store';
import {answerQuestion, resetQuestions} from '../../actions/romantic/fiveModernRel.actions';
import {initFiveModernQuestions} from '../../../util/question.util';
import {answer, reset} from '../../../util/test.util';

export const initialState = initFiveModernQuestions();

export const fiveModernRelReducer = createReducer(
  initialState,
  on(answerQuestion, answer),
  on(resetQuestions, reset),
);
