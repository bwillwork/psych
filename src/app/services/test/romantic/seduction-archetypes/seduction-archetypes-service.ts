import {Injectable} from '@angular/core';
import {FourMultipleChoiceQuestion, QuestionScoreService} from '../../../../types/test.types';

@Injectable({
  providedIn: 'root',
})
export class SeductionArchetypesService implements QuestionScoreService<FourMultipleChoiceQuestion>{
    answerQuestion(index: number): void {
        throw new Error("Method not implemented.");
    }
    getQuestions(): FourMultipleChoiceQuestion[] {
        throw new Error("Method not implemented.");
    }
    clearQuestions(): void {
        throw new Error("Method not implemented.");
    }
    canSeeResult(): boolean {
        throw new Error("Method not implemented.");
    }
}
