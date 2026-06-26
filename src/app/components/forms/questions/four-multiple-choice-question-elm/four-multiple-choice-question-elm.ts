import {Component, computed, inject, input, OnDestroy, OnInit, output} from '@angular/core';
import {
  FiveMultipleChoiceAnswer, FourMultipleChoiceAnswer,
  FourMultipleChoiceKeys,
  FourMultipleChoiceQuestion
} from '../../../../types/test.types';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-four-multiple-choice-question-elm',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './four-multiple-choice-question-elm.html',
  styleUrl: './four-multiple-choice-question-elm.css',
})
export class FourMultipleChoiceQuestionElm implements OnInit, OnDestroy {
  question = input.required<FourMultipleChoiceQuestion>();
  responseKeys = computed(() => {
    const q = this.question();
    const keys = Object.keys(q.responses) as Array<FourMultipleChoiceKeys>;
    return keys.sort();
  });

  private fb: FormBuilder = inject(FormBuilder);
  private subs: Array<Subscription> = [];

  form = this.fb.group({
    radio: ['']
  });
  onValueChange = output<FourMultipleChoiceAnswer>();

  ngOnInit(): void {
    this.subs.push(this.form.valueChanges.subscribe((formData) => {
      console.log('formData: ',formData);
      this.onValueChange.emit(formData.radio as FourMultipleChoiceAnswer);
    }))
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
    this.subs = [];
  }

}
