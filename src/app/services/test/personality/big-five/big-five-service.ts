import {Injectable, signal, WritableSignal} from '@angular/core';
import {
  BigFiveResult,
  FiveScaleAnswer,
  FiveScaleChoice,
  FiveScaleQuestion,
  QuestionScoreService
} from '../../../../types/test.types';
import {initFiveScaleQuestion} from '../../../../util/question.util';

@Injectable({
  providedIn: 'root',
})
export class BigFiveService implements QuestionScoreService<FiveScaleQuestion, FiveScaleAnswer, BigFiveResult> {

  private questions: WritableSignal<Array<FiveScaleQuestion>> = signal([
    initFiveScaleQuestion(1,`I am fascinated by art, theater, literature, or deep philosophical theories.`),
    initFiveScaleQuestion(2,`I keep my belongings highly organized and always try to show up on time.`),
    initFiveScaleQuestion(3,`I feel energized when I am surrounded by a large, lively group of people.`),
    initFiveScaleQuestion(4,`I tend to sympathize with other people's feelings and enjoy helping them.`),
    initFiveScaleQuestion(5,`I find myself worrying a lot about things that could go wrong.`),
    initFiveScaleQuestion(6,`I prefer sticking to familiar routines rather than trying new, unpredictable things.`),
    initFiveScaleQuestion(7,`I sometimes procrastinate or leave tasks unfinished until the last minute.`),
    initFiveScaleQuestion(8,`I am a quiet person who prefers solitary activities over crowded social gatherings.`),
    initFiveScaleQuestion(9,`I am generally suspicious of other people's motives until they prove they are trustworthy.`),
    initFiveScaleQuestion(10,`I handle high-stress situations calmly and rarely get overwhelmed by anxiety.`),
    initFiveScaleQuestion(11,`I have a vivid imagination and love brainstorming original ideas.`),
    initFiveScaleQuestion(12,`I pride myself on being thorough, dependable, and precise in my work.`),
    initFiveScaleQuestion(13,`I am natural at striking up conversations and making friends with strangers.`),
    initFiveScaleQuestion(14,`I believe most people are basically good-natured, honest, and well-intentioned.`),
    initFiveScaleQuestion(15,`I experience frequent ups and downs in my mood or feel easily irritated.`),
    initFiveScaleQuestion(16,`I find abstract or highly theoretical discussions boring or impractical.`),
    initFiveScaleQuestion(17,`I struggle to stay self-disciplined when a task becomes boring or difficult.`),
    initFiveScaleQuestion(18,`I often keep my thoughts to myself and don't speak up in group meetings.`),
    initFiveScaleQuestion(19,`I can be blunt or overly critical if someone is being illogical or incompetent.`),
    initFiveScaleQuestion(20,`I snap back to normal quickly after experiencing an embarrassing or stressful event.`),
  ]);

  getQuestion(id: number): FiveScaleQuestion | undefined {
    return this.getQuestions().find(q => q.id === id);
  }
  getQuestions(): FiveScaleQuestion[] {
    return [...this.questions()];
  }
  clearQuestions(): void {
    this.questions.update(() => ([]));
  }
  answerQuestion(id: number, answer: FiveScaleAnswer): void {
    const questions = this.getQuestions();
    const index = questions.findIndex(q => q.id === id);
    if(index !== -1) {
      questions[index].response = answer;
      this.questions.update(() => questions);
    }
  }
  evaluate(): BigFiveResult {
    const qs = this.getQuestions();
    return {
      agreeableness: this.calcScore(qs,[1,11],[6,16]),
      conscientiousness: this.calcScore(qs,[2,12],[7,17]),
      extroversion: this.calcScore(qs,[3,13],[8,18]),
      neuroticism: this.calcScore(qs,[4,14],[9,19]),
      openness: this.calcScore(qs,[5,15],[10,20]),
    };
  }
  canSeeResult(): boolean {
    // All questions need an answer
    return this.questions().findIndex(q => q.response === undefined) === -1;
  }

  private calcScore(questions: Array<FiveScaleQuestion>, aQIds: Array<number>, bQIds: Array<number>) {
    return this.calcSubTotalA(questions,aQIds) + this.calcSubTotalB(questions,bQIds);
  }

  private calcSubTotalA(questions: Array<FiveScaleQuestion>, questionIds: Array<number>) {
    let result = 0;
    for(let q of questions.filter((q) => q.id in questionIds)) {
      if(q.response) result += q.response;
    }
    return result;
  }

  private calcSubTotalB(questions: Array<FiveScaleQuestion>, questionIds: Array<number>) {
    let result = 0;
    for(let q of questions.filter((q) => q.id in questionIds)) {
      if(q.response) result += this.reverseScore(q.response);
    }
    return result;
  }

  private reverseScore(score: FiveScaleChoice) {
    return 5 - (score - 1);
  }

}
