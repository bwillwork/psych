export type FiveScaleChoice = 1 | 2 | 3 | 4 | 5;

export type TwoMultipleChoiceKeys = 'A' | 'B';
export type FourMultipleChoiceKeys = TwoMultipleChoiceKeys | 'C' | 'D';
export type FiveMultipleChoiceKeys = FourMultipleChoiceKeys | 'E';

export type TrueFalseAnswer = boolean | undefined;
export type FiveScaleAnswer = FiveScaleChoice | undefined;
export type TwoMultipleChoiceAnswer = TwoMultipleChoiceKeys | undefined;
export type FourMultipleChoiceAnswer = FourMultipleChoiceKeys | undefined;
export type FiveMultipleChoiceAnswer = FiveMultipleChoiceKeys | undefined;

export interface Question {
  id: number,
  question: string
}
export interface TrueFalseQuestion extends Question {
  response: TrueFalseAnswer
}
export interface FiveScaleQuestion extends Question {
  response: FiveScaleAnswer
}
export interface TwoMultipleChoiceQuestion extends Question {
  responses: {[key in TwoMultipleChoiceKeys]: string},
  response: TwoMultipleChoiceAnswer
}
export interface FourMultipleChoiceQuestion extends Question {
  responses: {[key in FourMultipleChoiceKeys]: string},
  response: FourMultipleChoiceAnswer
}
export interface FiveMultipleChoiceQuestion extends Question {
  responses: {[key in FiveMultipleChoiceKeys]: string},
  response: FiveMultipleChoiceAnswer
}

export interface SixStylesOfLovingResults {
  eros: number,
  ludus: number,
  storage: number,
  pragma: number,
  mania: number,
  agape: number
}

export interface SeductionArchetypes {
  A: number,
  B: number,
  C: number,
  D: number
}

export interface QuestionScoreService<Q,A,R> {
  getQuestion(id: number): Q | undefined;
  getQuestions(): Array<Q>;
  clearQuestions(): void;
  answerQuestion(id: number,answer: A): void;
  evaluate(): R;
  canSeeResult(): boolean;
}
