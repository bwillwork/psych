import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {TestService} from '../../services/test/test-service';

@Component({
  selector: 'app-test-page',
  imports: [],
  templateUrl: './test-page.html',
  styleUrl: './test-page.css',
})
export class TestPage {




  private testService = inject(TestService);
  private router = inject(Router);
  private choices = this.testService.getTestChoices();



  constructor() {



  }

  seeResults() {
    const canViewResults = this.testService.canViewResults();
    if(canViewResults) this.router.navigate(["/results"]);
  }

}
