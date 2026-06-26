import {
  BigFiveResult, FiveModernRelationshipsResult,
  FiveMultipleChoiceQuestion, FiveScaleAnswer,
  FiveScaleQuestion, FourMultipleChoiceQuestion, MyersBrigsResult, PenTestResult, SeductionArchetypesResult,
  SixStylesOfLovingResult,
  TrueFalseQuestion,
  TwoMultipleChoiceQuestion
} from '../types/test.types';

// Personality Tests
export function evaluateBigFiveTest(questions: Array<FiveScaleQuestion>): BigFiveResult {

  function filter(questions: Array<FiveScaleQuestion>, questionIdNums: Array<number>) {
    return questions.filter(q => q.id.num in questionIdNums);
  }

  function addScores(questions: Array<FiveScaleQuestion>) {
    return questions.reduce((agg,q) => {
      return agg + (q.answer ?? 0);
    },0);
  }

  function reverseScore(question: FiveScaleQuestion): FiveScaleQuestion {
    const answer = ((question.answer) ? 5 - question.answer : 0) as FiveScaleAnswer;// Reverse the score
    return {...question,answer};
  }

  function subTotalA(questions: Array<FiveScaleQuestion>,questionIdNums: Array<number>) {
    const filtered = filter(questions,questionIdNums);
    return addScores(filtered);
  }

  function subTotalB(questions: Array<FiveScaleQuestion>,questionIdNums: Array<number>) {
    const filtered = filter(questions,questionIdNums).map(reverseScore);
    return addScores(filtered);
  }

  return {
    openness: subTotalA(questions,[1,11]) + subTotalB(questions,[6,16]),
    conscientiousness: subTotalA(questions,[2,12]) + subTotalB(questions,[7,17]),
    extroversion: subTotalA(questions,[3,13]) + subTotalB(questions,[8,18]),
    agreeableness: subTotalA(questions,[4,14]) + subTotalB(questions,[9,19]),
    neuroticism: subTotalA(questions,[5,15]) + subTotalB(questions,[10,20]),
  };

}


export function evaluateMyersBrigsTest(questions: Array<TwoMultipleChoiceQuestion>): MyersBrigsResult {
  return {
    decisions: {feeling: 0, thinking: 0},
    energy: {extroversion: 0, introversion: 0},
    information: {intuition: 0, sensing: 0},
    lifestyle: {judging: 0, perceiving: 0}
  };
}

export function evaluatePenTest(questions: Array<TrueFalseQuestion>): PenTestResult {
  return {extroversion: 0, neuroticism: 0, psychoticism: 0};
}

// Romantic
export function evaluateFiveModernTest(questions: Array<FiveMultipleChoiceQuestion>): FiveModernRelationshipsResult {
  return {A: 0, B: 0, C: 0, D: 0, E: 0};
}

export function evaluateSeductionTest(questions: Array<FourMultipleChoiceQuestion>): SeductionArchetypesResult {
  return {A: 0, B: 0, C: 0, D: 0};
}

export function evaluateSixStylesOfLovingTest(questions: Array<FiveScaleQuestion>): SixStylesOfLovingResult {
  return {agape: 0, eros: 0, ludus: 0, mania: 0, pragma: 0, storage: 0};
}
