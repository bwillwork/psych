import {Component, computed, input} from '@angular/core';
import {FiveScaleChoice, FiveScaleQuestion} from '../../../../types/test.types';

@Component({
  selector: 'app-five-scale-question-elm',
  imports: [],
  templateUrl: './five-scale-question-elm.html',
  styleUrl: './five-scale-question-elm.css',
})
export class FiveScaleQuestionElm {
  question = input.required<FiveScaleQuestion>();

}
