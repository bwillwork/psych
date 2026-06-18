import {Component, inject, OnDestroy} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {TestChoiceService} from '../../services/test-choice/test-choice-service';
import {TestService} from '../../services/test/test-service';
import {Subscription} from 'rxjs';

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

  private subs: Array<Subscription> = [];


  constructor() {

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
