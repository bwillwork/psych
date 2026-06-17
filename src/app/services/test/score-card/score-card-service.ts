import {inject, Injectable} from '@angular/core';
import {BigFiveService} from '../personality/big-five/big-five-service';
import {MyersBrigsService} from "../personality/myers-brigs/myers-brigs-service";
import {PenService} from '../personality/pen/pen-service';
import {FiveModernRelationshipsService} from '../romantic/five-modern-relationships/five-modern-relationships-service';
import {SeductionArchetypesService} from '../romantic/seduction-archetypes/seduction-archetypes-service';
import {SixStylesOfLovingService} from '../romantic/six-styles-of-loving/six-styles-of-loving-service';
import {TestChoices} from '../../../types/test.types';

@Injectable({
  providedIn: 'root',
})
export class ScoreCardService {

  private bigFive = inject(BigFiveService);
  private myersBrigs = inject(MyersBrigsService);
  private pen = inject(PenService);

  private fiveModernRelationships = inject(FiveModernRelationshipsService);
  private seductionArchetypes = inject(SeductionArchetypesService);
  private sixStylesOfLoving = inject(SixStylesOfLovingService);



  private clearAll() {
    this.bigFive.clearQuestions();
    this.myersBrigs.clearQuestions();
    this.pen.clearQuestions();

    this.fiveModernRelationships.clearQuestions();
    this.seductionArchetypes.clearQuestions();
    this.sixStylesOfLoving.clearQuestions();
  }

  private getNextQuestion() {

  }


}
