import {Component, computed, input, Signal, signal, WritableSignal} from '@angular/core';
import {
  BigFiveCategory, BigFiveRanking,
  BigFiveResult,
  BigFiveSpectrum,
  EvaluationDescription,
  EvaluationScore
} from '../../../../types/result.types';



const High: BigFiveSpectrum = {high: 100, low: 70};
const Low: BigFiveSpectrum = {high: 30, low: 0};

@Component({
  selector: 'app-big-five-results-elm',
  imports: [],
  templateUrl: './big-five-results-elm.html',
  styleUrl: './big-five-results-elm.css',
})
export class BigFiveResultsElm {

  private descriptions: WritableSignal<Array<EvaluationDescription>> = signal([
    // Openness
    {
      description: `You are highly creative, intellectually curious, imaginative, and deeply appreciate art and new experiences. You thrive on variety.`,
      spectrum: High,
      category: "Openness",
      ranking: "High"
    },
    {
      description: `You are practical, down-to-earth, and prefer concrete facts over abstract theories. You deeply value routine, predictability, and tradition.`,
      spectrum: Low,
      category: "Openness",
      ranking: "Low"
    },

    // Conscientiousness
    {
      description: `You are highly organized, self-disciplined, goal-driven, and reliable. You like to plan ahead and hold yourself to a high standard.`,
      spectrum: High,
      category: "Conscientiousness",
      ranking: "High"
    },
    {
      description: `You are spontaneous, flexible, and relaxed. You may struggle with structure or deadlines, preferring to go with the flow and take life as it comes.`,
      spectrum: Low,
      category: "Conscientiousness",
      ranking: "Low"
    },

    // Extroversion
    {
      description: `You are highly social, talkative, assertive, and draw energy from being around others. You thrive in high-stimulation environments.`,
      spectrum: High,
      category: "Extroversion",
      ranking: "High"
    },
    {
      description: `You are introverted. You prefer solitude or small groups, process your thoughts internally, and require quiet time to recharge your battery.`,
      spectrum: Low,
      category: "Extroversion",
      ranking: "Low"
    },

    // Agreeableness
    {
      description: `You are highly empathetic, cooperative, trusting, and warm. You prioritize social harmony and genuinely enjoy helping others.`,
      spectrum: High,
      category: "Agreeableness",
      ranking: "High"
    },
    {
      description: `You are competitive, blunt, and highly skeptical. You prioritize objective truth and efficiency over people's feelings, and aren't afraid of confrontation.`,
      spectrum: Low,
      category: "Agreeableness",
      ranking: "Low"
    },

    // Neuroticism
    {
      description: `You are emotionally sensitive. Your nervous system reacts strongly to stressors, meaning you experience emotions intensely and are prone to worrying, anxiety, or mood shifts.`,
      spectrum: High,
      category: "Neuroticism",
      ranking: "High"
    },
    {
      description: `You are highly emotionally stable. You are secure, calm under intense pressure, resilient, and slow to experience negative emotions or anxiety.`,
      spectrum: Low,
      category: "Neuroticism",
      ranking: "Low"
    },

  ]);

  result = input.required<BigFiveResult>();
  evaluation: Signal<Array<EvaluationScore>> = computed(() => {
    const r = this.result();
    return [
      {
        title: `Openness to Experience`,
        score: Math.floor((r.openness / 20) * 100),
        category: "Openness"
      },
      {
        title: `Conscientiousness`,
        score: Math.floor((r.conscientiousness / 20) * 100),
        category: "Conscientiousness"
      },
      {
        title: `Extroversion`,
        score: Math.floor((r.extroversion / 20) * 100),
        category: "Extroversion"
      },
      {
        title: `Agreeableness`,
        score: Math.floor((r.agreeableness / 20) * 100),
        category: "Agreeableness"
      },
      {
        title: `Neuroticism`,
        score: Math.floor((r.neuroticism / 20) * 100),
        category: "Neuroticism"
      },
    ];
  });


  public getDescription(category: BigFiveCategory, ranking: BigFiveRanking) {
    const d = this.descriptions().find(d => d.category === category && d.ranking === ranking);
    return (d) ? d.description : "";
  }

}
