import {Component, computed, input, signal, WritableSignal} from '@angular/core';
import {SixStylesOfLovingResult} from '../../../../types/result.types';

export type SixStylesOfLovingStyle = "eros" | "ludus" | "storge" | "pragma" | "mania" | "agape";
export type SixStylesOfLovingSpectrum = {high: number, low: number};
export type SixStylesOfLovingOption = {
  style: SixStylesOfLovingStyle,
  spectrum: SixStylesOfLovingSpectrum,
  name: string,
  description: string
};

@Component({
  selector: 'app-six-styles-results-elm',
  imports: [],
  templateUrl: './six-styles-results-elm.html',
  styleUrl: './six-styles-results-elm.css',
})
export class SixStylesResultsElm {

  options: WritableSignal<Array<SixStylesOfLovingOption>> = signal([
    {
      style: "eros",
      spectrum: {high: 15,low: 11},
      name: "Eros",
      description: "You chase intense passion, strong physical chemistry, and fairy-tale romance. You love being in love, but you need to be careful that the flame doesn't burn out too quickly once the initial honeymoon phase ends."
    },
    {
      style: "ludus",
      spectrum: {high: 15,low: 11},
      name: "Ludus",
      description: "You view love as a fun, exciting game. You value your independence, freedom, and autonomy highly, and you enjoy the thrill of the chase. You may struggle with vulnerability or long-term commitment."
    },
    {
      style: "storge",
      spectrum: {high: 15,low: 11},
      name: "Storge",
      description: "For you, love must be built on a foundation of deep, enduring friendship. You value trust, shared values, and long-term stability over dramatic passion. Your relationships are highly resilient."
    },
    {
      style: "pragma",
      spectrum: {high: 15,low: 11},
      name: "Pragma",
      description: "You approach love logically and practically. You look for a partner who checks the right boxes—sharing your lifestyle, financial goals, and family values. You prioritize ultimate compatibility over raw chemistry."
    },
    {
      style: "mania",
      spectrum: {high: 15,low: 11},
      name: "Mania",
      description: "You experience love with extreme intensity, which can lead to dramatic emotional highs and painful lows. You crave constant reassurance, are highly sensitive to rejection, and may struggle with jealousy or codependency."
    },
    {
      style: "agape",
      spectrum: {high: 15,low: 11},
      name: "Agape",
      description: "Your love is selfless, compassionate, and unconditional. You are inherently a giver, willing to sacrifice your own needs for your partner’s happiness. Be careful not to lose yourself entirely or let others take advantage of your kindness."
    },
  ]);

  result = input.required<SixStylesOfLovingResult>();
  evaluation = computed(() => {
    return (this.result() as unknown) as {[key in SixStylesOfLovingStyle]: number};
  });
}
