import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {BigFiveService} from './personality/big-five/big-five-service';
import {MyersBrigsService} from './personality/myers-brigs/myers-brigs-service';
import {PenService} from './personality/pen/pen-service';
import {FiveModernRelationshipsService} from './romantic/five-modern-relationships/five-modern-relationships-service';
import {SeductionArchetypesService} from './romantic/seduction-archetypes/seduction-archetypes-service';
import {SixStylesOfLovingService} from './romantic/six-styles-of-loving/six-styles-of-loving-service';
import {
  QuestionServiceMap, TestChoices
} from '../../types/test.types';

@Injectable({
  providedIn: 'root',
})
export class TestService {

  private bigFiveService = inject(BigFiveService);
  private myersBrigsService = inject(MyersBrigsService);
  private penService = inject(PenService);

  private fiveModernRelService = inject(FiveModernRelationshipsService);
  private seductionArchService = inject(SeductionArchetypesService);
  private sixStylesOfLoveService = inject(SixStylesOfLovingService);

  private questionServiceMap: QuestionServiceMap = {
    bigFive: this.bigFiveService,
    myersBrigs: this.myersBrigsService,
    pen: this.penService,
    fiveModern: this.fiveModernRelService,
    seduction: this.seductionArchService,
    sixStyles: this.sixStylesOfLoveService
  };


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

  public canViewResults(): boolean {
    return true;
  }

}
