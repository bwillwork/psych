import {Component, computed, inject, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {
  AllQuestionTypes,
  FiveMultipleChoiceQuestion,
  FiveScaleQuestion,
  FourMultipleChoiceQuestion,
  TrueFalseQuestion,
  TwoMultipleChoiceQuestion
} from '../../types/test.types';
import {Store} from '@ngrx/store';
import {
  selectAllQuestionCount,
  selectAnsweredQuestionCount,
  selectHasStartedTest,
  selectRandomUnansweredQuestion,
  selectTestChoices
} from '../../data/selectors/test.selectors';
import {toObservable} from '@angular/core/rxjs-interop';
import {TrueFalseQuestionElm} from '../../components/forms/questions/true-false-question-elm/true-false-question-elm';
import {
  TwoMultipleChoiceQuestionElm
} from '../../components/forms/questions/two-multiple-choice-question-elm/two-multiple-choice-question-elm';
import {FiveScaleQuestionElm} from '../../components/forms/questions/five-scale-question-elm/five-scale-question-elm';
import {
  FourMultipleChoiceQuestionElm
} from '../../components/forms/questions/four-multiple-choice-question-elm/four-multiple-choice-question-elm';
import {
  FiveMultipleChoiceQuestionElm
} from '../../components/forms/questions/five-multiple-choice-question-elm/five-multiple-choice-question-elm';


@Component({
  selector: 'app-test-page',
  imports: [
    TrueFalseQuestionElm,
    TwoMultipleChoiceQuestionElm,
    FiveScaleQuestionElm,
    FourMultipleChoiceQuestionElm,
    FiveMultipleChoiceQuestionElm
  ],
  templateUrl: './test-page.html',
  styleUrl: './test-page.css',
})
class TestPage implements OnDestroy {



  private readonly store = inject(Store);
  private router = inject(Router);
  private choices = this.store.selectSignal(selectTestChoices);
  private hasStartedTest = this.store.selectSignal(selectHasStartedTest);
  private subs: Array<Subscription> = [];

  currentQuestion = this.store.selectSignal(selectRandomUnansweredQuestion);
  currentTestType = computed(() => {
    return this.currentQuestion().id.test;
  });
  totalQuestionCount = this.store.selectSignal(selectAllQuestionCount);
  answeredQuestionCount = this.store.selectSignal(selectAnsweredQuestionCount);
  percentageAnswered = computed(() => {
    return Math.floor(this.answeredQuestionCount() / this.totalQuestionCount());
  });

  constructor() {
    this.subs.push(toObservable(this.currentQuestion).subscribe((question) => {

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

  castToTrueFalseQuestion(question: AllQuestionTypes): TrueFalseQuestion {
    return question as TrueFalseQuestion;
  }

  castToFiveScaleQuestion(question: AllQuestionTypes): FiveScaleQuestion {
    return question as FiveScaleQuestion;
  }

  castToTwoMultipleChoiceQuestion(question: AllQuestionTypes): TwoMultipleChoiceQuestion {
    return question as TwoMultipleChoiceQuestion;
  }

  castToFourMultipleChoiceQuestion(question: AllQuestionTypes): FourMultipleChoiceQuestion {
    return question as FourMultipleChoiceQuestion;
  }

  castToFiveMultipleChoiceQuestion(question: AllQuestionTypes): FiveMultipleChoiceQuestion {
    return question as FiveMultipleChoiceQuestion;
  }

}

export default TestPage
