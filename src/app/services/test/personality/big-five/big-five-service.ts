import {Injectable} from '@angular/core';
import {FiveScaleQuestion, QuestionScoreService} from '../../../../types/test.types';

@Injectable({
  providedIn: 'root',
})
export class BigFiveService implements QuestionScoreService<FiveScaleQuestion> {
    answerQuestion(index: number): void {
        throw new Error("Method not implemented.");
    }
    getQuestions(): FiveScaleQuestion[] {
        throw new Error("Method not implemented.");
    }
    clearQuestions(): void {
        throw new Error("Method not implemented.");
    }
    canSeeResult(): boolean {
        throw new Error("Method not implemented.");
    }
}
