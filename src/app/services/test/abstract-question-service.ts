import {Question} from '../../types/test.types';

export abstract class AbstractQuestionService <Q extends Question<A>,A> {
  public abstract getQuestions(): Array<Q>;
  public abstract setQuestions(questions: Array<Q>): void;

  getQuestion(id: number): Q | undefined {
    return this.getQuestions().find(q => q.id === id);
  }
  clearQuestions(): void {
    const clearedResponses = this.getQuestions().map(q => ({...q,response: undefined}));
    this.setQuestions(clearedResponses);
  }
  answerQuestion(id: number, answer: A): void {
    const questions = this.getQuestions();
    const index = questions.findIndex(q => q.id === id);
    if(index !== -1) {
      questions[index].response = answer;
      this.setQuestions(questions);
    }
  }

  getAnsweredQuestions(): Array<Q> {
    return this.getQuestions().filter(q => q.response !== undefined);
  }

  getUnansweredQuestions(): Array<Q> {
    return this.getQuestions().filter(q => q.response === undefined);
  }

  canSeeResult(): boolean {
    // All questions need an answer
    return this.getQuestions().findIndex(q => q.response === undefined) === -1;
  }
}
