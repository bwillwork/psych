import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {
  AllQuestionTypes,
  FiveMultipleChoiceQuestion,
  FiveScaleQuestion,
  FourMultipleChoiceQuestion, TestChoices,
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

  private bigFiveQuestions: WritableSignal<Array<FiveScaleQuestion>> = signal(initBigFiveQuestions());
  private myersBrigsQuestions: WritableSignal<Array<TwoMultipleChoiceQuestion>> = signal(initMyersBrigsQuestions());
  private penQuestions: WritableSignal<Array<TrueFalseQuestion>> = signal(initPenQuestions());

  private fiveModernRelQuestions:  WritableSignal<Array<FiveMultipleChoiceQuestion>> = signal(initFiveModernQuestions());
  private seductionQuestions: WritableSignal<Array<FourMultipleChoiceQuestion>> = signal(initSeductionQuestions());
  private sixStylesQuestions: WritableSignal<Array<FiveScaleQuestion>> = signal(initSixStylesQuestions());

  private questionMap: Signal<TestQuestionMap> = computed(() => {
    return {
      bigFive: this.bigFiveQuestions(),
      myersBrigs: this.myersBrigsQuestions(),
      pen: this.penQuestions(),
      fiveModern: this.fiveModernRelQuestions(),
      seduction: this.seductionQuestions(),
      sixStyles: this.sixStylesQuestions()
    };
  });

  private questionList = computed(() => {
    return [
      ...this.bigFiveQuestions(),
      ...this.myersBrigsQuestions(),
      ...this.penQuestions(),

      ...this.fiveModernRelQuestions(),
      ...this.seductionQuestions(),
      ...this.sixStylesQuestions(),
    ];
  });

  public getNextQuestion(testChoices: TestChoices): AllQuestionTypes | undefined {
    const testTypes = this.getTestTypeList(testChoices);
    const unansweredQuestions = this.getUnansweredQuestions()
      .filter(q => (q.id.test in testTypes));
    if(unansweredQuestions.length > 0) {
      const shuffled = this.shuffle(unansweredQuestions);
      return shuffled[0];// Grab off the top
    }
    return;
  }

  public getUnansweredQuestions() {
    return this.questionList()
      .filter(q => (q.answer === undefined));
  }

  public getAnsweredQuestions() {
    return this.questionList()
      .filter(q => (q.answer !== undefined));
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
