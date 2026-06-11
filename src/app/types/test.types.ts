export type FiveScaleChoice = 1 | 2 | 3 | 4 | 5;

export type TwoMultipleChoiceKeys = 'A' | 'B';
export type FourMultipleChoiceKeys = TwoMultipleChoiceKeys | 'C' | 'D';
export type FiveMultipleChoiceKeys = FourMultipleChoiceKeys | 'E';

export interface Question {
  question: string
}
export interface TrueFalseQuestion extends Question {
  response: boolean | undefined
}
export interface FiveScaleQuestion extends Question {
  response: FiveScaleChoice| undefined
}
export interface TwoMultipleChoiceQuestion extends Question {
  responses: {[key in TwoMultipleChoiceKeys]: string},
  response: TwoMultipleChoiceKeys| undefined
}
export interface FourMultipleChoiceQuestion extends Question {
  responses: {[key in FourMultipleChoiceKeys]: string},
  response: FourMultipleChoiceKeys| undefined
}
export interface FiveMultipleChoiceQuestion extends Question {
  responses: {[key in FiveMultipleChoiceKeys]: string},
  response: FiveMultipleChoiceKeys| undefined
}


export interface QuestionScoreService<Q> {
  answerQuestion(index: number): void;
  getQuestions(): Array<Q>;
  clearQuestions(): void;
  canSeeResult(): boolean;
}
