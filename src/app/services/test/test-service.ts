import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {
  AllQuestionTypes,
  Question,
  QuestionId,
  TestChoices,
  TestQuestionMap, TestState,
  TestType,
  TestTypeKeys
} from '../../types/test.types';
import {
  initBigFiveQuestions,
  initFiveModernQuestions,
  initMyersBrigsQuestions,
  initPenQuestions,
  initSeductionQuestions,
  initSixStylesQuestions
} from '../../util/question.util';
import {Observable} from 'rxjs';
import {toObservable} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class TestService {

  private testKeys: TestTypeKeys = {
    bigFive: "bigFive",
    fiveModern: "fiveModern",
    myersBrigs: "myersBrigs",
    pen: "pen",
    seduction: "seduction",
    sixStyles: "sixStyles"
  };

  // All Questions
  private questionMap: WritableSignal<TestQuestionMap> = signal({
    bigFive: initBigFiveQuestions(),
    myersBrigs: initMyersBrigsQuestions(),
    pen: initPenQuestions(),
    fiveModern: initFiveModernQuestions(),
    seduction: initSeductionQuestions(),
    sixStyles: initSixStylesQuestions()
  });

  private questionList = computed(() => {
    const map = this.questionMap();
    return [
      ...map.bigFive,
      ...map.myersBrigs,
      ...map.pen,

      ...map.fiveModern,
      ...map.seduction,
      ...map.sixStyles,
    ];
  });

  // Specific Test Questions
  private test: WritableSignal<Array<AllQuestionTypes>> = signal([]);
  private currentQuestion: Signal<AllQuestionTypes | undefined> = computed(() => {
    return this.test().find(q => (q.answer === undefined));
  });
  private noMoreQuestions: Signal<boolean> = computed(() => this.currentQuestion() === undefined);
  private testState: Signal<TestState> = computed(() => {
    return {
      total: this.test().length,
      answered: this.test().filter(q => (q.answer !== undefined)).length,
      currentQuestion: this.currentQuestion()
    };
  });

  public resetTest() {
    this.clearQuestionAnswers();
    this.test.update(() => ([]));
  }

  public initTest(testChoices: TestChoices) {
    const initialized = this.test().length !== 0;
    if(!initialized) {
      const testTypes = this.getTestTypeList(testChoices);
      this.clearQuestionAnswers();
      const map = this.questionMap();
      this.test.update(() => {
        const result: Array<AllQuestionTypes> = [];
        for(const type of testTypes) {
          result.concat(map[type as TestType]);
        }
        return this.shuffle(result);
      });
    }
  }

  public observeTestState(): Observable<TestState> {
    return toObservable(this.testState);
  }

  public answerCurrentQuestion<Q extends Question<A>,A>(id: QuestionId,answer: A) {
    const test = [...this.test()];
    const index = test.findIndex(q => (q.id.num === id.num && q.id.test === id.test));
    if(index !== -1) {
      (test[index] as Q).answer = answer;
      this.test.update(() => test);
    }
  }

  public getNextTestQuestion(testChoices: TestChoices): AllQuestionTypes | undefined {
    const testTypes = this.getTestTypeList(testChoices);
    const unansweredQuestions = this.getUnansweredQuestions()
      .filter(q => (q.id.test in testTypes));
    if(unansweredQuestions.length > 0) {
      const shuffled = this.shuffle(unansweredQuestions);
      return shuffled[0];// Grab off the top
    }
    return;
  }

  public getTestQuestionCount(testChoices: TestChoices): number {
    const testTypes = this.getTestTypeList(testChoices);
    return this.questionList().filter(q => (q.id.test in testTypes)).length;
  }

  public getUnansweredTestQuestionCount(testChoices: TestChoices): number {
    const testTypes = this.getTestTypeList(testChoices);
    return this.getUnansweredQuestions().filter(q => (q.id.test in testTypes)).length;
  }

  public getUnansweredQuestions() {
    return this.questionList()
      .filter(q => (q.answer === undefined));
  }

  public getAnsweredQuestions() {
    return this.questionList()
      .filter(q => (q.answer !== undefined));
  }

  public canSeeResults(testChoices: TestChoices): boolean {
    const unansweredQuestions = this.getUnansweredTestQuestionCount(testChoices);
    return unansweredQuestions === 0;
  }

  public answerQuestion<Q extends Question<A>,A>(question: Q,answer: A): boolean {
    const map = {...this.questionMap()};
    const questionId: QuestionId = question.id;
    const index = map[questionId.test].findIndex(q => (q.id.num === questionId.num));
    if(index !== -1) {
      (map[questionId.test][index] as Q).answer = answer;
      this.questionMap.update(() => map);
      return true;
    }
    return false;
  }

  private clearQuestionAnswers() {
    const clearQuestion = (q: AllQuestionTypes) => q.answer = undefined;
    const map = {...this.questionMap()};
    const keys = Object.keys(map);
    for(const key of keys) {
      map[key as TestType].forEach(clearQuestion);
    }
    this.questionMap.update(() => map);
  }

  private shuffle(questions: Array<AllQuestionTypes>): Array<AllQuestionTypes> {
    const result = [...questions];
    let currentIndex = result.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]];
    }
    return result;
  }

  private getTestTypeList(testChoices: TestChoices) {
    const keys = Object.keys(testChoices);
    return Object.values(testChoices)
      .map((c,index) => ((c) ? index : -1))
      .filter(v => v !== -1)
      .map(i => keys[i] as TestType);
  }

}
