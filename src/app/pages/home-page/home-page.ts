import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {TestChoices} from '../../types/test.types';
import {TestChoiceService} from '../../services/test-choice/test-choice-service';

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
  private testChoiceService = inject(TestChoiceService);
  private router = inject(Router);

  hasStartedTest = this.testChoiceService.hasStartedTest();

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
    this.testChoiceService.resetTestChoices();
  }

  onSubmit() {
    console.log(this.form.value);
    this.testChoiceService.chooseTests(this.form.value as TestChoices);
    this.router.navigate(['/test']);
  }
}
