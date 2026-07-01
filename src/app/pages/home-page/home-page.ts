import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {TestChoices} from '../../types/test.types';
import {Store} from '@ngrx/store';
import {selectHasStartedTest} from '../../data/selectors/test.selectors';
import {choose, reset} from '../../data/actions/testChoice.actions';

import * as bigFiveActions from '../../data/actions/personality/bigFive.actions';
import * as myersBrigsActions from '../../data/actions/personality/myersBrigs.actions';
import * as penActions from '../../data/actions/personality/pen.actions';

import * as fiveModernRelActions from '../../data/actions/romantic/fiveModernRel.actions';
import * as seductionActions from '../../data/actions/romantic/seduction.actions';
import * as sixStylesActions from '../../data/actions/romantic/sixStyles.actions';

@Component({
  selector: 'app-home-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  private fb: FormBuilder = inject(FormBuilder);
  private readonly store = inject(Store);
  private router = inject(Router);

  hasStartedTest = this.store.selectSignal(selectHasStartedTest);//this.testChoiceService.hasStartedTest();

  form = this.fb.group({
    // Personality Tests
    bigFive: [false],
    myersBrigs: [false],
    pen: [false],

    // Romance Tests
    fiveModern: [false],
    seduction: [false],
    sixStyles: [false],
  });

  yes() {
    this.router.navigate(['/test']);
  }

  no() {
    //this.testChoiceService.resetTestChoices();
    this.store.dispatch(bigFiveActions.resetQuestions());
    this.store.dispatch(myersBrigsActions.resetQuestions());
    this.store.dispatch(penActions.resetQuestions());

    this.store.dispatch(fiveModernRelActions.resetQuestions());
    this.store.dispatch(seductionActions.resetQuestions());
    this.store.dispatch(sixStylesActions.resetQuestions());

    this.store.dispatch(reset());
  }

  onSubmit() {
    console.log(this.form.value);
    //this.testChoiceService.chooseTests(this.form.value as TestChoices);
    const choices = this.form.value as TestChoices
    this.store.dispatch(choose({choices}))
    this.router.navigate(['/test']);
  }
}
