import {
  FiveMultipleChoiceQuestion,
  FiveMultipleChoiceResponses,
  FiveScaleQuestion, FourMultipleChoiceQuestion, FourMultipleChoiceResponses, TestType, TestTypeKeys,
  TrueFalseQuestion,
  TwoMultipleChoiceQuestion,
  TwoMultipleChoiceResponses
} from '../types/test.types';

export const testTypeKeys: TestTypeKeys = {
  bigFive: "bigFive",
  myersBrigs: "myersBrigs",
  pen: "pen",
  fiveModern: "fiveModern",
  seduction: "seduction",
  sixStyles: "sixStyles"
};

export function initTrueFalseQuestion(id: number,question: string): TrueFalseQuestion {
  return {id,question, answer: undefined};
}

export function initFiveScaleQuestion(id: number,question: string): FiveScaleQuestion {
  return {id,question, answer: undefined};
}

export function initTwoMultipleChoiceQuestion(id: number,question: string, responses:TwoMultipleChoiceResponses): TwoMultipleChoiceQuestion {
  return { id,question, responses, answer: undefined};
}

export function initFourMultipleChoiceQuestion(id: number,question: string, responses:FourMultipleChoiceResponses): FourMultipleChoiceQuestion {
  return { id,question, responses, answer: undefined};
}

export function initFiveMultipleChoiceQuestion(id: number,question: string, responses:FiveMultipleChoiceResponses): FiveMultipleChoiceQuestion {
  return { id,question, responses, answer: undefined};
}
