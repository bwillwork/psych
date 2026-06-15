import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {BigFiveService} from './personality/big-five/big-five-service';
import {MyersBrigsService} from './personality/myers-brigs/myers-brigs-service';
import {PenService} from './personality/pen/pen-service';
import {FiveModernRelationshipsService} from './romantic/five-modern-relationships/five-modern-relationships-service';
import {SeductionArchetypesService} from './romantic/seduction-archetypes/seduction-archetypes-service';
import {SixStylesOfLovingService} from './romantic/six-styles-of-loving/six-styles-of-loving-service';
import {
  PersonalityQuestionScoreServiceType,
  QuestionScoreService,
  QuestionScoreServiceType, RomanticQuestionScoreServiceType
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

  private personalityScoreServices: Array<PersonalityQuestionScoreServiceType> = [this.bigFiveService,this.myersBrigsService,this.penService];
  private romanticScoreServices: Array<RomanticQuestionScoreServiceType> = [this.fiveModernRelService,this.seductionArchService,this.sixStylesOfLoveService];
  private allScoreServices: Array<QuestionScoreServiceType> = [...this.personalityScoreServices,...this.romanticScoreServices];

  private currentTest: WritableSignal<Array<QuestionScoreServiceType>> = signal([]);

  public chooseTests() {

  }


  public canViewResults(): boolean {
    return true;
  }
}
