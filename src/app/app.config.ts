import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { countReducer } from '../counter.reducer';
import { taskReducer } from './Task_Store/task.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore(
      {
        count:countReducer,
        tasks:taskReducer
      }
    )
]
};
