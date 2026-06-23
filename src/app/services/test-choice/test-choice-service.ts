import {computed, inject, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {TestChoices} from '../../types/test.types';
import {initTestChoices} from '../../util/test.util';
import {Store} from '@ngrx/store';
import {selectHasStartedTest, selectTestChoices} from '../../data/selectors/test.selectors';
import {choose, reset} from '../../data/actions/testChoice.actions';

@Injectable({
  providedIn: 'root',
})
export class TestChoiceService {

  private readonly store = inject(Store);

  public hasStartedTest(): Signal<boolean> {
    return this.store.selectSignal(selectHasStartedTest);
  }
  public resetTestChoices() {
    this.store.dispatch(reset());
  }
  public chooseTests(choices: TestChoices) {
    this.store.dispatch(choose({choices}))
  }
  public getTestChoices(): Signal<TestChoices> {
    return this.store.selectSignal(selectTestChoices);
  }
}
