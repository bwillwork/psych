import {Component, computed, input} from '@angular/core';
import {TwoMultipleChoiceKeys, TwoMultipleChoiceQuestion} from '../../../../types/test.types';

@Component({
  selector: 'app-two-multiple-choice-question-elm',
  imports: [],
  templateUrl: './two-multiple-choice-question-elm.html',
  styleUrl: './two-multiple-choice-question-elm.css',
})
export class TwoMultipleChoiceQuestionElm {

  question = input.required<TwoMultipleChoiceQuestion>();
  responseKeys = computed(() => {
    const q = this.question();
    const keys = Object.keys(q.responses) as Array<TwoMultipleChoiceKeys>;
    return keys.sort();
  });

}
