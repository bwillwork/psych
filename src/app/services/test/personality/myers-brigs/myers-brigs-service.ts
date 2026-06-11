import {Injectable} from '@angular/core';
import {QuestionScoreService, TwoMultipleChoiceQuestion} from '../../../../types/test.types';

@Injectable({
  providedIn: 'root',
})
export class MyersBrigsService implements QuestionScoreService<TwoMultipleChoiceQuestion>{
    getQuestion(index: number): void {
        throw new Error("Method not implemented.");
    }
    getQuestions(): TwoMultipleChoiceQuestion[] {
        throw new Error("Method not implemented.");
    }
    clearQuestions(): void {
        throw new Error("Method not implemented.");
    }
    canSeeResult(): boolean {
        throw new Error("Method not implemented.");
    }
}
