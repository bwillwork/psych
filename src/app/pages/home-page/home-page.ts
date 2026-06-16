import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {TestService} from '../../services/test/test-service';
import {TestChoices} from '../../types/test.types';

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
  private testService = inject(TestService);
  private router = inject(Router);

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

  onSubmit() {
    console.log(this.form.value);
    this.testService.chooseTests(this.form.value as TestChoices);
    this.router.navigate(['/test']);
  }
}
