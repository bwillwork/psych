import {BigFiveService} from '../services/test/personality/big-five/big-five-service';
import {MyersBrigsService} from '../services/test/personality/myers-brigs/myers-brigs-service';
import {PenService} from '../services/test/personality/pen/pen-service';
import {
  FiveModernRelationshipsService
} from '../services/test/romantic/five-modern-relationships/five-modern-relationships-service';
import {SeductionArchetypesService} from '../services/test/romantic/seduction-archetypes/seduction-archetypes-service';
import {SixStylesOfLovingService} from '../services/test/romantic/six-styles-of-loving/six-styles-of-loving-service';

export type FiveScaleChoice = 1 | 2 | 3 | 4 | 5;

export type TwoMultipleChoiceKeys = 'A' | 'B';
export type FourMultipleChoiceKeys = TwoMultipleChoiceKeys | 'C' | 'D';
export type FiveMultipleChoiceKeys = FourMultipleChoiceKeys | 'E';

export type TwoMultipleChoiceResponses = {[key in TwoMultipleChoiceKeys]: string};
export type FourMultipleChoiceResponses = {[key in FourMultipleChoiceKeys]: string};
export type FiveMultipleChoiceResponses = {[key in FiveMultipleChoiceKeys]: string};

export type TrueFalseAnswer = boolean | undefined;
export type FiveScaleAnswer = FiveScaleChoice | undefined;
export type TwoMultipleChoiceAnswer = TwoMultipleChoiceKeys | undefined;
export type FourMultipleChoiceAnswer = FourMultipleChoiceKeys | undefined;
export type FiveMultipleChoiceAnswer = FiveMultipleChoiceKeys | undefined;

export type TestType = 'bigFive' | 'myersBrigs' | 'pen' | 'fiveModern' | 'seduction' | 'sixStyles';

export interface Question <A> {
  id: number,
  question: string
  answer: A
}

export interface TrueFalseQuestion extends Question<TrueFalseAnswer> {}

export interface FiveScaleQuestion extends Question<FiveScaleAnswer> {}

export interface TwoMultipleChoiceQuestion extends Question<TwoMultipleChoiceAnswer> {
  responses: TwoMultipleChoiceResponses,
}

export interface FourMultipleChoiceQuestion extends Question<FourMultipleChoiceAnswer> {
  responses: FourMultipleChoiceResponses,
}

export interface FiveMultipleChoiceQuestion extends Question<FiveMultipleChoiceAnswer> {
  responses: FiveMultipleChoiceResponses,
}

export interface SixStylesOfLovingResult {
  eros: number,
  ludus: number,
  storage: number,
  pragma: number,
  mania: number,
  agape: number
}

export interface SeductionArchetypesResult {
  A: number,
  B: number,
  C: number,
  D: number
}

export interface FiveModernRelationshipsResult {
  A: number,
  B: number,
  C: number,
  D: number,
  E: number
}

export interface PenTestResult {
  psychoticism: number,
  extroversion: number,
  neuroticism: number
}

export interface MyersBrigsResult {
  energy: {
    extroversion: number,
    introversion: number
  },
  information: {
    sensing: number,
    intuition: number
  },
  decisions: {
    thinking: number,
    feeling: number
  },
  lifestyle: {
    judging: number,
    perceiving: number
  }
}

export interface BigFiveResult {
  openness: number,
  conscientiousness: number,
  extroversion: number,
  agreeableness: number,
  neuroticism: number
}

export interface ScoreEvaluatorService<R> {
  evaluate(): R;
}

export type TestChoices = {
  bigFive: boolean,
  myersBrigs: boolean,
  pen: boolean,
  fiveModern: boolean,
  seduction: boolean,
  sixStyles: boolean
};

export type TestTypeKeys = {
  bigFive: TestType,
  myersBrigs: TestType,
  pen: TestType,
  fiveModern: TestType,
  seduction: TestType,
  sixStyles: TestType
};


