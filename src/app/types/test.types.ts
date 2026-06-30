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

export type QuestionId = {
  num: number,
  test: TestType
};

export interface Question <A> {
  id: QuestionId;
  question: string;
  answeredDate?: Date;
  answer: A | undefined;
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

export type AllQuestionTypes = TrueFalseQuestion | FiveScaleQuestion | TwoMultipleChoiceQuestion | FourMultipleChoiceQuestion | FiveMultipleChoiceQuestion;

// NgRx
export type TestChoices = {
  bigFive: boolean,
  myersBrigs: boolean,
  pen: boolean,
  fiveModern: boolean,
  seduction: boolean,
  sixStyles: boolean
};


export interface AppState {
  bigFive: Array<FiveScaleQuestion>;
  myersBrigs: Array<TwoMultipleChoiceQuestion>;
  pen: Array<TrueFalseQuestion>;

  fiveModern: Array<FiveMultipleChoiceQuestion>,
  seduction: Array<FourMultipleChoiceQuestion>,
  sixStyles: Array<FiveScaleQuestion>

  choices: TestChoices
}
