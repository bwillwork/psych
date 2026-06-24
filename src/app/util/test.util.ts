import {Question, QuestionId, TestChoices} from '../types/test.types';

export function initTestChoices(): TestChoices {
  return {bigFive: false, fiveModern: false, myersBrigs: false, pen: false, seduction: false, sixStyles: false};
}

export function answer<Q extends Question<A>,A>(
  state: Array<Q>,
  {id,answer}: {id: QuestionId,answer: A}): Array<Q> {
  const index = state.findIndex(q => q.id.num === id.num && q.id.test === id.test);
  if(index !== -1) {
    state[index].answer = answer;
    state[index].answeredDate = new Date();
  }
  return [...state];
}

export function reset<Q extends Question<A>,A>(state: Array<Q>): Array<Q> {
  for(const q of state) {
    q.answer = undefined;
    q.answeredDate = new Date();
  }
  return [...state];
}
