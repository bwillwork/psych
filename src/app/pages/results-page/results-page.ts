import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-results-page',
  imports: [],
  templateUrl: './results-page.html',
  styleUrl: './results-page.css',
})
export class ResultsPage {

  private readonly store = inject(Store);



}
