import {Injectable, signal, WritableSignal} from '@angular/core';
import {PenTestResult, ScoreEvaluatorService, TrueFalseAnswer, TrueFalseQuestion} from '../../../../types/test.types';
import {initTrueFalseQuestion} from '../../../../util/question.util';
import {AbstractQuestionService} from '../../abstract-question-service';

@Injectable({
  providedIn: 'root',
})
export class PenService extends AbstractQuestionService<TrueFalseQuestion,TrueFalseAnswer> implements ScoreEvaluatorService<PenTestResult> {
  private questions: WritableSignal<Array<TrueFalseQuestion>> = signal([
    initTrueFalseQuestion(1,`Do you prefer having a large circle of friends over having just one or two close confidants?`),
    initTrueFalseQuestion(2,`Do you often find yourself worrying about things that might go wrong?`),
    initTrueFalseQuestion(3,`Would you enjoy taking part in a high-risk sport or a thrilling, unpredictable activity?`),
    initTrueFalseQuestion(4,`Do you find it easy to strike up a conversation with a total stranger?`),
    initTrueFalseQuestion(5,`Are your feelings easily hurt by criticism or minor slights?`),
    initTrueFalseQuestion(6,`Do you tend to keep your opinions to yourself if you think they might upset social harmony?`),
    initTrueFalseQuestion(7,`Do you consider yourself a lively, energetic person in social situations?`),
    initTrueFalseQuestion(8,`Do you experience frequent ups and downs in your mood for no apparent reason?`),
    initTrueFalseQuestion(9,`Do you think that strictly following all of society's rules and laws is overrated?`),
    initTrueFalseQuestion(10,`Do you usually take the initiative to organize social gatherings or outings?`),
    initTrueFalseQuestion(11,`Do you often feel tense, restless, or "on edge"?`),
    initTrueFalseQuestion(12,`Do you place a high value on cooperation, empathy, and making sure others feel comfortable?`),
    initTrueFalseQuestion(13,`Would you describe yourself as a quiet person who prefers solitary activities?`),
    initTrueFalseQuestion(14,`Does it take you a long time to get over an embarrassing or stressful situation?`),
    initTrueFalseQuestion(15,`Do you sometimes enjoy being deliberately unconventional or shocking others with your behavior?`),
  ]);

  public override getQuestions(): TrueFalseQuestion[] {
    return [...this.questions()];
  }

  public override setQuestions(questions: TrueFalseQuestion[]): void {
    this.questions.update(() => questions)
  }

  evaluate(): PenTestResult {
    return {
      extroversion: this.countTrueAnswers([3,6,9,12,15]),
      neuroticism: this.countTrueAnswers([1,4,7,10,13]),
      psychoticism: this.countTrueAnswers([2,5,8,11,14])
    };
  }

  private countTrueAnswers(questionIds: Array<number>) {
    return this.getQuestions()
      .filter((q) => (q.id in questionIds && q.response))
      .length;
  }

}
