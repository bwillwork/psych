import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {TestChoices} from '../../types/test.types';
import {initTestChoices} from '../../util/test.util';

@Injectable({
  providedIn: 'root',
})
export class TestChoiceService {

  private testChoices: WritableSignal<TestChoices> = signal(initTestChoices());
  private started = computed(() => {
    const values = Object.values(this.testChoices());
    return values.reduce((agg,val) => {
      return agg && val;
    },true);
  });

  public hasStartedTest(): Signal<boolean> {
    return this.started;
  }
  public resetTestChoices() {
    this.testChoices.update(() => initTestChoices());
  }
  public chooseTests(testChoices: TestChoices) {
    this.testChoices.update(() => testChoices);
  }
  public getTestChoices(): Signal<TestChoices> {
    return this.testChoices;
  }
}
