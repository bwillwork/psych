import {Injectable} from '@angular/core';
import {QuestionScoreService, TrueFalseQuestion} from '../../../../types/test.types';

@Injectable({
  providedIn: 'root',
})
export class PenService implements QuestionScoreService<TrueFalseQuestion> {
    answerQuestion(index: number): void {
        throw new Error("Method not implemented.");
    }
    getQuestions(): TrueFalseQuestion[] {
        throw new Error("Method not implemented.");
    }
    clearQuestions(): void {
        throw new Error("Method not implemented.");
    }
    canSeeResult(): boolean {
        throw new Error("Method not implemented.");
    }

}
