import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {TestPage} from './pages/test-page/test-page';
import {ResultsPage} from './pages/results-page/results-page';
import {MethodologyPage} from './pages/methodology-page/methodology-page';

export const routes: Routes = [
  { path: '', component: HomePage, data: { inNav: true, label: 'Home' } },
  { path: 'test', component: TestPage, data: { inNav: true, label: 'Test'} },
  { path: 'results', component: ResultsPage, data: { inNav: false } },
  { path: 'methodology', component: MethodologyPage, data: { inNav: true, label: 'Methodology'} },
  { path: '**', redirectTo: '/' , data: {inNav: false}},
];
