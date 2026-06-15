import {Injectable, signal, WritableSignal} from '@angular/core';
import {
  MyersBrigsResult,
  QuestionScoreService,
  TwoMultipleChoiceAnswer, TwoMultipleChoiceKeys,
  TwoMultipleChoiceQuestion
} from '../../../../types/test.types';
import {initTwoMultipleChoiceQuestion} from '../../../../util/question.util';

@Injectable({
  providedIn: 'root',
})
export class MyersBrigsService implements QuestionScoreService<TwoMultipleChoiceQuestion,TwoMultipleChoiceAnswer,MyersBrigsResult>{

  private questions: WritableSignal<Array<TwoMultipleChoiceQuestion>> = signal([
    initTwoMultipleChoiceQuestion(1,`After a long, exhausting week, how do you prefer to recharge?`,{
      A: `Going out with friends, attending a party, or being around a crowd.`,
      B: `Having a quiet night in, reading, watching a movie, or doing a solo hobby.`
    }),
    initTwoMultipleChoiceQuestion(2,`When in a large social setting, you usually:`,{
      A: `Introduce yourself to new people and strike up conversations easily.`,
      B: `Stick to a few people you already know well.`
    }),
    initTwoMultipleChoiceQuestion(3,`In group projects or meetings, you tend to:`,{
      A: `Think out loud, voicing your ideas as they come to you.`,
      B: `Process your thoughts internally first and speak only when your idea is fully formed.`
    }),
    initTwoMultipleChoiceQuestion(4,`Which describes your ideal work environment?`,{
      A: `A bustling, collaborative space with plenty of interaction.`,
      B: `A quiet, independent space where you can focus without interruption.`
    }),
    initTwoMultipleChoiceQuestion(5,`You would describe yourself as more:`,{
      A: `Outgoing, expressive, and open.`,
      B: `Reserved, reflective, and private.`
    }),
    initTwoMultipleChoiceQuestion(6,`When learning a new skill, you prefer to:`,{
      A: `Learn practical, real-world applications with clear instructions.`,
      B: `Understand the overarching theories, concepts, and creative possibilities.`
    }),
    initTwoMultipleChoiceQuestion(7,`If you are describing a movie to a friend, you are more likely to:`,{
      A: `Detail exactly what happened, the plot points, and the visual scenes.`,
      B: `Talk about the underlying themes, deeper meanings, and the vibe of the film.`
    }),
    initTwoMultipleChoiceQuestion(8,`You tend to focus more on:`,{
      A: `The present reality—what is currently happening and what is tangible.`,
      B: `Future possibilities—what could be and what the big picture looks like.`
    }),
    initTwoMultipleChoiceQuestion(9,`People often compliment you for your:`,{
      A: `Common sense, practicality, and attention to detail.`,
      B: `Imagination, creativity, and original ideas.`
    }),
    initTwoMultipleChoiceQuestion(10,`You prefer facts and data over hunches and gut feelings.`,{
      A: `True. Show me the evidence.`,
      B: `False. I trust my intuition and patterns.`
    }),
    initTwoMultipleChoiceQuestion(11,`When making an important decision, your final choice is usually guided by:`,{
      A: `Logic, objective analysis, and cold hard facts.`,
      B: `Your values, feelings, and how the decision impacts others.`
    }),
    initTwoMultipleChoiceQuestion(12,`When a friend comes to you with a problem, your first instinct is to:`,{
      A: `Offer practical solutions and analyze how to fix the issue.`,
      B: `Offer practical solutions and analyze how to fix the issue.`
    }),
    initTwoMultipleChoiceQuestion(13,`In an argument or debate, you care more about being:`,{
      A: `Fair, accurate, and logically correct.`,
      B: `Compassionate, harmonious, and understanding.`
    }),
    initTwoMultipleChoiceQuestion(14,`Which statement sounds more like you?`,{
      A: `I try to keep my emotions out of my decisions so I can stay objective.`,
      B: `I follow my heart and make sure everyone's feelings are respected.`
    }),
    initTwoMultipleChoiceQuestion(15,`If you have to give someone constructive criticism, you worry most about:`,{
      A: `Being too blunt or hurting their feelings (but you say it anyway because it's true).`,
      B: `Hurting their feelings, so you sugarcoat it or avoid saying it entirely.`
    }),
    initTwoMultipleChoiceQuestion(16,`When preparing for a trip, you usually:`,{
      A: `Plan out a detailed itinerary, book things in advance, and pack early.`,
      B: `Pack at the last minute and figure out what to do once you arrive.`
    }),
    initTwoMultipleChoiceQuestion(17,`How do you feel about strict routines and schedules?`,{
      A: `They comfort me; I feel organized and in control.`,
      B: `They suffocate me; I feel trapped and prefer flexibility.`
    }),
    initTwoMultipleChoiceQuestion(18,`When given a major deadline or project, you usually:`,{
      A: `Break it into steps and work on it steadily so you finish early.`,
      B: `Wait until the pressure kicks in near the deadline to do your best work.`
    }),
    initTwoMultipleChoiceQuestion(19,`Your living or workspace is generally:`,{
      A: `Neat, organized, and everything has its proper place.`,
      B: `A bit chaotic or "organized clutter"—you know where things are, but it looks messy.`
    }),
    initTwoMultipleChoiceQuestion(20,`You prefer to have things:`,{
      A: `Settled, decided, and closed so you can move on.`,
      B: `Open-ended, flexible, and subject to change if better options come up.`
    }),
  ]);

  getQuestion(id: number): TwoMultipleChoiceQuestion | undefined {
    return this.getQuestions().find(q => q.id === id);
  }
  getQuestions(): TwoMultipleChoiceQuestion[] {
    return [...this.questions()];
  }
  clearQuestions(): void {
    this.questions.update(() => ([]));
  }
  answerQuestion(id: number, answer: TwoMultipleChoiceAnswer): void {
    const questions = this.getQuestions();
    const index = questions.findIndex(q => q.id === id);
    if(index !== -1) {
      questions[index].response = answer;
      this.questions.update(() => questions);
    }
  }
  evaluate(): MyersBrigsResult {
    const energyQuestions = [1,2,3,4,5];
    const informationQuestions = [6,7,8,9,10];
    const decisionQuestions = [11,12,13,14,15];
    const lifestyleQuestions = [16,17,18,19,20];

    return {
      energy: {extroversion: this.countResponseType('A',energyQuestions), introversion: this.countResponseType('B',energyQuestions)},
      information: {intuition: this.countResponseType('A',informationQuestions), sensing: this.countResponseType('B',informationQuestions)},
      decisions: {feeling: this.countResponseType('A',decisionQuestions), thinking: this.countResponseType('B',decisionQuestions)},
      lifestyle: {judging: this.countResponseType('A',lifestyleQuestions), perceiving: this.countResponseType('B',lifestyleQuestions)}
    };
  }
  canSeeResult(): boolean {
    // All questions need an answer
    return this.questions().findIndex(q => q.response === undefined) === -1;
  }

  private countResponseType(typeKey: TwoMultipleChoiceKeys, questionIds: Array<number>) {
    return this.getQuestions().filter(q => (q.id in questionIds && q.response === typeKey)).length;
  }

}
