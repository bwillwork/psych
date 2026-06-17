import {BigFiveService} from '../services/test/personality/big-five/big-five-service';
import {MyersBrigsService} from '../services/test/personality/myers-brigs/myers-brigs-service';
import {PenService} from '../services/test/personality/pen/pen-service';
import {
  FiveModernRelationshipsService
} from '../services/test/romantic/five-modern-relationships/five-modern-relationships-service';
import {SeductionArchetypesService} from '../services/test/romantic/seduction-archetypes/seduction-archetypes-service';
import {SixStylesOfLovingService} from '../services/test/romantic/six-styles-of-loving/six-styles-of-loving-service';

export type QuestionServiceMap = {
  bigFive: BigFiveService,
  myersBrigs: MyersBrigsService,
  pen: PenService,
  fiveModern: FiveModernRelationshipsService,
  seduction: SeductionArchetypesService,
  sixStyles: SixStylesOfLovingService
};
