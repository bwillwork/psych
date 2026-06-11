import {Injectable} from '@angular/core';
import {FiveMultipleChoiceQuestion, QuestionScoreService} from '../../../../types/test.types';

@Injectable({
  providedIn: 'root',
})
export class FiveModernRelationshipsService implements QuestionScoreService<FiveMultipleChoiceQuestion>{
    getQuestion(index: number): void {
        throw new Error("Method not implemented.");
    }
    getQuestions(): FiveMultipleChoiceQuestion[] {
        throw new Error("Method not implemented.");
    }
    clearQuestions(): void {
        throw new Error("Method not implemented.");
    }
    canSeeResult(): boolean {
        throw new Error("Method not implemented.");
    }
}
