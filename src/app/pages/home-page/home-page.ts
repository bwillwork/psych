import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {TestChoices} from '../../types/test.types';
import {Store} from '@ngrx/store';
import {selectHasStartedTest} from '../../data/selectors/test.selectors';
import {choose, reset} from '../../data/actions/testChoice.actions';

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
