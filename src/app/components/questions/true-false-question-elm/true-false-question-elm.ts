import {Component, inject, input, OnDestroy, OnInit, output} from '@angular/core';
import {
  FiveMultipleChoiceAnswer,
  TrueFalseAnswer,
  TrueFalseQuestion,
  TwoMultipleChoiceAnswer
} from '../../../types/test.types';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Subscription} from 'rxjs';
import {toObservable} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-true-false-question-elm',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './true-false-question-elm.html',
  styleUrl: './true-false-question-elm.css',
})
export class TrueFalseQuestionElm implements OnInit, OnDestroy {
  question = input.required<TrueFalseQuestion>();

  private fb: FormBuilder = inject(FormBuilder);
  private subs: Array<Subscription> = [];

  form = this.fb.group({
    radio: ['']
  });
  onValueChange = output<TrueFalseAnswer>();

  ngOnInit(): void {
    this.subs.push(this.form.valueChanges.subscribe((formData) => {
      console.log('formData: ',formData);
      this.form.controls['radio'].reset(null,{emitEvent: false, onlySelf: true});
      this.onValueChange.emit(formData.radio as TrueFalseAnswer);
    }))
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
    this.subs = [];
  }

}
