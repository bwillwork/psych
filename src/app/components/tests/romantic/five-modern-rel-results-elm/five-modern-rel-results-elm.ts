import {Component, computed, input, signal} from '@angular/core';
import {
  FiveModernRelAnswerToArchetypeMap,
  FiveModernRelArchetypeProfile,
  FiveModernRelationshipsResult
} from '../../../../types/result.types';
import {FiveMultipleChoiceKeys} from '../../../../types/test.types';

const map: FiveModernRelAnswerToArchetypeMap = {
  A: "Pleaser",
  B: "Victim",
  C: "Controller",
  D: "Vacillator",
  E: "Secure Connector"
};

const defaultProfile: FiveModernRelArchetypeProfile = {
  name: "",
  archetype: "",
  dynamic: "",
  relationships: ""
};

@Component({
  selector: 'app-five-modern-rel-results-elm',
  imports: [],
  templateUrl: './five-modern-rel-results-elm.html',
  styleUrl: './five-modern-rel-results-elm.css',
})
export class FiveModernRelResultsElm {

  private options = signal<Array<FiveModernRelArchetypeProfile>>([
    {
      name: "The Pleaser",
      archetype: "Pleaser",
      dynamic: `Driven by a fear of rejection and conflict. You grew up feeling like you had to be "good" or low-maintenance to receive love.`,
      relationships: `You monitor your partner’s moods constantly and modify your behavior to keep them happy. You struggle to say "no" and often sacrifice your own identity, which can breed hidden resentment over time.`
    },
    {
      name: "The Victim",
      archetype: "Victim",
      dynamic: `Driven by a sense of powerlessness. You likely grew up in a chaotic, unpredictable, or angry household where compliance was the only way to survive.`,
      relationships: `You tend to tolerate poor treatment because it feels familiar. You blend into the background, copy your partner's reality, and find it incredibly difficult to believe you have the power to change your circumstances or leave.`
    },
    {
      name: "The Controller",
      archetype: "Controller",
      dynamic: `Driven by a fear of vulnerability. You likely had to grow up too fast or couldn't rely on adults, so you learned that relying on anyone else is dangerous.`,
      relationships: `You use rigidity, strict boundaries, and control to keep emotional pain at bay. If you can control the schedule, the finances, or the environment, you don't have to feel exposed or helpless.`
    },
    {
      name: "The Vacillator",
      archetype: "Vacillator",
      dynamic: `Driven by a fear of abandonment. You likely experienced inconsistent love growing up—sometimes parents were warm, sometimes they were physically or emotionally absent.`,
      relationships: `You chase a highly idealized, passionate version of love. You put partners on a pedestal, but the moment they show human flaws or daily life gets boring, you feel let down, withdraw angrily, and blame them for breaking the magic.`
    },
    {
      name: "The Secure Connector",
      archetype: "Secure Connector",
      dynamic: `Driven by high self-esteem and emotional resilience. You likely grew up with stable modeling of how to handle emotions and conflict.`,
      relationships: `You can tolerate differences of opinion without feeling personally attacked. You communicate boundaries cleanly, handle conflict constructively, and successfully balance intense intimacy with personal freedom.`
    },
  ]);

  result = input.required<FiveModernRelationshipsResult>();
  evaluation = computed(() => {
    const r = this.result();
    let highestKey: FiveMultipleChoiceKeys = "A";
    const keys = Object.keys(r) as Array<FiveMultipleChoiceKeys>;
    const values = Object.values(r) as Array<number>;
    const temp = {val:0,index:-1};
    for(let v in values) {
      const _v = parseInt(v);
      const value = values[v];

      if(temp.index === -1 || temp.val < value) {
        temp.index = _v;
        temp.val = value;
      }
    }

    const key = keys[temp.index];
    const archetype = map[key];
    return this.options().find(o => o.archetype === archetype) ?? defaultProfile;

  });
}
