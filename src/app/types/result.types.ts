export interface SixStylesOfLovingResult {
  eros: number,
  ludus: number,
  storage: number,
  pragma: number,
  mania: number,
  agape: number
}

export interface SeductionArchetypesResult {
  A: number,
  B: number,
  C: number,
  D: number
}

export interface FiveModernRelationshipsResult {
  A: number,
  B: number,
  C: number,
  D: number,
  E: number
}

export interface PenTestResult {
  psychoticism: number,
  extroversion: number,
  neuroticism: number
}

// MyersBrigs
export interface MyersBrigsResult {
  energy: {
    extroversion: number,
    introversion: number
  },
  information: {
    sensing: number,
    intuition: number
  },
  decisions: {
    thinking: number,
    feeling: number
  },
  lifestyle: {
    judging: number,
    perceiving: number
  }
}

export type MyersBrigsIntrovertExtrovert = "I" | "E" | "";
export type MyersBrigsSensingIntuition = "S" | "N" | "";
export type MyersBrigsThinkingFeeling = "T" | "F" | "";
export type MyersBrigsJudgingPerceiving = "J" | "P" | "";

export type MyersBrigsGroup = "Analyst" | "Diplomat" | "Sentinel" | "Explorer" | "";

export interface MyersBrigsOption {
  energy: MyersBrigsIntrovertExtrovert,
  information: MyersBrigsSensingIntuition,
  decisions: MyersBrigsThinkingFeeling,
  lifestyle: MyersBrigsJudgingPerceiving,

  group: MyersBrigsGroup,
  name: string,
  description: string,
  url: string
}


// Big Five
export interface BigFiveResult {
  openness: number,
  conscientiousness: number,
  extroversion: number,
  agreeableness: number,
  neuroticism: number
}

export type BigFiveCategory = 'Openness' | 'Conscientiousness' | 'Extroversion' | 'Agreeableness' | 'Neuroticism';
export type BigFiveRanking = 'High' | 'Low';

export type BigFiveSpectrum = {high: number, low: number};

export interface EvaluationDescription {
  category: BigFiveCategory,
  ranking: BigFiveRanking,
  spectrum: BigFiveSpectrum,
  description: string
}

export interface EvaluationScore  {
  title: string,
  score: number,
  category: BigFiveCategory,
}
