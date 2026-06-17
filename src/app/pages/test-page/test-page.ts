import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {TestService} from '../../services/test/test-service';
import {BigFiveService} from '../../services/test/personality/big-five/big-five-service';
import {MyersBrigsService} from '../../services/test/personality/myers-brigs/myers-brigs-service';
import {PenService} from '../../services/test/personality/pen/pen-service';
import {
  FiveModernRelationshipsService
} from '../../services/test/romantic/five-modern-relationships/five-modern-relationships-service';
import {
  SeductionArchetypesService
} from '../../services/test/romantic/seduction-archetypes/seduction-archetypes-service';
import {SixStylesOfLovingService} from '../../services/test/romantic/six-styles-of-loving/six-styles-of-loving-service';

@Component({
  selector: 'app-test-page',
  imports: [],
  templateUrl: './test-page.html',
  styleUrl: './test-page.css',
})
export class TestPage {


  private bigFive = inject(BigFiveService);
  private myersBrigs = inject(MyersBrigsService);
  private pen = inject(PenService);

  private fiveModernRelationships = inject(FiveModernRelationshipsService);
  private seductionArchetypes = inject(SeductionArchetypesService);
  private sixStylesOfLoving = inject(SixStylesOfLovingService);

  private testService = inject(TestService);
  private router = inject(Router);
  private choices = this.testService.getTestChoices();


  constructor() {

  }

  seeResults() {
    const canViewResults = this.testService.canViewResults();
    if(canViewResults) this.router.navigate(["/results"]);
  }

}
