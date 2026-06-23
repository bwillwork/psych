import {Component, input} from '@angular/core';
import {TrueFalseQuestion, TwoMultipleChoiceQuestion} from '../../../../types/test.types';

@Component({
  selector: 'app-true-false-question-elm',
  imports: [],
  templateUrl: './true-false-question-elm.html',
  styleUrl: './true-false-question-elm.css',
})
export class TrueFalseQuestionElm {
  question = input.required<TrueFalseQuestion>();

}
