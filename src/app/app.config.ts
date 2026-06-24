import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {bigFiveReducer} from './data/reducers/personality/bigFive.reducer';
import {myersBrigsReducer} from './data/reducers/personality/myersBrigs.reducer';
import {penReducer} from './data/reducers/personality/pen.reducer';
import {testChoicesReducer} from './data/reducers/testChoice.reducer';
import {fiveModernRelReducer} from './data/reducers/romantic/fiveModernRel.reducer';
import {seductionReducer} from './data/reducers/romantic/seduction.reducer';
import {sixStylesReducer} from './data/reducers/romantic/sixStyles.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), provideStore({

    bigFive: bigFiveReducer,
    myersBrigs: myersBrigsReducer,
    pen: penReducer,

    fiveModern: fiveModernRelReducer,
    seduction: seductionReducer,
    sixStyles: sixStylesReducer,

    choices: testChoicesReducer
  })],
};
