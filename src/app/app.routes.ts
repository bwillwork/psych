import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Routes} from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import TestPage from './pages/test-page/test-page';
import {ResultsPage} from './pages/results-page/results-page';
import {MethodologyPage} from './pages/methodology-page/methodology-page';
import {inject} from '@angular/core';
import {TestService} from './services/test/test-service';



export const viewResultsGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const testService = inject(TestService);
  return true;//testService.canViewResults();
};

export const routes: Routes = [
  { path: '', component: HomePage, data: { inNav: true, label: 'Home' } },
  { path: 'test', component: TestPage, data: { inNav: false } },
  { path: 'results', component: ResultsPage, canActivate: [viewResultsGuard], data: { inNav: false } },
  { path: 'methodology', component: MethodologyPage, data: { inNav: true, label: 'Methodology'} },
  { path: '**', redirectTo: '/' , data: {inNav: false}},
];


