import {FiveScaleQuestion} from '../types/test.types';

export function initFiveScaleQuestion(id: number,question: string): FiveScaleQuestion {
  return {id,question, response: undefined};
}
