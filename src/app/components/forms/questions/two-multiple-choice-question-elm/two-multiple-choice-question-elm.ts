import {Component, computed, inject, input, OnDestroy, OnInit, output} from '@angular/core';
import {
  FourMultipleChoiceAnswer,
  TwoMultipleChoiceAnswer,
  TwoMultipleChoiceKeys,
  TwoMultipleChoiceQuestion
} from '../../../../types/test.types';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-two-multiple-choice-question-elm',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './two-multiple-choice-question-elm.html',
  styleUrl: './two-multiple-choice-question-elm.css',
})
export class TwoMultipleChoiceQuestionElm implements OnInit, OnDestroy {

  question = input.required<TwoMultipleChoiceQuestion>();
  responseKeys = computed(() => {
    const q = this.question();
    const keys = Object.keys(q.responses) as Array<TwoMultipleChoiceKeys>;
    return keys.sort();
  });

  private fb: FormBuilder = inject(FormBuilder);
  private subs: Array<Subscription> = [];

  form = this.fb.group({
    radio: ['']
  });
  onValueChange = output<TwoMultipleChoiceAnswer>();

  ngOnInit(): void {
    this.subs.push(this.form.valueChanges.subscribe((formData) => {
      console.log('formData: ',formData);
    }))
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
    this.subs = [];
  }

}
