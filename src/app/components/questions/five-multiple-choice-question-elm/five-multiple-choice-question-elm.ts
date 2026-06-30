import {Component, computed, inject, input, OnDestroy, OnInit, output} from '@angular/core';
import {
  FiveMultipleChoiceAnswer,
  FiveMultipleChoiceKeys,
  FiveMultipleChoiceQuestion
} from '../../../types/test.types';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Subscription} from 'rxjs';
import {toObservable} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-five-multiple-choice-question-elm',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './five-multiple-choice-question-elm.html',
  styleUrl: './five-multiple-choice-question-elm.css',
})
export class FiveMultipleChoiceQuestionElm implements OnInit, OnDestroy {

  question = input.required<FiveMultipleChoiceQuestion>();
  responseKeys = computed(() => {
    const q = this.question();
    const keys = Object.keys(q.responses) as Array<FiveMultipleChoiceKeys>;
    return keys.sort();
  });

  private fb: FormBuilder = inject(FormBuilder);
  private subs: Array<Subscription> = [];
  form = this.fb.group({
    radio: ['']
  });
  onValueChange = output<FiveMultipleChoiceAnswer>();

  ngOnInit(): void {
    this.subs.push(this.form.valueChanges.subscribe((formData) => {
      console.log('formData: ',formData);
      this.form.controls['radio'].reset(null,{emitEvent: false, onlySelf: true});
      this.onValueChange.emit(formData.radio as FiveMultipleChoiceAnswer);
    }))
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
    this.subs = [];
  }

}
