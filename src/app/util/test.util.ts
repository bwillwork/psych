import {Question, QuestionId, TestChoices} from '../types/test.types';

export function initTestChoices(): TestChoices {
  return {bigFive: false, fiveModern: false, myersBrigs: false, pen: false, seduction: false, sixStyles: false};
}

export function answer<Q extends Question<A>,A>(
  state: Array<Q>,
  {id,answer}: {id: QuestionId,answer: A}): Array<Q> {
  const result = [...state];
  const index = result.findIndex(q => q.id.num === id.num && q.id.test === id.test);
  if(index !== -1) {
    result[index] = {...result[index],answer,answeredDate: new Date()};
  }
  return result;
}

export function reset<Q extends Question<A>,A>(state: Array<Q>): Array<Q> {
  const result = [...state];
  for(const r in result) {
    result[r] = {...result[r],answer: undefined, answeredDate: undefined};
  }
  return result;
}
