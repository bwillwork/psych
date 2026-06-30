import {Component, computed, input, Signal, signal, WritableSignal} from '@angular/core';
import {PenSpectrum, PenSpectrumOptions, PenSpectrumScore, PenTestResult} from '../../../../types/result.types';

const High: PenSpectrum = {high: 5, low: 4};
const Mid: PenSpectrum = {high: 3, low: 2};
const Low: PenSpectrum = {high: 1, low: 0};

const defaultSpectrum: PenSpectrumScore = {description: '', ranking: "", spectrum: Low};

@Component({
  selector: 'app-pen-results-elm',
  imports: [],
  templateUrl: './pen-results-elm.html',
  styleUrl: './pen-results-elm.css',
})
export class PenResultsElm {

  private options: WritableSignal<PenSpectrumOptions> = signal({
    psychoticism: [
      {
        spectrum: High,
        ranking: "High",
        description: `You are a fiercely independent, non-conforming thinker. You aren't afraid to challenge social norms, can be highly creative, and are comfortable taking risks, though you may sometimes come across as blunt or detached.`
      },
      {
        spectrum: Mid,
        ranking: "Mid",
        description: `You balance independence with social conformity. You can think outside the box when needed but generally prefer not to rock the boat unnecessarily.`
      },
      {
        spectrum: Low,
        ranking: "Low",
        description: `You are highly empathetic, cooperative, and conventional. You value social harmony, respect rules, and naturally consider other people's feelings before taking action.`
      },
    ],
    extroversion: [
      {
        spectrum: High,
        ranking: "High",
        description: `You are highly extraverted. You are outgoing, crave variety and excitement, and feel energized when interacting with large groups of people.`
      },
      {
        spectrum: Mid,
        ranking: "Mid",
        description: `You are an ambivert. You enjoy socializing in moderation but require adequate downtime to recharge your battery.`
      },
      {
        spectrum: Low,
        ranking: "Low",
        description: `You are highly introverted. You prefer quiet, predictable environments, value your solitude, and recharge your energy by being alone or with one or two trusted people.`
      },
    ],
    neuroticism: [
      {
        spectrum: High,
        ranking: "High",
        description: `You are highly emotionally sensitive. Your nervous system is highly reactive to stress, meaning you feel emotions deeply, worry frequently, and may find yourself prone to mood swings or anxiety.`
      },
      {
        spectrum: Mid,
        ranking: "Mid",
        description: `You experience a normal range of emotional reactivity. You feel stress and worry when appropriate, but you are generally able to manage it and bounce back reasonably fast.`
      },
      {
        spectrum: Low,
        ranking: "Low",
        description: `You are highly emotionally stable. You are typically calm, resilient under pressure, and slow to react negatively to stressful situations. Minor setbacks rarely rattle you.`
      },
    ],
  });

  result = input.required<PenTestResult>();

  psychoticismEvaluation = computed(() => {
    const r = this.result();
    return this.options().psychoticism.find(p => {
      const high = p.spectrum.high;
      const low = p.spectrum.low;
      return r.psychoticism >= low && r.psychoticism <= high;
    }) ?? defaultSpectrum;
  });
  extroversionEvaluation = computed(() => {
    const r = this.result();
    return this.options().extroversion.find(p => {
      const high = p.spectrum.high;
      const low = p.spectrum.low;
      return r.extroversion >= low && r.extroversion <= high;
    }) ?? defaultSpectrum;
  });
  neuroticismEvaluation = computed(() => {
    const r = this.result();
    return this.options().neuroticism.find(p => {
      const high = p.spectrum.high;
      const low = p.spectrum.low;
      return r.neuroticism >= low && r.neuroticism <= high;
    }) ?? defaultSpectrum;
  });

}
