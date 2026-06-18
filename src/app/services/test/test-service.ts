import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {
  AllQuestionTypes,
  FiveMultipleChoiceQuestion,
  FiveScaleQuestion,
  FourMultipleChoiceQuestion, Question, QuestionId, TestChoices,
  TestQuestionMap, TestType,
  TestTypeKeys,
  TrueFalseQuestion,
  TwoMultipleChoiceQuestion
} from '../../types/test.types';
import {
  initBigFiveQuestions,
  initFiveModernQuestions,
  initMyersBrigsQuestions,
  initPenQuestions,
  initSeductionQuestions,
  initSixStylesQuestions
} from '../../util/question.util';

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

  answerQuestion<Q extends Question<A>,A>(question: Q,answer: A): boolean {
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

  private shuffle(questions: Array<AllQuestionTypes>): Array<AllQuestionTypes> {
    const result = [...questions];
    let currentIndex = result.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [result[currentIndex], result[randomIndex]] = [
        result[randomIndex], result[currentIndex]];
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
