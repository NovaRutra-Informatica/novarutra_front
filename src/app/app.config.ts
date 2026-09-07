import { ApplicationConfig, isDevMode } from '@angular/core';
import {
    provideClientHydration,
    withNoIncrementalHydration,
} from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';

// NOTE: This single-page site intentionally uses native anchor navigation instead of Angular Router.
export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(withNoIncrementalHydration()),
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000',
        }),
    ],
};
