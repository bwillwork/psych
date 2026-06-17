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

export function initTrueFalseQuestion(id: number,test: TestType,question: string): TrueFalseQuestion {
  return {id,test,question, response: undefined};
}

export function initFiveScaleQuestion(id: number,test: TestType,question: string): FiveScaleQuestion {
  return {id,test,question, response: undefined};
}

export function initTwoMultipleChoiceQuestion(id: number,test: TestType,question: string, responses:TwoMultipleChoiceResponses): TwoMultipleChoiceQuestion {
  return { id,test,question, responses, response: undefined};
}

export function initFourMultipleChoiceQuestion(id: number,test: TestType,question: string, responses:FourMultipleChoiceResponses): FourMultipleChoiceQuestion {
  return { id,test,question, responses, response: undefined};
}

export function initFiveMultipleChoiceQuestion(id: number,test: TestType,question: string, responses:FiveMultipleChoiceResponses): FiveMultipleChoiceQuestion {
  return { id,test,question, responses, response: undefined};
}
