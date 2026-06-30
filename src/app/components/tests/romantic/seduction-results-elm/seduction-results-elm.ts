import {Component, computed, input, signal, WritableSignal} from '@angular/core';
import {
  SeductionAnswerToArchetypeMap,
  SeductionArchetypeProfile,
  SeductionArchetypesResult
} from '../../../../types/result.types';
import {FourMultipleChoiceKeys} from '../../../../types/test.types';

const defaultProfile: SeductionArchetypeProfile = {
  name: "",
  archetype: "",
  energy: ``,
  style: ``,
  shadow: ``
};

const map: SeductionAnswerToArchetypeMap = {
  A: "Siren",
  B: "Mother",
  C: "Hunter",
  D: "Mystic"
};

@Component({
  selector: 'app-seduction-results-elm',
  imports: [],
  templateUrl: './seduction-results-elm.html',
  styleUrl: './seduction-results-elm.css',
})
export class SeductionResultsElm {

  private options: WritableSignal<Array<SeductionArchetypeProfile>> = signal([
    {
      name: "The Lover",
      archetype: "Siren",
      energy: `Magnetism, Playfulness, Passion, and Seduction.`,
      style: `You are driven by chemistry and emotional intensity. You view romance as an art form and excel at making your partner feel completely captivated. You bring excitement and beauty into relationships.`,
      shadow: `You may chase unavailable partners for the thrill of the chase, or create unnecessary drama just to feel a spark when things get too peaceful.`
    },
    {
      name: "The Caregiver",
      archetype: "Mother",
      energy: `Nurturing, Warmth, Unconditional Love, and Safety.`,
      style: `You are the ultimate emotional anchor. Your partners feel safe, protected, and deeply cared for around you. You express love through acts of service and creating a harmonious home.`,
      shadow: `You risk falling into the "fixer" trap, attracting partners who need to be rescued. Be careful not to cross the line from romantic partner to parent, which can inadvertently kill romantic chemistry.`
    },
    {
      name: "The Boss / Alpha",
      archetype: "Hunter",
      energy: `Independence, Power, Directness, and Ambition.`,
      style: `You are highly self-sufficient and fiercely protective of your autonomy. You want an equal—a power couple dynamic where you both push each other to succeed. You are fiercely loyal and direct about your needs.`,
      shadow: `You might view emotional vulnerability as a sign of weakness. Your instinct to protect yourself can make it hard for a partner to feel truly needed or emotionally close to you.`
    },
    {
      name: "The Enigma",
      archetype: "Mystic",
      energy: `Mystery, Wisdom, Depth, and Self-Containment.`,
      style: `You possess a quiet, alluring depth that makes people want to figure you out. You bypass superficial dating games entirely, seeking a profound soul-to-soul connection. You are fiercely independent and comfortable in your own skin.`,
      shadow: `Your need for privacy can morph into emotional unavailability. If you keep your walls up too high for too long, your partner may feel lonely or completely shut out.`
    },
  ]);

  result = input.required<SeductionArchetypesResult>();
  evaluation = computed(() => {
    const r = this.result();
    const keys = Object.keys(r) as Array<FourMultipleChoiceKeys>;
    const values = Object.values(r) as Array<number>;
    const temp = values
      .map((value,index) => ({value,index}))
      .sort((a, b) => a.value - b.value);
    const top = temp[0];
    const second = temp[1];

    const topArchetype = map[keys[top.index]];
    const secondaryArchetype = map[keys[second.index]];
    return {
      top: this.options().find(o => o.archetype === topArchetype) ?? defaultProfile,
      second: this.options().find(o => o.archetype === secondaryArchetype) ?? defaultProfile,
    };

  });
  protected readonly eval = eval;
}
