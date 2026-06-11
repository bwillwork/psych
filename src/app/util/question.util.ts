import {
  FiveMultipleChoiceQuestion,
  FiveMultipleChoiceResponses,
  FiveScaleQuestion, FourMultipleChoiceQuestion, FourMultipleChoiceResponses,
  TrueFalseQuestion,
  TwoMultipleChoiceQuestion,
  TwoMultipleChoiceResponses
} from '../types/test.types';

export function initTrueFalseQuestion(id: number,question: string): TrueFalseQuestion {
  return {id,question, response: undefined};
}

export function initFiveScaleQuestion(id: number,question: string): FiveScaleQuestion {
  return {id,question, response: undefined};
}

export function initTwoMultipleChoiceQuestion(id: number,question: string, responses:TwoMultipleChoiceResponses): TwoMultipleChoiceQuestion {
  return { id,question, responses, response: undefined};
}

export function initFourMultipleChoiceQuestion(id: number,question: string, responses:FourMultipleChoiceResponses): FourMultipleChoiceQuestion {
  return { id,question, responses, response: undefined};
}

export function initFiveMultipleChoiceQuestion(id: number,question: string, responses:FiveMultipleChoiceResponses): FiveMultipleChoiceQuestion {
  return { id,question, responses, response: undefined};
}
