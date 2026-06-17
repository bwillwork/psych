import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {TestChoices} from '../../types/test.types';

@Injectable({
  providedIn: 'root',
})
export class TestService {

  private testChoices: WritableSignal<TestChoices> = signal({
    bigFive: false,
    myersBrigs: false,
    pen: false,
    fiveModern: false,
    seduction: false,
    sixStyles: false
  });

  private startedTest = computed(() => {
    const choiceValues = Object.values(this.testChoices()) as Array<boolean>;
    return choiceValues.reduce((agg,val) => {
      return agg || val;
    },false);
  });

  public chooseTests(testChoices: TestChoices) {
    this.testChoices.update(() => testChoices);
  }

  public resetTestChoices() {
    this.testChoices.update(() => ({
      bigFive: false,
      myersBrigs: false,
      pen: false,
      fiveModern: false,
      seduction: false,
      sixStyles: false
    }));
  }

  public getTestChoices(): Signal<TestChoices> {
    return this.testChoices;
  }

  public hasStartedTest(): Signal<boolean> {
    return this.startedTest;
  }

  public canViewResults(): boolean {
    const keys = Object.keys(this.testChoices());

    return true;
  }

}
