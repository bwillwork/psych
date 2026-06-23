import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {bigFiveReducer} from './data/reducers/bigFive.reducer';
import {myersBrigsReducer} from './data/reducers/myersBrigs.reducer';
import {penReducer} from './data/reducers/pen.reducer';
import {testChoicesReducer} from './data/reducers/testChoice.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), provideStore({
    bigFive: bigFiveReducer,
    myersBrigs: myersBrigsReducer,
    pen: penReducer,
    choices: testChoicesReducer
  })],
};
