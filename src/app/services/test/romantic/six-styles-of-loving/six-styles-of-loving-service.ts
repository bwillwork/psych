import {Injectable, signal, WritableSignal} from '@angular/core';
import {
  FiveScaleAnswer,
  FiveScaleQuestion,
  ScoreEvaluatorService,
  SixStylesOfLovingResult
} from '../../../../types/test.types';
import {initFiveScaleQuestion} from '../../../../util/question.util';
import {AbstractQuestionService} from '../../abstract-question-service';

@Injectable({
  providedIn: `root`,
})
export class SixStylesOfLovingService extends AbstractQuestionService<FiveScaleQuestion, FiveScaleAnswer> implements ScoreEvaluatorService< SixStylesOfLovingResult>{

  private questions: WritableSignal<Array<FiveScaleQuestion>> = signal([
    initFiveScaleQuestion(1,`My partner and I had the right physical chemistry right from the start.`),
    initFiveScaleQuestion(2,`I try to keep my partner a little uncertain about my commitment to them.`),
    initFiveScaleQuestion(3,`It is hard to say exactly where friendship ends and love begins; for me, they melt into each other.`),
    initFiveScaleQuestion(4,`An important consideration in choosing a partner is whether they will be a good fit for my family and future goals.`),
    initFiveScaleQuestion(5,`When things aren't right between my partner and me, my stomach gets upset or I can't sleep.`),
    initFiveScaleQuestion(6,`I would rather suffer myself than let my partner suffer.`),
    initFiveScaleQuestion(7,`I feel that my partner and I were meant for each other.`),
    initFiveScaleQuestion(8,`I have sometimes had to keep two or more lovers moving along at the same time without them knowing.`),
    initFiveScaleQuestion(9,`Our love is the best kind because it grew out of a long, deep friendship.`),
    initFiveScaleQuestion(10,`I carefully plan my life and relationship milestones before I choose a partner.`),
    initFiveScaleQuestion(11,`If my partner ignores me for a while, I sometimes do stupid things to get their attention back.`),
    initFiveScaleQuestion(12,`I am usually willing to sacrifice my own wishes to let my partner achieve theirs.`),
    initFiveScaleQuestion(13,`Intense physical attraction and a visual "spark" are absolutely essential to me.`),
    initFiveScaleQuestion(14,`I enjoy playing the "game" of romance and love keeping things lighthearted and uncommitted.`),
    initFiveScaleQuestion(15,`I expect to always stay friends with the person I love, even if the romance fades.`),
    initFiveScaleQuestion(16,`I look at a partner’s career prospects and financial stability before getting deeply attached.`),
    initFiveScaleQuestion(17,`Since I fell in love, I have trouble concentrating on anything else; it consumes me.`),
    initFiveScaleQuestion(18,`Whatever I own belongs to my partner if they need it.`),
  ]);

  public override getQuestions(): FiveScaleQuestion[] {
    return [...this.questions()];
  }

  public override setQuestions(questions: FiveScaleQuestion[]): void {
    this.questions.update(() => questions);
  }

  evaluate(): SixStylesOfLovingResult {
    return {
      agape: this.getCategoryScore(this.questions(),[1,7,13]),
      eros: this.getCategoryScore(this.questions(),[2,8,14]),
      ludus: this.getCategoryScore(this.questions(),[3,9,15]),
      mania: this.getCategoryScore(this.questions(),[4,10,16]),
      pragma: this.getCategoryScore(this.questions(),[5,11,17]),
      storage: this.getCategoryScore(this.questions(),[6,12,18]),
    };
  }

  private getCategoryScore(questions: Array<FiveScaleQuestion>,questionIds: Array<number>): number {
    const filterFunc = (q:FiveScaleQuestion) => (q.id in questionIds);
    const addUpFunc = (agg: number,val: FiveScaleQuestion) => (agg + (val.answer ?? 0))
    return questions.filter(filterFunc).reduce(addUpFunc,0);
  }

}
