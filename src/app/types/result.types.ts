import {Component} from '@angular/core';
import {FiveMultipleChoiceKeys, FourMultipleChoiceKeys} from './test.types';

// Six Styles Of Loving
export interface SixStylesOfLovingResult {
  eros: number,
  ludus: number,
  storage: number,
  pragma: number,
  mania: number,
  agape: number
}

export type SixStylesOfLovingStyle = "eros" | "ludus" | "storge" | "pragma" | "mania" | "agape";
export type SixStylesOfLovingSpectrum = {high: number, low: number};
export type SixStylesOfLovingOption = {
  style: SixStylesOfLovingStyle,
  spectrum: SixStylesOfLovingSpectrum,
  name: string,
  description: string
};

// Seduction Archetypes
export interface SeductionArchetypesResult {
  A: number,
  B: number,
  C: number,
  D: number
}

export type SeductionArchetype = "Siren" | "Mother" | "Hunter" | "Mystic" | "";
export type SeductionAnswerToArchetypeMap = {
  [key in FourMultipleChoiceKeys]: SeductionArchetype;
};
export type SeductionArchetypeProfile = {
  name: string,
  archetype: SeductionArchetype,
  energy: string,
  style: string,
  shadow: string
};


// The Five Modern Relationship Archetypes
export interface FiveModernRelationshipsResult {
  A: number,
  B: number,
  C: number,
  D: number,
  E: number
}

export type FiveModernRelArchetype = "Pleaser" | "Victim" | "Controller" | "Vacillator" | "Secure Connector" | "";
export type FiveModernRelAnswerToArchetypeMap = {
  [key in FiveMultipleChoiceKeys]: FiveModernRelArchetype;
};
export type FiveModernRelArchetypeProfile = {
  name: string,
  archetype: FiveModernRelArchetype,
  dynamic: string,
  relationships: string
};


// PEN Personality test
export interface PenTestResult {
  psychoticism: number,
  extroversion: number,
  neuroticism: number
}

export type PenRanking = "Low" | "Mid" | "High" | "";
export type PenSpectrum = {high: number, low: number};

export type PenSpectrumScore = {
  spectrum: PenSpectrum,
  ranking: PenRanking,
  description: string
};

export type PenSpectrumOptions = {
  psychoticism: Array<PenSpectrumScore>,
  extroversion: Array<PenSpectrumScore>,
  neuroticism: Array<PenSpectrumScore>,
};

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
