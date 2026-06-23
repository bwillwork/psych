import {Component, inject, OnDestroy} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {TestChoiceService} from '../../services/test-choice/test-choice-service';
import {TestService} from '../../services/test/test-service';
import {Subscription} from 'rxjs';
import {TestState} from '../../types/test.types';

@Component({
  selector: 'app-test-page',
  imports: [
    RouterOutlet
  ],
  templateUrl: './test-page.html',
  styleUrl: './test-page.css',
})
export class TestPage implements OnDestroy {


  private testChoiceService = inject(TestChoiceService);
  private testService = inject(TestService);
  private router = inject(Router);
  private choices = this.testChoiceService.getTestChoices();
  private hasStartedTest = this.testChoiceService.hasStartedTest();

  private subs: Array<Subscription> = [];


  constructor() {
    this.testService.initTest(this.choices());
    this.subs.push(this.testService.observeTestState().subscribe((testState: TestState) => {

    }));
  }

  seeResults() {
    const canViewResults = false;//this.testService.canViewResults();
    if(canViewResults) this.router.navigate(["/results"]);
  }

  previous() {

  }

  next() {

  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
    this.subs = [];
  }

}
