import {Component, computed, input} from '@angular/core';
import {FourMultipleChoiceKeys, FourMultipleChoiceQuestion} from '../../../../types/test.types';

@Component({
  selector: 'app-four-multiple-choice-question-elm',
  imports: [],
  templateUrl: './four-multiple-choice-question-elm.html',
  styleUrl: './four-multiple-choice-question-elm.css',
})
export class FourMultipleChoiceQuestionElm {
  question = input.required<FourMultipleChoiceQuestion>();
  responseKeys = computed(() => {
    const q = this.question();
    const keys = Object.keys(q.responses) as Array<FourMultipleChoiceKeys>;
    return keys.sort();
  });


}
