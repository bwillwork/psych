import {createReducer, on} from '@ngrx/store';
import {choose, reset} from '../actions/testChoice.actions';
import {initTestChoices} from '../../util/test.util';

export const initialState = initTestChoices();

export const testChoicesReducer = createReducer(
  initialState,
  on(choose, (state,{choices}) => {
    console.log('choices: ',{...state,...choices});
    return {...state,...choices};
  }),
  on(reset, () => {
    console.log('reset');
    return initTestChoices()
  }),
);
