import {Component, computed, inject, OnDestroy, signal} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {
  AllQuestionTypes, FiveMultipleChoiceAnswer,
  FiveMultipleChoiceQuestion, FiveScaleAnswer,
  FiveScaleQuestion, FourMultipleChoiceAnswer,
  FourMultipleChoiceQuestion, TrueFalseAnswer,
  TrueFalseQuestion, TwoMultipleChoiceAnswer,
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
import * as bigFiveActions from '../../data/actions/personality/bigFive.actions';
import * as myersBrigsActions from '../../data/actions/personality/myersBrigs.actions';
import * as penActions from '../../data/actions/personality/pen.actions';

import * as fiveModernRelActions from '../../data/actions/romantic/fiveModernRel.actions';
import * as seductionActions from '../../data/actions/romantic/seduction.actions';
import * as sixStylesActions from '../../data/actions/romantic/sixStyles.actions';

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
    if(!this.hasStartedTest()) {
      this.router.navigate([""]);// Go back home if the test hasn't started
    } else {
      this.subs.push(toObservable(this.currentQuestion).subscribe((question) => {
        console.log('new question: ', question);
      }));
    }
  }

  seeResults() {
    const canViewResults = false;
    if(canViewResults) this.router.navigate(["/results"]);
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
    this.subs = [];
  }


  answerTrueFalseQuestion(answer: TrueFalseAnswer) {
    console.log(answer);
    if(answer !== undefined) {
      const id = this.currentQuestion().id;
      this.store.dispatch(penActions.answerQuestion({id,answer}));
    }
  }

  answerFiveScaleQuestion(answer: FiveScaleAnswer) {
    console.log(answer);
    if(answer !== undefined) {
      const id = this.currentQuestion().id;
      const testType = this.currentTestType();
      if(testType === 'bigFive') {
        this.store.dispatch(bigFiveActions.answerQuestion({id,answer}));
      } else {
        this.store.dispatch(sixStylesActions.answerQuestion({id,answer}));
      }
    }
  }

  answerTwoMultipleChoiceQuestion(answer: TwoMultipleChoiceAnswer) {
    console.log(answer);
    if(answer !== undefined) {
      const id = this.currentQuestion().id;
      this.store.dispatch(myersBrigsActions.answerQuestion({id,answer}));
    }
  }

  answerFourMultipleChoiceQuestion(answer: FourMultipleChoiceAnswer) {
    console.log(answer);
    if(answer !== undefined) {
      const id = this.currentQuestion().id;
      this.store.dispatch(seductionActions.answerQuestion({id,answer}));
    }
  }

  answerFiveMultipleChoiceQuestion(answer: FiveMultipleChoiceAnswer) {
    console.log(answer);
    if(answer !== undefined) {
      const id = this.currentQuestion().id;
      this.store.dispatch(fiveModernRelActions.answerQuestion({id,answer}));
    }
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
