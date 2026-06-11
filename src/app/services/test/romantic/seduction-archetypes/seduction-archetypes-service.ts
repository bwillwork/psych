import {Injectable} from '@angular/core';
import {
  FourMultipleChoiceAnswer,
  FourMultipleChoiceQuestion,
  QuestionScoreService,
  SeductionArchetypes
} from '../../../../types/test.types';

@Injectable({
  providedIn: 'root',
})
export class SeductionArchetypesService implements QuestionScoreService<FourMultipleChoiceQuestion,FourMultipleChoiceAnswer,SeductionArchetypes>{
  answerQuestion(id: number, answer: FourMultipleChoiceAnswer): void {
      throw new Error("Method not implemented.");
  }
  getQuestion(id: number): FourMultipleChoiceQuestion | undefined {
      throw new Error("Method not implemented.");
  }

  getQuestions(): FourMultipleChoiceQuestion[] {
      throw new Error("Method not implemented.");
  }
  clearQuestions(): void {
      throw new Error("Method not implemented.");
  }
  evaluate(): SeductionArchetypes {
    return {
      A: 0, B: 0, C: 0, D: 0

    };
  }
  canSeeResult(): boolean {
      throw new Error("Method not implemented.");
  }
}
