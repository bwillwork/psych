import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test-page',
  imports: [],
  templateUrl: './test-page.html',
  styleUrl: './test-page.css',
})
export class TestPage {

  private router = inject(Router);

  seeResults() {
    this.router.navigate(["/results"]);
  }

}
