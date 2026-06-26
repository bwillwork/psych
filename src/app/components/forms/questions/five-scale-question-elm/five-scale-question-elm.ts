import {Component, computed, inject, input, OnDestroy, OnInit, output} from '@angular/core';
import {
  FiveMultipleChoiceAnswer,
  FiveScaleAnswer,
  FiveScaleChoice,
  FiveScaleQuestion
} from '../../../../types/test.types';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Subscription} from 'rxjs';
import {toObservable} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-five-scale-question-elm',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './five-scale-question-elm.html',
  styleUrl: './five-scale-question-elm.css',
})
export class FiveScaleQuestionElm implements OnInit, OnDestroy {
  question = input.required<FiveScaleQuestion>();

  private fb: FormBuilder = inject(FormBuilder);
  private subs: Array<Subscription> = [];

  form = this.fb.group({
    radio: ['']
  });
  onValueChange = output<FiveScaleAnswer>();

  ngOnInit(): void {
    this.subs.push(this.form.valueChanges.subscribe((formData) => {
      console.log('formData: ',formData);
      this.form.controls['radio'].reset(null,{emitEvent: false, onlySelf: true});
      this.onValueChange.emit(formData.radio as FiveScaleAnswer);
    }))
  }

  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
    this.subs = [];
  }

}
