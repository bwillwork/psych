import {Injectable, signal, WritableSignal} from '@angular/core';
import {
  FourMultipleChoiceAnswer,
  FourMultipleChoiceQuestion,
  QuestionScoreService,
  SeductionArchetypes
} from '../../../../types/test.types';
import {initFourMultipleChoiceQuestion} from '../../../../util/question.util';

/*
initFourMultipleChoiceQuestion(1,``, {
      A: '',
      B: '',
      C: '',
      D: ''
    })
 */


@Injectable({
  providedIn: 'root',
})
export class SeductionArchetypesService implements QuestionScoreService<FourMultipleChoiceQuestion,FourMultipleChoiceAnswer,SeductionArchetypes>{
  private questions: WritableSignal<Array<FourMultipleChoiceQuestion>> = signal([
    initFourMultipleChoiceQuestion(1,`When you first start dating someone, what is your primary goal?`, {
      A: 'To create an undeniable, electric spark and a deep physical/emotional attraction.',
      B: 'To make them feel safe, cared for, and deeply supported by me.',
      C: 'To see if they match my lifestyle, respect my independence, and can keep up with me.',
      D: 'To observe them quietly and see if they are deep enough to earn my trust.'
    }),

  ]);

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
      A: 0,
      B: 0,
      C: 0,
      D: 0
    };
  }

  canSeeResult(): boolean {
      throw new Error("Method not implemented.");
  }
}
