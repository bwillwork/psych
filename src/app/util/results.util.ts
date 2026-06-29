import {
  BigFiveResult, FiveModernRelationshipsResult, FiveMultipleChoiceAnswer,
  FiveMultipleChoiceQuestion, FiveScaleAnswer,
  FiveScaleQuestion,
  FourMultipleChoiceAnswer, FourMultipleChoiceQuestion, MyersBrigsResult, PenTestResult, SeductionArchetypesResult,
  SixStylesOfLovingResult,
  TrueFalseQuestion, TwoMultipleChoiceAnswer, TwoMultipleChoiceKeys,
  TwoMultipleChoiceQuestion
} from '../types/test.types';


function _in<T>(array: Array<T>, elm: T) {
  return array.findIndex(e => e === elm) !== -1;
}

// Personality Tests
export function evaluateBigFiveTest(questions: Array<FiveScaleQuestion>): BigFiveResult {

  function filter(questions: Array<FiveScaleQuestion>, questionIdNums: Array<number>) {
    return questions.filter(q => _in(questionIdNums,q.id.num));
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
  function filter(questions: Array<TwoMultipleChoiceQuestion>,idNums:Array<number>, choice: TwoMultipleChoiceAnswer) {
    return questions.filter(q => _in(idNums,q.id.num) && q.answer === choice);
  }

  function addUpAs(questions: Array<TwoMultipleChoiceQuestion>,idNums:Array<number>) {
    return filter(questions,idNums,'A').length;
  }

  function addUpBs(questions: Array<TwoMultipleChoiceQuestion>,idNums:Array<number>) {
    return filter(questions,idNums,'B').length;
  }

  return {
    decisions: {feeling: addUpBs(questions,[11,12,13,14,15]), thinking: addUpAs(questions,[11,12,13,14,15])},
    energy: {extroversion: addUpAs(questions,[1,2,3,4,5]), introversion: addUpBs(questions,[1,2,3,4,5])},
    information: {intuition: addUpBs(questions,[6,7,8,9,10]), sensing: addUpAs(questions,[6,7,8,9,10])},
    lifestyle: {judging: addUpAs(questions,[16,17,18,19,20]), perceiving: addUpBs(questions,[16,17,18,19,20])}
  };
}

export function evaluatePenTest(questions: Array<TrueFalseQuestion>): PenTestResult {
  function addUp(questions: Array<TrueFalseQuestion>, idNums: Array<number>, expectedAnswers: Array<boolean>) {
    let result = 0;
    for(const q in questions) {
      const question = questions[q];
      const idIndex = idNums.findIndex(idNum => idNum === question.id.num);
      const expectedAnswer = expectedAnswers[idIndex];
      if(question.answer === expectedAnswer) result += 1;
    }
    return result;
  }


  return {
    extroversion: addUp(questions,[1,4,7,10,13],[true,true,true,true,false]),
    neuroticism: addUp(questions,[2,5,8,11,14],[true,true,true,true,true]),
    psychoticism: addUp(questions,[3,6,9,12,15],[true,false,true,false,true]),
  };
}

// Romantic
export function evaluateFiveModernTest(questions: Array<FiveMultipleChoiceQuestion>): FiveModernRelationshipsResult {

  function addUp(questions: Array<FiveMultipleChoiceQuestion>, choice: FiveMultipleChoiceAnswer) {
    return questions.reduce((agg,q) => {
      return (q.answer === choice) ? agg + 1 : agg;
    },0);
  }

  return {
    A: addUp(questions,'A'),
    B: addUp(questions,'B'),
    C: addUp(questions,'C'),
    D: addUp(questions,'D'),
    E: addUp(questions,'E'),
  };
}

export function evaluateSeductionTest(questions: Array<FourMultipleChoiceQuestion>): SeductionArchetypesResult {
  function addUp(questions: Array<FourMultipleChoiceQuestion>, choice: FourMultipleChoiceAnswer) {
    return questions.reduce((agg,q) => {
      return (q.answer === choice) ? agg + 1 : agg;
    },0);
  }

  return {
    A: addUp(questions,'A'),
    B: addUp(questions,'B'),
    C: addUp(questions,'C'),
    D: addUp(questions,'D'),
  };
}

export function evaluateSixStylesOfLovingTest(questions: Array<FiveScaleQuestion>): SixStylesOfLovingResult {
  function addScores(questions: Array<FiveScaleQuestion>, idNums: Array<number>) {
    return questions
      .filter(q => _in(idNums,q.id.num))
      .reduce((agg,q) => {
        return agg + (q.answer ?? 0);
      },0);
  }

  return {
    eros: addScores(questions,[1,7,13]),
    ludus: addScores(questions,[2,8,14]),
    storage: addScores(questions,[3,9,15]),
    pragma: addScores(questions,[4,10,16]),
    mania: addScores(questions,[5,11,17]),
    agape: addScores(questions,[6,12,18]),
  };
}
