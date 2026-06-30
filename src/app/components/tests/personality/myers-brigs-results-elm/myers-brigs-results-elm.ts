import {Component, computed, input, signal, WritableSignal} from '@angular/core';
import {MyersBrigsResult} from '../../../../types/result.types';


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

const defaultOption: MyersBrigsOption = {
  energy: "",
  information: "",
  decisions: "",
  lifestyle: "",

  group: "",
  name: '',
  description: '',
  url: ''
};


@Component({
  selector: 'app-myers-brigs-results-elm',
  imports: [],
  templateUrl: './myers-brigs-results-elm.html',
  styleUrl: './myers-brigs-results-elm.css',
})
export class MyersBrigsResultsElm {

  private options: WritableSignal<Array<MyersBrigsOption>> = signal([
    // Analysts
    {
      energy: "I",
      information: "N",
      decisions: "T",
      lifestyle: "J",

      group: "Analyst",
      name: 'The Architect',
      description: '',
      url: ''
    },
    {
      energy: "I",
      information: "N",
      decisions: "T",
      lifestyle: "P",

      group: "Analyst",
      name: 'The Logician',
      description: '',
      url: ''
    },
    {
      energy: "E",
      information: "N",
      decisions: "T",
      lifestyle: "J",

      group: "Analyst",
      name: 'The Commander',
      description: '',
      url: ''
    },
    {
      energy: "E",
      information: "N",
      decisions: "T",
      lifestyle: "P",

      group: "Analyst",
      name: 'The Debater',
      description: '',
      url: ''
    },

    // Diplomats
    {
      energy: "I",
      information: "N",
      decisions: "F",
      lifestyle: "J",

      group: "Diplomat",
      name: 'The Advocate',
      description: '',
      url: ''
    },
    {
      energy: "I",
      information: "N",
      decisions: "F",
      lifestyle: "P",

      group: "Diplomat",
      name: 'The Mediator',
      description: '',
      url: ''
    },
    {
      energy: "E",
      information: "N",
      decisions: "F",
      lifestyle: "J",

      group: "Diplomat",
      name: 'The Protagonist',
      description: '',
      url: ''
    },
    {
      energy: "E",
      information: "N",
      decisions: "F",
      lifestyle: "P",

      group: "Diplomat",
      name: 'The Campaigner',
      description: '',
      url: ''
    },

    // Sentinels
    {
      energy: "I",
      information: "S",
      decisions: "T",
      lifestyle: "J",

      group: "Sentinel",
      name: 'The Logistician',
      description: '',
      url: ''
    },
    {
      energy: "I",
      information: "S",
      decisions: "F",
      lifestyle: "J",

      group: "Sentinel",
      name: 'The Defender',
      description: '',
      url: ''
    },
    {
      energy: "E",
      information: "S",
      decisions: "T",
      lifestyle: "J",

      group: "Sentinel",
      name: 'The Executive',
      description: '',
      url: ''
    },
    {
      energy: "E",
      information: "S",
      decisions: "F",
      lifestyle: "J",

      group: "Sentinel",
      name: 'The Consul',
      description: '',
      url: ''
    },

    // Explorers
    {
      energy: "I",
      information: "S",
      decisions: "T",
      lifestyle: "P",

      group: "Explorer",
      name: 'The Virtuoso',
      description: '',
      url: ''
    },
    {
      energy: "I",
      information: "S",
      decisions: "F",
      lifestyle: "P",

      group: "Explorer",
      name: 'The Adventurer',
      description: '',
      url: ''
    },
    {
      energy: "E",
      information: "S",
      decisions: "T",
      lifestyle: "P",

      group: "Explorer",
      name: 'The Entrepreneur',
      description: '',
      url: ''
    },
    {
      energy: "E",
      information: "S",
      decisions: "F",
      lifestyle: "P",

      group: "Explorer",
      name: 'The Entertainer',
      description: '',
      url: ''
    },
  ]);

  result = input.required<MyersBrigsResult>();
  evaluation = computed(() => {
    const r = this.result();
    const energy: MyersBrigsIntrovertExtrovert = (r.energy.introversion > r.energy.extroversion) ? "I" : "E";
    const information: MyersBrigsSensingIntuition = (r.information.sensing > r.information.intuition) ? "S" : "N";
    const decisions: MyersBrigsThinkingFeeling = (r.decisions.thinking > r.decisions.feeling) ? "T" : "F";
    const lifestyle: MyersBrigsJudgingPerceiving = (r.lifestyle.judging > r.lifestyle.perceiving) ? "J" : "P";

    return this.options().find(o => {
      const e = o.energy === energy;
      const i = o.information === information;
      const d = o.decisions === decisions;
      const l = o.lifestyle === lifestyle;
      return e && i && d && l;
    }) ?? defaultOption;
  });
}
