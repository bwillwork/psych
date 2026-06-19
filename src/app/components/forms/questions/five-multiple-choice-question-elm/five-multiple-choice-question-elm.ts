import { Component, computed, input } from '@angular/core';
import { FiveMultipleChoiceKeys, FiveMultipleChoiceQuestion } from '../../../../types/test.types';

@Component({
  selector: 'app-five-multiple-choice-question-elm',
  imports: [],
  templateUrl: './five-multiple-choice-question-elm.html',
  styleUrl: './five-multiple-choice-question-elm.css',
})
export class FiveMultipleChoiceQuestionElm {

  question = input.required<FiveMultipleChoiceQuestion>();
  responseKeys = computed(() => {
    const q = this.question();
    const keys = Object.keys(q.responses) as Array<FiveMultipleChoiceKeys>;
    return keys.sort();
  });

}
