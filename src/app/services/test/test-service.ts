import {Injectable, signal, WritableSignal} from '@angular/core';
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

  public canViewResults(): boolean {
    const keys = Object.keys(this.testChoices());

    return true;
  }

}
