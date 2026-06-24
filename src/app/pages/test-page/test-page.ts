import {Component, inject, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {TestService} from '../../services/test/test-service';
import {Subscription} from 'rxjs';
import {TestState} from '../../types/test.types';
import {Store} from '@ngrx/store';
import {selectHasStartedTest, selectTestChoices} from '../../data/selectors/test.selectors';

@Component({
  selector: 'app-test-page',
  imports: [],
  templateUrl: './test-page.html',
  styleUrl: './test-page.css',
})
export class TestPage implements OnDestroy {



  private readonly store = inject(Store);
  private testService = inject(TestService);
  private router = inject(Router);
  private choices = this.store.selectSignal(selectTestChoices);
  private hasStartedTest = this.store.selectSignal(selectHasStartedTest);


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
