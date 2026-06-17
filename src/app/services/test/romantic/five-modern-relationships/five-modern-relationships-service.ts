import {Injectable, signal, WritableSignal} from '@angular/core';
import {
  FiveModernRelationshipsResult,
  FiveMultipleChoiceAnswer,
  FiveMultipleChoiceQuestion, FourMultipleChoiceAnswer, FourMultipleChoiceQuestion,
  ScoreEvaluatorService
} from '../../../../types/test.types';
import {initFiveMultipleChoiceQuestion} from '../../../../util/question.util';
import {AbstractQuestionService} from '../../abstract-question-service';



@Injectable({
  providedIn: 'root',
})
export class FiveModernRelationshipsService extends AbstractQuestionService<FiveMultipleChoiceQuestion,FiveMultipleChoiceAnswer> implements ScoreEvaluatorService<FiveModernRelationshipsResult>{
  private questions:  WritableSignal<Array<FiveMultipleChoiceQuestion>> = signal([
    initFiveMultipleChoiceQuestion(1,`When a conflict or argument arises with your partner, what is your immediate instinct?`, {
      A: `To quickly back down, apologize, or change the subject just to keep the peace.`,
      B: `To withdraw, feel helpless, or wait for them to decide how to handle it because I feel stuck.`,
      C: `To take charge of the conversation, lay out the facts, or set strict boundaries to manage the situation.`,
      D: `To feel deeply hurt, angry, or abandoned, and intensely demand that they see my side.`,
      E: `To suggest a calm timeout if emotions are running too high, then talk it out constructively.`
    }),
    initFiveMultipleChoiceQuestion(2,`How do you usually feel about your partner having a life entirely separate from you?`, {
      A: `I say I’m fine with it, but I secretly worry they will find someone better while they are away.`,
      B: `I am used to being left to fend for myself, so I just emotionally disconnect until they get back.`,
      C: `I prefer to know their schedule, who they are with, and when they will be home so I feel at ease.`,
      D: `I feel highly anxious or resentful when they choose to spend time away from me instead of with me.`,
      E: `I genuinely encourage it; we both need our individual hobbies and friendships to stay healthy.`
    }),
    initFiveMultipleChoiceQuestion(3,`Which statement best describes how you handle your own emotional needs?`, {
      A: `I put my needs completely on the back burner to make sure my partner is happy first.`,
      B: `I rarely expect my partner to meet my needs; I’ve learned it's safer not to hope for much.`,
      C: `I manage my own needs through routine and self-reliance; I don't like relying on others.`,
      D: `I expect my partner to intuitively know what I need, and I get deeply disappointed when they don't.`,
      E: `I feel comfortable stating my needs clearly and directly without feeling guilty or demanding.`
    }),
    initFiveMultipleChoiceQuestion(4,`When a relationship is in the early "honeymoon phase," you typically:`, {
      A: `Do everything you can to mold yourself into their perfect ideal partner.`,
      B: `Feel anxious or waiting for the other shoe to drop, expecting them to eventually mistreat you.`,
      C: `Assess them logically to make sure they fit smoothly into your structured lifestyle.`,
      D: `Fall incredibly fast and hard, putting them on a pedestal as your absolute soulmate.`,
      E: `Enjoy the connection while keeping a grounded perspective on real-world compatibility.`
    }),
    initFiveMultipleChoiceQuestion(5,`What is your deepest, most subconscious fear in a romance?`, {
      A: `Rejection or having my partner be upset with me.`,
      B: `Emotional chaos, pain, or being completely overpowered/trapped.`,
      C: `Vulnerability, losing control, or being caught off guard by a betrayal.`,
      D: `Abandonment, being forgotten, or discovering the "spark" was an illusion.`,
      E: `Losing a meaningful connection, but I know I can ultimately survive and heal on my own.`
    }),
  ]);

  public override getQuestions(): FiveMultipleChoiceQuestion[] {
    return [...this.questions()];
  }

  public override setQuestions(questions: FiveMultipleChoiceQuestion[]): void {
    this.questions.update(() => questions);
  }

  evaluate(): FiveModernRelationshipsResult {
      return {
        A: this.count(this.getQuestions(),"A"),
        B: this.count(this.getQuestions(),"B"),
        C: this.count(this.getQuestions(),"C"),
        D: this.count(this.getQuestions(),"D"),
        E: this.count(this.getQuestions(),"E"),
      };
  }

  private count(questions:Array<FiveMultipleChoiceQuestion>, answerType: FiveMultipleChoiceAnswer): number {
    return questions.reduce((agg,q) => {
      return (q.answer === answerType) ? agg + 1: agg;
    },0)
  }
}
