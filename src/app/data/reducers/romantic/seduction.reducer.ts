import { createReducer, on } from '@ngrx/store';
import { answerQuestion, resetQuestions } from '../actions/myersBrigs.actions';
import {initMyersBrigsQuestions} from '../../util/question.util';

export const initialState = initMyersBrigsQuestions();

export const seductionReducer = createReducer(
  initialState,
  on(answerQuestion, (state,{id,answer}) => {
    const index = state.findIndex(q => q.id.num === id.num && q.id.test === id.test);
    if(index !== -1) {
      state[index].answer = answer;
    }
    return [...state];
  }),
  on(resetQuestions, (state) => {
    for(const q of state) {
      q.answer = undefined;
    }
    return [...state];
  }),
);
