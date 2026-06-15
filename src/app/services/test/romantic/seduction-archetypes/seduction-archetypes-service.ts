import {Injectable, signal, WritableSignal} from '@angular/core';
import {
  FourMultipleChoiceAnswer,
  FourMultipleChoiceQuestion,
  QuestionScoreService,
  SeductionArchetypesResult
} from '../../../../types/test.types';
import {initFourMultipleChoiceQuestion} from '../../../../util/question.util';

/*
initFourMultipleChoiceQuestion(1,``, {
      A: '',
      B: '',
      C: '',
      D: ''
    })
 */


@Injectable({
  providedIn: 'root',
})
export class SeductionArchetypesService implements QuestionScoreService<FourMultipleChoiceQuestion,FourMultipleChoiceAnswer,SeductionArchetypesResult>{
  private questions: WritableSignal<Array<FourMultipleChoiceQuestion>> = signal([
    initFourMultipleChoiceQuestion(1,`When you first start dating someone, what is your primary goal?`, {
      A: `To create an undeniable, electric spark and a deep physical/emotional attraction.`,
      B: `To make them feel safe, cared for, and deeply supported by me.`,
      C: `To see if they match my lifestyle, respect my independence, and can keep up with me.`,
      D: `To observe them quietly and see if they are deep enough to earn my trust.`
    }),
    initFourMultipleChoiceQuestion(2,`How do you usually express your affection?`, {
      A: `Through intense eye contact, flirtation, compliments, and physical touch.`,
      B: `By taking care of them—cooking, helping them organize their life, or giving practical advice.`,
      C: `By planning exciting dates, pushing them toward their goals, and offering absolute loyalty.`,
      D: `Through quiet quality time, deep late-night conversations, and soulful gifts.`
    }),
    initFourMultipleChoiceQuestion(3,`What is your relationship "superpower"?`, {
      A: `Magnetism. I know how to make a partner feel incredibly desired and captivated.`,
      B: `Nurturing. I can turn any chaotic situation into a warm, comfortable sanctuary.`,
      C: `Empowerment. I inspire my partners to achieve their dreams and stand on their own two feet.`,
      D: `Intuition. I can read between the lines and understand my partner's hidden thoughts.`
    }),
    initFourMultipleChoiceQuestion(4,`What is your biggest fear or pet peeve in a romance?`, {
      A: `The spark dying out, leading to a boring, predictable routine.`,
      B: `Being unappreciated or taken for granted after giving so much of myself.`,
      C: `Feeling controlled, suffocated, or having my personal freedom restricted.`,
      D: `Superficiality, small talk, or a partner who violates my privacy.`
    }),
    initFourMultipleChoiceQuestion(5,`When your partner is going through a hard time, you usually:`, {
      A: `Try to distract them with romance, fun, or physical intimacy to lift their spirits.`,
      B: `Immediately step in to fix things, soothe them, and handle their daily responsibilities.`,
      C: `Give them a motivating pep talk and help them brainstorm a logical solution.`,
      D: `Sit with them in silence, offering a calm, non-judgmental space to process their feelings.`
    }),
    initFourMultipleChoiceQuestion(6,`How do you feel about vulnerability in a relationship?`, {
      A: `I love emotional intensity; open up to me completely right away!`,
      B: `I find it easy to be vulnerable if it means helping my partner heal.`,
      C: `I struggle with it. I prefer to keep my guard up so I don't look weak.`,
      D: `I am a vault. I only reveal my deepest layers over a long period of time.`
    }),
    initFourMultipleChoiceQuestion(7,`Your ideal date night involves:`, {
      A: `Dressing up to the nines, a dim candlelit dinner, and a glamorous vibe.`,
      B: `A cozy, intimate night in with home-cooked comfort food and cuddling.`,
      C: `An adventurous activity like a concert, hiking, or exploring a new city.`,
      D: `A quiet museum visit, a stroll in nature, or a late-night drive talking about the universe.`
    }),
    initFourMultipleChoiceQuestion(8,`What is your classic "shadow behavior" (your biggest flaw) when dating?`, {
      A: `I can get addicted to the honeymoon phase and pull away when things get normal.`,
      B: `I over-give, burn myself out, and accidentally mother or "fix" my partner.`,
      C: `I can be overly competitive, blunt, or emotionally detached when I'm stressed.`,
      D: `I can become distant, icy, or walls-up, shutting my partner out completely.`
    }),
  ]);

  answerQuestion(id: number, answer: FourMultipleChoiceAnswer): void {
    const questions = this.getQuestions();
    const index = questions.findIndex(q => q.id === id);
    if(index !== -1) {
      questions[index].response = answer;
      this.questions.update(() => questions);
    }
  }

  getQuestion(id: number): FourMultipleChoiceQuestion | undefined {
      return this.getQuestions().find(q => q.id === id);
  }

  getQuestions(): FourMultipleChoiceQuestion[] {
    return [...this.questions()];
  }

  clearQuestions(): void {
      this.questions.update(() => ([]));
  }

  evaluate(): SeductionArchetypesResult {
    return {
      A: this.count(this.getQuestions(),"A"),
      B: this.count(this.getQuestions(),"B"),
      C: this.count(this.getQuestions(),"C"),
      D: this.count(this.getQuestions(),"D"),
    };
  }

  canSeeResult(): boolean {
    // All questions need an answer
    return this.questions().findIndex(q => q.response === undefined) === -1;
  }

  private count(questions:Array<FourMultipleChoiceQuestion>, answerType: FourMultipleChoiceAnswer): number {
    return questions.reduce((agg,q) => {
      return (q.response === answerType) ? agg + 1: agg;
    },0)
  }
}
