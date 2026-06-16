import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

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

  }
}
